'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      // Image entrance animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      // Floating animation for the image
      gsap.to(
        imageRef.current,
        {
          y: -20,
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: Math.random() * 3 + 2 + 's',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* 3D Floating Shapes */}
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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-20">
        <div ref={textRef} className="space-y-6">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">John Rodney</span>
            </h1>
          </div>
          <p className="text-2xl font-semibold text-slate-300">
            Freelance Web Developer
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Specializing in WordPress, Wix, Shopify, Framer, Beaver Builder, and Divi. I create stunning, responsive websites and e-commerce solutions tailored to your business needs with a focus on user experience and conversion optimization.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Explore My Work
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/25">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-20 z-10"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/411068017_7561810227171334_4227971823188484885_n.jpg-OODEwjqHv6IuuC51YbGSbSRnBoyshS.jpeg"
              alt="John Rodney Bargayo"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
