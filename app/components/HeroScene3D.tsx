'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect, useMemo, useState } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function InteractivePortfolioMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { camera, gl } = useThree();

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = gl.domElement;
      const rect = canvas.getBoundingClientRect();
      setMouse({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    };

    gl.domElement.addEventListener('mousemove', handleMouseMove);
    return () => gl.domElement.removeEventListener('mousemove', handleMouseMove);
  }, [gl]);

  // Create particles
  const particles = useMemo(() => {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate based on mouse position
      meshRef.current.rotation.x = mouse.y * 0.5;
      meshRef.current.rotation.y = mouse.x * 0.5;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      {/* Main Icosahedron */}
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 4]} />
        <meshPhongMaterial
          color={0x3b82f6}
          emissive={0x1e40af}
          wireframe={false}
          shininess={100}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh scale={2}>
        <icosahedronGeometry args={[1, 4]} />
        <meshBasicMaterial
          color={0x06b6d4}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting elements */}
      <group>
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2;
          return (
            <group key={i} rotation={[0, 0, angle]}>
              <mesh position={[6, 0, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshPhongMaterial
                  color={i % 2 === 0 ? 0x06b6d4 : 0x0ea5e9}
                  emissive={i % 2 === 0 ? 0x0891b2 : 0x0284c7}
                  shininess={80}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Particle field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={0x06b6d4} sizeAttenuation={true} />
      </points>

      {/* Torus rings */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[4, 0.2, 16, 100]} />
        <meshPhongMaterial
          color={0x0ea5e9}
          emissive={0x0284c7}
          transparent={true}
          opacity={0.6}
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[5, 0.15, 16, 100]} />
        <meshPhongMaterial
          color={0x06b6d4}
          emissive={0x0891b2}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[3.5, 0.1, 16, 100]} />
        <meshPhongMaterial
          color={0x3b82f6}
          emissive={0x1e40af}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color={0x3b82f6} />
      <pointLight position={[-10, -10, 5]} intensity={1} color={0x06b6d4} />
      <pointLight position={[0, 20, 10]} intensity={0.8} color={0x0ea5e9} />
      <pointLight position={[-20, 0, 10]} intensity={0.6} color={0xfbcfe8} />
    </>
  );
}

export default function HeroScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
        }}
      >
        <color attach="background" args={['#0f172a']} />
        <Lights />
        <InteractivePortfolioMesh />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(Math.PI * 2) / 3}
        />
      </Canvas>
    </div>
  );
}
