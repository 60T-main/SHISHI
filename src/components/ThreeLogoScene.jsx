"use client";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function ThreeLogoScene({ url }) {
  const group = useRef(null);
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.00035;
    }
  });
  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.25}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}
