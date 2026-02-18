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
  const meshRef = useRef<THREE.Group>(null);
  const angle = (position / totalCards) * Math.PI * 2;
  const radius = isMobile ? 4 : 6;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  // Create canvas texture once, outside of render
  const canvasTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Border
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
      
      // Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px Arial';
      ctx.fillText(project.title, 20, 50);
      
      // Category
      ctx.fillStyle = '#93c5fd';
      ctx.font = '14px Arial';
      ctx.fillText(project.category, 20, 75);
      
      // Description
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '14px Arial';
      const words = project.description.split(' ');
      let line = '';
      let y = 110;
      for (let word of words) {
        if (ctx.measureText(line + word).width > 450) {
          ctx.fillText(line, 20, y);
          line = word + ' ';
          y += 25;
        } else {
          line += word + ' ';
        }
      }
      ctx.fillText(line, 20, y);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    return texture;
  }, [project.title, project.category, project.description]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      ref={meshRef}
      position={[x, 0, z]}
      rotation={[0, -angle + Math.PI / 2, 0]}
    >
      <mesh>
        <planeGeometry args={[isMobile ? 2.5 : 3, isMobile ? 2 : 2.5]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[isMobile ? 2.4 : 2.9, isMobile ? 1.9 : 2.4]} />
        <meshBasicMaterial map={canvasTexture} />
      </mesh>

      <Html transform distanceFactor={1.2} position={[0, 0, 0.02]} wrapperClass="flex items-center justify-center">
        <button
          onClick={() => onProjectClick(project.id)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-colors"
        >
          View Project →
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
