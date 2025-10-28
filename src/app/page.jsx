"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LogoModel from "@/components/ThreeLogoScene";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="canvas-div">
      <Canvas className="canvas" camera={{ position: [0, 0, 1] }}>
        <directionalLight position={[2, 2, 2]} intensity={5} />
        <directionalLight
          position={[-2, -2, -2]}
          intensity={5}
          color={"white"}
        />

        <Suspense fallback={null}>
          <LogoModel url="/logo.glb" />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
