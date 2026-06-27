import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import AuroraOrb from "./AuroraOrb";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Scene() {
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 5]} intensity={1.2} color="#7c5cff" />
        <pointLight position={[-4, -2, 2]} intensity={0.8} color="#36e0c8" />

        <Float
          speed={reduced ? 0 : 1.1}
          rotationIntensity={reduced ? 0 : 0.4}
          floatIntensity={reduced ? 0 : 0.6}
        >
          <AuroraOrb reducedMotion={reduced} />
        </Float>

        <Stars
          radius={60}
          depth={40}
          count={reduced ? 800 : 2600}
          factor={3}
          saturation={0}
          fade
          speed={reduced ? 0 : 0.6}
        />
      </Suspense>
    </Canvas>
  );
}
