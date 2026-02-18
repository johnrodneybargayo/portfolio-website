'use client';

import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  project: any;
  index: number;
  totalCards: number;
  onProjectClick: (projectId: number) => void;
  rotation?: number;
}

interface Carousel3DProps {
  projects: any[];
  onProjectClick?: (projectId: number) => void;
}

function ProjectCard3D({ project, index, totalCards, onProjectClick, rotation }: ProjectCardProps & { rotation: number }) {
  const angle = (index / totalCards) * 360;
  const radius = 300;
  
  // Calculate z-index based on card position relative to viewer
  // Normalize the angle relative to current rotation
  let normalizedAngle = (angle - rotation) % 360;
  if (normalizedAngle < 0) normalizedAngle += 360;
  
  // Convert to -180 to 180 range for better calculation
  if (normalizedAngle > 180) normalizedAngle -= 360;
  
  // Cards facing forward get higher z-index, cards facing backward get lower
  // Maximum z-index is 1000 (front facing), minimum is 0 (back facing)
  let zIndex = Math.max(0, Math.round(1000 * (1 - Math.abs(normalizedAngle) / 180)));
  
  // Hide cards that are completely on the back (between 135-225 degrees)
  const isBackFacing = Math.abs(normalizedAngle) > 90;

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        width: '220px',
        height: '260px',
        transform: `rotateY(${-angle}deg) translateZ(${radius}px)`,
        transformStyle: 'preserve-3d',
        left: '50%',
        top: '50%',
        marginTop: '-130px',
        marginLeft: '-110px',
        backfaceVisibility: 'hidden',
        zIndex: zIndex,
        opacity: isBackFacing ? 0 : 1,
        pointerEvents: isBackFacing ? 'none' : 'auto',
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {/* 3D Box Container */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: '220px',
          height: '260px',
        }}
      >
        {/* Front Face - Website Preview */}
        <div
          className="absolute w-full h-full bg-slate-950 overflow-hidden shadow-2xl flex flex-col cursor-pointer group transition-all duration-300"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(40px)',
          }}
          onClick={() => onProjectClick(project.id)}
        >
          {/* Website Preview Image */}
          <div className="w-full h-32 overflow-hidden bg-gradient-to-br from-blue-600/10 to-cyan-600/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src =
                  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%231e293b%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2218%22 fill=%229CA3AF%22%3E' +
                  project.title +
                  '%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Info Section */}
          <div className="px-4 py-5 flex flex-col flex-grow justify-between bg-gradient-to-b from-slate-900 to-slate-950">
            <div>
              <h3 className="text-base font-bold text-white truncate mb-2">{project.title}</h3>
              <span className="inline-block bg-purple-500/30 text-purple-200 text-xs font-semibold px-2 py-1 rounded border border-purple-400/50">
                {project.category}
              </span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                onProjectClick(project.id);
              }}
              className="mt-3 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded text-xs font-bold transition-all hover:shadow-lg hover:shadow-purple-500/60 w-full"
            >
              Details →
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full bg-slate-900 flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(40px)',
          }}
        >
          <div className="text-center px-4">
            <p className="text-purple-300 text-sm font-bold">{project.title}</p>
            <p className="text-slate-400 text-xs mt-2">{project.category}</p>
          </div>
        </div>

        {/* Top Face */}
        <div
          className="absolute w-full bg-gradient-to-r from-purple-600 to-pink-600"
          style={{
            height: '40px',
            top: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateX(90deg) translateZ(40px)',
          }}
        />

        {/* Bottom Face */}
        <div
          className="absolute w-full bg-gradient-to-r from-purple-700 to-pink-700"
          style={{
            height: '40px',
            bottom: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateX(-90deg) translateZ(40px)',
          }}
        />

        {/* Left Face */}
        <div
          className="bg-purple-800"
          style={{
            position: 'absolute',
            width: '30px',
            height: '260px',
            left: '-30px',
            top: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(-90deg)',
            transformOrigin: 'right center',
          }}
        />

        {/* Right Face */}
        <div
          className="bg-pink-800"
          style={{
            position: 'absolute',
            width: '30px',
            height: '260px',
            right: '-30px',
            top: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(90deg)',
            transformOrigin: 'left center',
          }}
        />
      </div>
    </div>
  );
}

export default function Carousel3D({ projects, onProjectClick = () => {} }: Carousel3DProps) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      if (!isDragging && !isHovered) {
        setRotation((prev) => prev - 0.5);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isDragging, isHovered]);

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full py-64 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: '1200px',
          minHeight: '800px',
        }}
      >
        {/* Title */}
        <div className="absolute top-8 left-8 z-10 pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-slate-400 text-sm md:text-base">3D Interactive Showcase</p>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p className="text-purple-300 text-sm md:text-base font-semibold tracking-wide">Drag to rotate • Click cards to view details</p>
        </div>

        {/* 3D Carousel - Centered Layout */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '1000px',
            height: '320px',
            perspective: '1200px',
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
                rotation={rotation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
