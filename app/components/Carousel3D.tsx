'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCardProps {
  project: any;
  position: number;
  totalCards: number;
  isMobile: boolean;
  onProjectClick: (projectId: number) => void;
}

function ProjectCard({ project, position, totalCards, isMobile, onProjectClick }: ProjectCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (position / totalCards) * Math.PI * 2;
  const radius = isMobile ? 4 : 6;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  // Create front face texture with site preview
  const frontTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 512, 512);
      gradient.addColorStop(0, '#1e293b');
      gradient.addColorStop(1, '#0f172a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Border
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
      
      // Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(project.title, 256, 80);
      
      // Category badge
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(100, 110, 312, 40);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(project.category, 256, 135);
      
      // Description
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '18px Arial';
      ctx.textAlign = 'center';
      const words = project.description.split(' ');
      let line = '';
      let y = 200;
      for (let word of words) {
        if (ctx.measureText(line + word).width > 400) {
          ctx.fillText(line, 256, y);
          line = word + ' ';
          y += 35;
        } else {
          line += word + ' ';
        }
      }
      ctx.fillText(line, 256, y);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, [project.title, project.category, project.description]);

  // Create side face texture
  const sideMaterial = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, []);

  const frontMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    map: frontTexture,
    metalness: 0.2,
    roughness: 0.7,
  }), [frontTexture]);

  const backMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0f172a',
    metalness: 0.2,
    roughness: 0.7,
  }), []);

  const sideMat = useMemo(() => new THREE.MeshStandardMaterial({
    map: sideMaterial,
    metalness: 0.2,
    roughness: 0.7,
  }), [sideMaterial]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  const boxSize = isMobile ? 2 : 2.5;
  const boxDepth = isMobile ? 1 : 1.2;

  return (
    <group
      position={[x, 0, z]}
      rotation={[0, -angle, 0]}
    >
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[boxSize, boxSize, boxDepth]} />
        {/* Array of materials: right, left, top, bottom, front, back */}
        <meshStandardMaterial attach="material-0" color="#0a0e27" metalness={0.2} roughness={0.7} />
        <meshStandardMaterial attach="material-1" color="#0a0e27" metalness={0.2} roughness={0.7} />
        <meshStandardMaterial attach="material-2" color="#0a0e27" metalness={0.2} roughness={0.7} />
        <meshStandardMaterial attach="material-3" color="#0a0e27" metalness={0.2} roughness={0.7} />
        <meshStandardMaterial attach="material-4" map={frontTexture} metalness={0.2} roughness={0.7} />
        <meshStandardMaterial attach="material-5" color="#0f172a" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Button overlay */}
      <Html transform distanceFactor={1.2} position={[0, -boxSize / 2 - 0.3, 0]} wrapperClass="flex items-center justify-center">
        <button
          onClick={() => onProjectClick(project.id)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-500/50"
        >
          View Details →
        </button>
      </Html>
    </group>
  );
}

function CarouselScene({ projects, isMobile, onProjectClick }: { projects: any[]; isMobile: boolean; onProjectClick: (projectId: number) => void }) {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      <Environment preset="night" />
      <group ref={sceneRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            position={index}
            totalCards={projects.length}
            isMobile={isMobile}
            onProjectClick={onProjectClick}
          />
        ))}
      </group>
      <OrbitControls
        enableZoom
        enablePan
        maxDistance={isMobile ? 15 : 20}
        minDistance={isMobile ? 3 : 5}
      />
    </>
  );
}

interface Carousel3DProps {
  projects: any[];
  onProjectClick?: (projectId: number) => void;
}

export default function Carousel3D({ projects, onProjectClick = () => {} }: Carousel3DProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 2, isMobile ? 10 : 12], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CarouselScene projects={projects} isMobile={isMobile} onProjectClick={onProjectClick} />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
        <div className="absolute top-6 md:top-8 left-6 md:left-8 z-10 pointer-events-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-slate-400 text-sm md:text-base">3D Interactive Showcase</p>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-center pointer-events-auto">
          <p className="text-slate-400 text-xs md:text-sm">
            Use mouse to rotate • Scroll to zoom • Drag to move
          </p>
        </div>

        <div className="absolute top-1/2 right-6 md:right-8 -translate-y-1/2 pointer-events-auto">
          <div className="flex flex-col gap-3 md:gap-4">
            <button
              onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
              className="px-3 md:px-4 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs md:text-sm font-bold transition-all hover:scale-105"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
