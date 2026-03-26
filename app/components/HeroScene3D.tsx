'use client';

import { Canvas } from '@react-three/fiber';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.005;
      }
      if (group) {
        group.rotation.z -= 0.0005;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const geometry = useMemo(() => new THREE.BoxGeometry(2, 2, 2), []);
  const material = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x3b82f6),
        emissive: new THREE.Color(0x1e40af),
        shininess: 100,
        wireframe: false,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={geometry} material={material} position={[0, 0, 0]} />
      
      {/* Floating spheres around cube */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 4, Math.sin(angle) * 4, Math.cos(angle) * 3]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshPhongMaterial
              color={new THREE.Color(i % 2 === 0 ? 0x06b6d4 : 0x0ea5e9)}
              emissive={new THREE.Color(i % 2 === 0 ? 0x0891b2 : 0x0284c7)}
              shininess={80}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color={0x3b82f6} />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color={0x06b6d4} />
      <pointLight position={[0, 0, 15]} intensity={0.6} color={0xfbcfe8} />
    </>
  );
}

export default function HeroScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      >
        <color attach="background" args={['#0f172a']} />
        <Lights />
        <RotatingCube />
      </Canvas>
    </div>
  );
}
