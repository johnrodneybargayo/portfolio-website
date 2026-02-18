'use client';

import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  project: any;
  index: number;
  totalCards: number;
  onProjectClick: (projectId: number) => void;
}

interface Carousel3DProps {
  projects: any[];
  onProjectClick?: (projectId: number) => void;
}

function ProjectCard3D({ project, index, totalCards, onProjectClick }: ProjectCardProps) {
  const angle = (index / totalCards) * 360;
  const radius = 180;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const z = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        width: '200px',
        height: '240px',
        transform: `translateX(calc(-50% + ${x}px)) translateZ(${z}px) rotateY(${-angle}deg)`,
        transformStyle: 'preserve-3d',
        left: '50%',
        top: '50%',
        marginTop: '-120px',
        marginLeft: '-100px',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* 3D Box with depth */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/60 hover:border-blue-300 rounded-lg overflow-hidden shadow-xl flex flex-col cursor-pointer group transition-all duration-300 hover:shadow-blue-500/50"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(30px)',
          }}
          onClick={() => onProjectClick(project.id)}
        >
          {/* Image Section */}
          <div className="w-full h-28 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22%239CA3AF%22%3E' +
                  project.title +
                  '%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Content Section */}
          <div className="p-3 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                {project.title}
              </h3>
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-0.5 rounded mt-1 border border-blue-500/30">
                {project.category}
              </span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onProjectClick(project.id);
              }}
              className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded text-xs font-bold transition-all hover:shadow-lg hover:shadow-blue-500/50 w-full"
            >
              Details →
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full bg-slate-900 border border-blue-400/40 rounded-lg flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(30px)',
          }}
        >
          <div className="text-center px-4">
            <p className="text-blue-300 text-xs font-semibold">{project.title}</p>
            <p className="text-slate-400 text-xs mt-2">{project.category}</p>
          </div>
        </div>

        {/* Top Face */}
        <div
          className="absolute w-full bg-gradient-to-r from-blue-600 to-cyan-600"
          style={{
            height: '30px',
            top: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateX(90deg) translateZ(30px)',
          }}
        />

        {/* Bottom Face */}
        <div
          className="absolute w-full bg-gradient-to-r from-blue-700 to-cyan-700"
          style={{
            height: '30px',
            bottom: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateX(-90deg) translateZ(30px)',
          }}
        />

        {/* Left Face */}
        <div
          className="absolute h-full bg-blue-800"
          style={{
            width: '30px',
            left: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(-90deg) translateZ(30px)',
          }}
        />

        {/* Right Face */}
        <div
          className="absolute h-full bg-cyan-800"
          style={{
            width: '30px',
            right: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(90deg) translateZ(30px)',
          }}
        />
      </div>
    </div>
  );
}

export default function Carousel3D({ projects, onProjectClick = () => {} }: Carousel3DProps) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setRotation((prev) => prev + diff * 0.5);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove as any);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mouseleave', handleMouseUp);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove as any);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mouseleave', handleMouseUp);
      };
    }
  }, [isDragging, startX]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setRotation((prev) => prev - 0.5);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1200px',
        }}
      >
        {/* Title */}
        <div className="absolute top-8 left-8 z-10 pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-slate-400 text-sm md:text-base">3D Interactive Showcase</p>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-32 md:bottom-36 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-slate-400 text-xs md:text-sm">Drag to rotate • Click cards to view details</p>
        </div>

        {/* 3D Carousel - Compact Left Aligned */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2"
          style={{
            width: '100%',
            height: '350px',
            perspective: '1200px',
          }}
        >
          <div
            className="absolute left-1/3 top-1/2 -translate-y-1/2"
            style={{
              width: '600px',
              height: '350px',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                transition: isDragging ? 'none' : 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              {projects.map((project, index) => (
                <ProjectCard3D
                  key={project.id}
                  project={project}
                  index={index}
                  totalCards={projects.length}
                  onProjectClick={onProjectClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
