import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const COUNT = 4200;
const R = 2.2;

// Build the morph targets the particles snap between.
function buildShapes(): Float32Array[] {
  const sphere = new Float32Array(COUNT * 3);
  const torus = new Float32Array(COUNT * 3);
  const wave = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    // Sphere (even distribution).
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    sphere[i * 3] = R * Math.sin(phi) * Math.cos(theta);
    sphere[i * 3 + 1] = R * Math.sin(phi) * Math.sin(theta);
    sphere[i * 3 + 2] = R * Math.cos(phi);

    // Torus.
    const a = Math.random() * Math.PI * 2;
    const b = Math.random() * Math.PI * 2;
    const tubeR = 0.8;
    const ringR = 1.7;
    torus[i * 3] = (ringR + tubeR * Math.cos(b)) * Math.cos(a);
    torus[i * 3 + 1] = tubeR * Math.sin(b);
    torus[i * 3 + 2] = (ringR + tubeR * Math.cos(b)) * Math.sin(a);

    // Wave grid.
    const gx = (Math.random() - 0.5) * 6;
    const gz = (Math.random() - 0.5) * 6;
    wave[i * 3] = gx;
    wave[i * 3 + 1] = Math.sin(gx * 1.1) * Math.cos(gz * 1.1) * 0.9;
    wave[i * 3 + 2] = gz;
  }
  return [sphere, torus, wave];
}

function Particles({ reduced, onCycle }: { reduced: boolean; onCycle: (i: number) => void }) {
  const geomRef = useRef<THREE.BufferGeometry>(null);
  const { camera, gl } = useThree();

  const shapes = useMemo(() => buildShapes(), []);
  const positions = useMemo(() => Float32Array.from(shapes[0]), [shapes]);
  const velocities = useMemo(() => new Float32Array(COUNT * 3), []);
  const colors = useMemo(() => {
    const c = new Float32Array(COUNT * 3);
    const palette = [
      new THREE.Color("#7c5cff"),
      new THREE.Color("#36e0c8"),
      new THREE.Color("#ff6fb5"),
    ];
    for (let i = 0; i < COUNT; i++) {
      const col = palette[i % 3];
      c[i * 3] = col.r;
      c[i * 3 + 1] = col.g;
      c[i * 3 + 2] = col.b;
    }
    return c;
  }, []);

  const target = useRef(0);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const pointerWorld = useRef(new THREE.Vector3(999, 999, 0));

  // Click cycles the active shape.
  useEffect(() => {
    const el = gl.domElement;
    const onDown = () => {
      target.current = (target.current + 1) % shapes.length;
      onCycle(target.current);
    };
    el.addEventListener("pointerdown", onDown);
    return () => el.removeEventListener("pointerdown", onDown);
  }, [gl, shapes.length, onCycle]);

  useFrame((state) => {
    // Project cursor onto the z=0 plane for repulsion.
    raycaster.setFromCamera(state.pointer, camera);
    const hit = raycaster.ray.intersectPlane(plane, pointerWorld.current);
    if (!hit) pointerWorld.current.set(999, 999, 0);

    const tgt = shapes[target.current];
    const k = reduced ? 0.2 : 0.045; // spring stiffness
    const damp = reduced ? 0.6 : 0.86;
    const px = pointerWorld.current.x;
    const py = pointerWorld.current.y;

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      const iy = ix + 1;
      const iz = ix + 2;

      // Spring toward target shape.
      velocities[ix] += (tgt[ix] - positions[ix]) * k;
      velocities[iy] += (tgt[iy] - positions[iy]) * k;
      velocities[iz] += (tgt[iz] - positions[iz]) * k;

      // Cursor repulsion in the view plane.
      if (!reduced) {
        const dx = positions[ix] - px;
        const dy = positions[iy] - py;
        const d2 = dx * dx + dy * dy;
        if (d2 < 1.6) {
          const f = (1.6 - d2) * 0.9;
          const inv = 1 / (Math.sqrt(d2) + 0.0001);
          velocities[ix] += dx * inv * f;
          velocities[iy] += dy * inv * f;
        }
      }

      velocities[ix] *= damp;
      velocities[iy] *= damp;
      velocities[iz] *= damp;
      positions[ix] += velocities[ix];
      positions[iy] += velocities[iy];
      positions[iz] += velocities[iz];
    }

    if (geomRef.current) {
      const attr = geomRef.current.getAttribute("position") as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }
    if (!reduced) state.scene.rotation.y += 0.0015;
  });

  return (
    <points>
      <bufferGeometry ref={geomRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function PlaygroundScene({
  onCycle,
}: {
  onCycle?: (i: number) => void;
}) {
  const reduced = usePrefersReducedMotion();
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Particles reduced={reduced} onCycle={onCycle ?? (() => {})} />
    </Canvas>
  );
}
