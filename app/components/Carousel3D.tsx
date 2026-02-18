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
  const radius = 300;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const z = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className="absolute w-64 h-80 cursor-pointer transition-transform duration-300 hover:scale-110"
      style={{
        transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg)`,
        backfaceVisibility: 'hidden',
      }}
    >
      <div
        onClick={() => onProjectClick(project.id)}
        className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 flex flex-col cursor-pointer group"
      >
        {/* Image Section */}
        <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src =
                'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%239CA3AF%22%3E' +
                project.title +
                '%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <div className="mb-2">
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full border border-blue-500/30">
                {project.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">
              {project.title}
            </h3>
            <p className="text-slate-300 text-xs mt-1 line-clamp-2">{project.description}</p>
          </div>
          
          <button
            onClick={() => onProjectClick(project.id)}
            className="mt-3 px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg text-xs font-bold transition-all hover:shadow-lg hover:shadow-blue-500/50 w-full"
          >
            View Details →
          </button>
        </div>
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
        className="relative w-full min-h-screen flex items-center justify-center cursor-grab active:cursor-grabbing"
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
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-slate-400 text-xs md:text-sm">Drag to rotate • Click cards to view details</p>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative w-96 h-96"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
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

        {/* Floating Arrow */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
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
