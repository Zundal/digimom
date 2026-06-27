import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import type { Note } from "../lib/chart";
import {
  HIT_Z,
  LANES,
  LANE_COLORS,
  LANE_WIDTH,
  LEAD,
  SPAWN_Z,
  TILE_Y,
  TRAVEL,
  laneX,
  type GameBus,
} from "../lib/game";

// ── Spectrum keyboard layout (the stage) ────────────────────────────────────
const OCTAVES = 4;
const TOTAL_WHITE = OCTAVES * 7; // 28
const SLOT = 0.5;
const MAX_PITCH = OCTAVES * 12 - 1;

const SEMI: { black: boolean; slot: number }[] = [
  { black: false, slot: 0 },
  { black: true, slot: 0.5 },
  { black: false, slot: 1 },
  { black: true, slot: 1.5 },
  { black: false, slot: 2 },
  { black: false, slot: 3 },
  { black: true, slot: 3.5 },
  { black: false, slot: 4 },
  { black: true, slot: 4.5 },
  { black: false, slot: 5 },
  { black: true, slot: 5.5 },
  { black: false, slot: 6 },
];

const VIOLET = new THREE.Color("#7c5cff");
const AQUA = new THREE.Color("#36e0c8");
const PINK = new THREE.Color("#ff6fb5");

function keyColor(frac: number): THREE.Color {
  const c = new THREE.Color();
  if (frac < 0.5) c.copy(VIOLET).lerp(AQUA, frac / 0.5);
  else c.copy(AQUA).lerp(PINK, (frac - 0.5) / 0.5);
  return c;
}

type Key = {
  x: number;
  z: number;
  black: boolean;
  freq: number;
  color: THREE.Color;
  energy: number;
  prev: number;
};

function buildKeys(): Key[] {
  const keys: Key[] = [];
  const fmin = 42;
  const fmax = 6500;
  for (let o = 0; o < OCTAVES; o++) {
    for (let i = 0; i < 12; i++) {
      const def = SEMI[i];
      const slotX = o * 7 + def.slot;
      const pitch = o * 12 + i;
      const frac = pitch / MAX_PITCH;
      keys.push({
        x: (slotX - (TOTAL_WHITE - 1) / 2) * SLOT,
        z: def.black ? -0.42 : 0,
        black: def.black,
        freq: fmin * Math.pow(fmax / fmin, frac),
        color: keyColor(frac),
        energy: 0,
        prev: 0,
      });
    }
  }
  return keys;
}

function radialTexture(): THREE.Texture {
  const s = 128;
  const cv = document.createElement("canvas");
  cv.width = cv.height = s;
  const ctx = cv.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.35)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(cv);
}

const BURST_MAX = 700;
const TILE_POOL = 72;
const LANE_C = LANE_COLORS.map((c) => new THREE.Color(c));

