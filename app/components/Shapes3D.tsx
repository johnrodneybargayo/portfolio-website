'use client';

export default function Shapes3D() {
  return (
    <div className="absolute inset-0 perspective pointer-events-none">
      {/* Floating Cube 1 */}
      <div className="absolute top-32 left-10 w-24 h-24 opacity-10 animate-float" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'float 6s ease-in-out infinite' }}>
          <div className="absolute w-24 h-24 bg-blue-500 border border-blue-400 rounded-lg" style={{ transform: 'translateZ(48px)' }}></div>
          <div className="absolute w-24 h-24 bg-blue-600 border border-blue-500 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(48px)' }}></div>
          <div className="absolute w-24 h-24 bg-cyan-500 border border-cyan-400 rounded-lg" style={{ transform: 'rotateY(180deg) translateZ(48px)' }}></div>
        </div>
      </div>

      {/* Floating Cube 2 */}
      <div className="absolute bottom-40 right-20 w-20 h-20 opacity-10 animate-float-slow" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'float 8s ease-in-out infinite reverse' }}>
          <div className="absolute w-20 h-20 bg-cyan-500 border border-cyan-400 rounded-lg" style={{ transform: 'translateZ(40px)' }}></div>
          <div className="absolute w-20 h-20 bg-blue-500 border border-blue-400 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
        </div>
      </div>

      {/* Floating Sphere */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-15">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
}
