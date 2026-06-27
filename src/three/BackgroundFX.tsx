import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const vertex = /* glsl */ `
uniform float uTime;
uniform float uMotion;
attribute float aSeed;
attribute float aScale;
varying float vSeed;

void main() {
  vSeed = aSeed;
  vec3 p = position;

  // Lightweight curl-ish flow: layered sines drive a slow drift.
  float t = uTime * 0.06 * uMotion;
  p.x += sin(t + p.y * 0.35 + aSeed * 6.2831) * 0.9;
  p.y += cos(t * 0.9 + p.x * 0.3 + aSeed * 3.14) * 0.7;
  p.z += sin(t * 0.7 + p.x * 0.2 + aSeed * 1.7) * 0.6;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aScale * (90.0 / -mv.z);
}
`;

const fragment = /* glsl */ `
precision mediump float;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vSeed;

void main() {
  // Soft round sprite.
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float alpha = smoothstep(0.5, 0.0, d);
  vec3 color = mix(uColorA, uColorB, vSeed);
  gl_FragColor = vec4(color, alpha * 0.5);
}
`;

function Field({ reduced }: { reduced: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const COUNT = reduced ? 600 : 1700;

  const geom = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const scales = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;
      seeds[i] = Math.random();
      scales[i] = 0.5 + Math.random() * 1.6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    g.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return g;
  }, [COUNT]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMotion: { value: reduced ? 0 : 1 },
      uColorA: { value: new THREE.Color("#7c5cff") },
      uColorB: { value: new THREE.Color("#36e0c8") },
    }),
    [reduced]
  );

  useFrame((state, delta) => {
    if (matRef.current && !reduced) {
      matRef.current.uniforms.uTime.value += delta;
    }
    // Subtle parallax toward the cursor for depth.
    state.camera.position.x +=
      (state.pointer.x * 1.2 - state.camera.position.x) * 0.02;
    state.camera.position.y +=
      (state.pointer.y * 0.8 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points geometry={geom}>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function BackgroundFX() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 16], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <Field reduced={reduced} />
      </Canvas>
    </div>
  );
}
