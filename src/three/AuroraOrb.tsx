import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertex = /* glsl */ `
uniform float uTime;
uniform float uAmp;
varying float vNoise;
varying vec3 vNormalW;
varying vec3 vViewDir;

// Classic 3D simplex noise (Ashima Arts), trimmed.
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0*C.xxx;
  vec3 x2 = x0 - i2 + 2.0*C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0*C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
  float t = uTime * 0.28;
  float n = snoise(normal * 1.4 + t);
  n += 0.5 * snoise(normal * 3.1 - t * 1.3);
  vNoise = n;
  vec3 displaced = position + normal * n * uAmp;

  vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
  vNormalW = normalize(mat3(modelMatrix) * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);

  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const fragment = /* glsl */ `
precision highp float;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying float vNoise;
varying vec3 vNormalW;
varying vec3 vViewDir;

void main() {
  float fres = pow(1.0 - clamp(dot(vNormalW, vViewDir), 0.0, 1.0), 2.2);
  float m = smoothstep(-1.0, 1.0, vNoise);

  vec3 base = mix(uColorB, uColorA, m);
  base = mix(base, uColorC, smoothstep(0.4, 1.0, m));

  // Iridescent rim.
  vec3 color = base + fres * (uColorC * 0.9 + uColorA * 0.3);
  color += fres * 0.35;

  float alpha = 0.62 + fres * 0.38;
  gl_FragColor = vec4(color, alpha);
}
`;

export default function AuroraOrb({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.34 },
      uColorA: { value: new THREE.Color("#7c5cff") },
      uColorB: { value: new THREE.Color("#36e0c8") },
      uColorC: { value: new THREE.Color("#ff6fb5") },
    }),
    []
  );

  useFrame((state, delta) => {
    if (matRef.current && !reducedMotion) {
      matRef.current.uniforms.uTime.value += delta;
    }
    if (groupRef.current) {
      const spin = reducedMotion ? 0 : delta * 0.12;
      groupRef.current.rotation.y += spin;
      // Gentle parallax toward the pointer.
      const px = state.pointer.x * 0.25;
      const py = state.pointer.y * 0.25;
      groupRef.current.rotation.x +=
        (py - groupRef.current.rotation.x) * 0.04;
      groupRef.current.position.x += (px - groupRef.current.position.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.5, 64]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
          transparent
          wireframe={false}
        />
      </mesh>
      {/* Faint wireframe shell for added depth. */}
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.5, 6]} />
        <meshBasicMaterial color="#7c5cff" wireframe transparent opacity={0.06} />
      </mesh>
    </group>
  );
}