function Stage({
  active,
  reduced,
  analyser,
  data,
  chart,
  getTime,
  bus,
  speed,
}: {
  active: boolean;
  reduced: boolean;
  analyser: React.MutableRefObject<AnalyserNode | null>;
  data: React.MutableRefObject<Uint8Array>;
  chart: React.MutableRefObject<Note[]>;
  getTime: () => number;
  bus: GameBus;
  speed: number;
}) {
  const keys = useMemo(() => buildKeys(), []);
  const sprite = useMemo(() => radialTexture(), []);

  const keyRefs = useRef<THREE.Mesh[]>([]);
  const beamRefs = useRef<THREE.Mesh[]>([]);
  const tileRefs = useRef<THREE.Mesh[]>([]);
  const barRefs = useRef<THREE.Mesh[]>([]);
  const colRefs = useRef<THREE.Mesh[]>([]);
  const ringRefs = useRef<THREE.Mesh[]>([]);
  const group = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const prevFlash = useRef(new Float32Array(LANES));
  const scanStart = useRef(0);
  const prevTime = useRef(0);

  // ── Spark burst pool ──
  const burst = useMemo(() => {
    const pos = new Float32Array(BURST_MAX * 3).fill(9999);
    const col = new Float32Array(BURST_MAX * 3);
    const vel = new Float32Array(BURST_MAX * 3);
    const life = new Float32Array(BURST_MAX);
    return { pos, col, vel, life, cursor: 0 };
  }, []);
  const burstGeo = useRef<THREE.BufferGeometry>(null);

  const spawnBurst = (
    x: number,
    y: number,
    z: number,
    color: THREE.Color,
    amount: number,
    power = 1
  ) => {
    for (let n = 0; n < amount; n++) {
      const idx = burst.cursor;
      burst.cursor = (burst.cursor + 1) % BURST_MAX;
      const j = idx * 3;
      burst.pos[j] = x + (Math.random() - 0.5) * 0.2;
      burst.pos[j + 1] = y;
      burst.pos[j + 2] = z + (Math.random() - 0.5) * 0.2;
      const spread = 0.9 * power;
      burst.vel[j] = (Math.random() - 0.5) * spread;
      burst.vel[j + 1] = (1.6 + Math.random() * 2.6) * power;
      burst.vel[j + 2] = (Math.random() - 0.5) * spread;
      burst.col[j] = color.r;
      burst.col[j + 1] = color.g;
      burst.col[j + 2] = color.b;
      burst.life[idx] = 0.6 + Math.random() * 0.7;
    }
  };

  // ── Ambient motes ──
  const motes = useMemo(() => {
    const N = 420;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = Math.random() * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
      const c = keyColor(Math.random());
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { N, pos, col };
  }, []);
  const moteGeo = useRef<THREE.BufferGeometry>(null);
  const moteMat = useRef<THREE.PointsMaterial>(null);

  useFrame((state, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    const t = state.clock.elapsedTime;

    let haveData = false;
    if (active && analyser.current && data.current.length) {
      analyser.current.getByteFrequencyData(
        data.current as Uint8Array<ArrayBuffer>
      );
      haveData = true;
    }
    const buf = data.current;
    const binHz = haveData
      ? analyser.current!.context.sampleRate / (buf.length * 2)
      : 1;

    // ── Spectrum keys ──
    let bass = 0;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let target: number;
      if (haveData) {
        const c = Math.round(key.freq / binHz);
        let sum = 0;
        let cnt = 0;
        for (let b = c - 1; b <= c + 1; b++) {
          if (b >= 0 && b < buf.length) {
            sum += buf[b];
            cnt++;
          }
        }
        target = Math.pow(cnt ? sum / cnt / 255 : 0, 0.82);
      } else {
        target = reduced ? 0.03 : 0.05 + 0.04 * Math.sin(t * 1.4 + key.x * 0.6);
      }
      key.prev = key.energy;
      const rate = target > key.energy ? 0.55 : 0.14;
      key.energy += (target - key.energy) * rate;
      const e = key.energy;
      if (i < 8) bass += e;

      const mesh = keyRefs.current[i];
      if (mesh) {
        const press = (key.black ? 0.12 : 0.16) * e;
        mesh.position.y = (key.black ? 0.12 : 0) - press;
        mesh.rotation.x = e * 0.05;
        (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity =
          0.1 + e * 1.9;
      }
      const beam = beamRefs.current[i];
      if (beam) {
        // Kept short + translucent so the foreground game stays readable.
        const h = 0.02 + e * (reduced ? 1.2 : 2.8);
        beam.scale.y = h;
        beam.position.y = (key.black ? 0.36 : 0.12) + h / 2;
        (beam.material as THREE.MeshBasicMaterial).opacity = Math.min(
          0.4,
          e * 0.5
        );
      }
    }
    bass /= 8;

    // ── Falling note tiles ──
    const now = getTime();
    if (now < prevTime.current - 0.15) scanStart.current = 0; // restarted/seek
    prevTime.current = now;
    const notes = chart.current;
    // advance the lower bound past fully-gone notes
    while (
      scanStart.current < notes.length &&
      notes[scanStart.current].time < now - 0.45
    ) {
      scanStart.current++;
    }
    // Higher speed → shorter lead → notes cover the same distance faster.
    const lead = LEAD / speed;
    let slot = 0;
    for (let k = scanStart.current; k < notes.length && slot < TILE_POOL; k++) {
      const note = notes[k];
      const ttl = note.time - now; // time to hit-line
      if (ttl > lead) break;
      if (note.hit) continue; // struck → vanished
      const tile = tileRefs.current[slot++];
      if (!tile) continue;
      tile.visible = true;
      tile.position.set(laneX(note.lane), TILE_Y, HIT_Z - (ttl / lead) * TRAVEL);
      const mat = tile.material as THREE.MeshStandardMaterial;
      if (note.judged) {
        // missed note slides past, dimmed
        mat.emissiveIntensity = 0.25;
        mat.color.setRGB(0.12, 0.12, 0.16);
      } else {
        mat.emissiveIntensity = 1.5;
        mat.color.copy(LANE_C[note.lane]).multiplyScalar(0.18);
      }
    }
    for (let s = slot; s < TILE_POOL; s++) {
      const tile = tileRefs.current[s];
      if (tile) tile.visible = false;
    }

    // ── Hit bar + lane flashes (big, obvious hit feedback) ──
    for (let l = 0; l < LANES; l++) {
      const f = bus.flash[l];
      if (f > prevFlash.current[l] + 0.3) {
        // rising edge → a hit just happened on this lane
        if (!reduced) spawnBurst(laneX(l), TILE_Y, HIT_Z, LANE_C[l], 34, 1.5);
      }
      prevFlash.current[l] = f;
      bus.flash[l] = f * 0.88; // decay

      const bar = barRefs.current[l];
      if (bar) {
        (bar.material as THREE.MeshBasicMaterial).opacity = 0.3 + f * 0.7;
        bar.scale.set(1 + f * 0.25, 1 + f * 2.5, 1 + f * 0.8);
      }
      // Vertical light burst column.
      const col = colRefs.current[l];
      if (col) {
        (col.material as THREE.MeshBasicMaterial).opacity = f * 0.6;
        col.scale.set(1 + f * 0.4, 1, 1);
      }
      // Expanding shock ring on the floor.
      const ring = ringRefs.current[l];
      if (ring) {
        const s = 0.2 + (1 - f) * 2.4;
        ring.scale.set(s, s, s);
        (ring.material as THREE.MeshBasicMaterial).opacity = f * 0.7;
      }
    }

    // ── Burst particles ──
    if (!reduced && burstGeo.current) {
      for (let i = 0; i < BURST_MAX; i++) {
        if (burst.life[i] <= 0) continue;
        const j = i * 3;
        burst.life[i] -= dt;
        burst.vel[j + 1] -= 3.4 * dt;
        burst.pos[j] += burst.vel[j] * dt;
        burst.pos[j + 1] += burst.vel[j + 1] * dt;
        burst.pos[j + 2] += burst.vel[j + 2] * dt;
        if (burst.life[i] <= 0)
          burst.pos[j] = burst.pos[j + 1] = burst.pos[j + 2] = 9999;
      }
      (
        burstGeo.current.getAttribute("position") as THREE.BufferAttribute
      ).needsUpdate = true;
    }

    // ── Ambient motes ──
    if (moteGeo.current) {
      const arr = motes.pos;
      for (let i = 0; i < motes.N; i++) {
        const iy = i * 3 + 1;
        arr[iy] += dt * (0.12 + (i % 5) * 0.04);
        if (arr[iy] > 8) arr[iy] = 0;
      }
      (
        moteGeo.current.getAttribute("position") as THREE.BufferAttribute
      ).needsUpdate = true;
      if (moteMat.current) moteMat.current.opacity = 0.16 + bass * 0.5;
    }

    if (glowRef.current) {
      const gm = glowRef.current.material as THREE.MeshBasicMaterial;
      gm.opacity = 0.22 + bass * 0.5;
    }
    // Keyboard stays square-on (no sway) so lanes read straight for play.
  });

  return (
    <group ref={group}>
      {/* Lane highways */}
      {Array.from({ length: LANES }, (_, l) => (
        <mesh
          key={`lane${l}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[laneX(l), -0.12, (HIT_Z + SPAWN_Z) / 2]}
        >
          <planeGeometry args={[LANE_WIDTH * 0.86, TRAVEL]} />
          <meshBasicMaterial
            color={LANE_COLORS[l]}
            transparent
            opacity={0.05}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Hit bar segments */}
      {Array.from({ length: LANES }, (_, l) => (
        <mesh
          key={`bar${l}`}
          ref={(m) => {
            if (m) barRefs.current[l] = m;
          }}
          position={[laneX(l), TILE_Y - 0.18, HIT_Z]}
        >
          <boxGeometry args={[LANE_WIDTH * 0.9, 0.06, 0.16]} />
          <meshBasicMaterial
            color={LANE_COLORS[l]}
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Per-lane vertical light burst on hit */}
      {Array.from({ length: LANES }, (_, l) => (
        <mesh
          key={`col${l}`}
          ref={(m) => {
            if (m) colRefs.current[l] = m;
          }}
          position={[laneX(l), TILE_Y + 1.6, HIT_Z]}
        >
          <boxGeometry args={[LANE_WIDTH * 0.55, 3.4, 0.12]} />
          <meshBasicMaterial
            color={LANE_COLORS[l]}
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Expanding shock ring on the floor */}
      {Array.from({ length: LANES }, (_, l) => (
        <mesh
          key={`ring${l}`}
          ref={(m) => {
            if (m) ringRefs.current[l] = m;
          }}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[laneX(l), -0.1, HIT_Z]}
        >
          <ringGeometry args={[0.55, 0.78, 40]} />
          <meshBasicMaterial
            color={LANE_COLORS[l]}
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Falling-note tile pool */}
      {Array.from({ length: TILE_POOL }, (_, i) => (
        <mesh
          key={`tile${i}`}
          ref={(m) => {
            if (m) tileRefs.current[i] = m;
          }}
          visible={false}
        >
          <boxGeometry args={[LANE_WIDTH * 0.8, 0.16, 0.55]} />
          <meshStandardMaterial
            emissive="#ffffff"
            emissiveIntensity={1.4}
            color="#222"
            metalness={0.2}
            roughness={0.5}
          />
        </mesh>
      ))}

      {/* Spectrum key beds */}
      {keys.map((k, i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) keyRefs.current[i] = m;
          }}
          position={[k.x, k.black ? 0.12 : 0, k.z]}
        >
          <boxGeometry args={k.black ? [0.28, 0.34, 1.25] : [0.46, 0.22, 2.0]} />
          <meshStandardMaterial
            color={k.black ? "#0c0c14" : "#23233a"}
            emissive={k.color}
            emissiveIntensity={0.12}
            metalness={0.35}
            roughness={0.35}
          />
        </mesh>
      ))}

      {/* Spectrum beams */}
      {keys.map((k, i) => (
        <mesh
          key={`b${i}`}
          ref={(m) => {
            if (m) beamRefs.current[i] = m;
          }}
          position={[k.x, 0.12, k.z]}
        >
          <boxGeometry args={[k.black ? 0.16 : 0.3, 1, 0.08]} />
          <meshBasicMaterial
            color={k.color}
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Sparks */}
      <points>
        <bufferGeometry ref={burstGeo}>
          <bufferAttribute attach="attributes-position" args={[burst.pos, 3]} />
          <bufferAttribute attach="attributes-color" args={[burst.col, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          map={sprite}
          vertexColors
          transparent
          opacity={0.98}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Ambient motes */}
      <points>
        <bufferGeometry ref={moteGeo}>
          <bufferAttribute attach="attributes-position" args={[motes.pos, 3]} />
          <bufferAttribute attach="attributes-color" args={[motes.col, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={moteMat}
          size={0.045}
          map={sprite}
          vertexColors
          transparent
          opacity={0.18}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Floor + bloom */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.16, 0]}>
        <planeGeometry args={[44, 30]} />
        <meshStandardMaterial color="#070710" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh
        ref={glowRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.14, -0.2]}
      >
        <planeGeometry args={[18, 11]} />
        <meshBasicMaterial
          map={sprite}
          color="#7c5cff"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function KeyboardScene({
  analyserRef,
  dataRef,
  chartRef,
  getTime,
  bus,
  active,
  speed,
}: {
  analyserRef: React.MutableRefObject<AnalyserNode | null>;
  dataRef: React.MutableRefObject<Uint8Array>;
  chartRef: React.MutableRefObject<Note[]>;
  getTime: () => number;
  bus: GameBus;
  active: boolean;
  speed: number;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 4.2, 8.4], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera }) => camera.lookAt(0, 0.2, -1)}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 6, 6]} intensity={0.8} />
      <pointLight position={[-6, 3, 2]} intensity={30} color="#7c5cff" distance={22} />
      <pointLight position={[6, 3, 2]} intensity={30} color="#36e0c8" distance={22} />
      <Stage
        active={active}
        reduced={reduced}
        analyser={analyserRef}
        data={dataRef}
        chart={chartRef}
        getTime={getTime}
        bus={bus}
        speed={speed}
      />
    </Canvas>
  );
}
