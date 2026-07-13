'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const stats = [
    { value: '20+', label: 'Projects shipped' },
    { value: '6', label: 'Platforms' },
    { value: '100%', label: 'Responsive' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of text block children
      gsap.fromTo(
        textRef.current ? textRef.current.children : [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        }
      );

      // Image entrance
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.25 }
      );

      // Gentle float
      gsap.to(imageRef.current, {
        y: -18,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Top accent line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      {/* Starfield */}
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

      {/* Ambient blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 h-80 w-80 animate-pulse rounded-full bg-blue-500 mix-blend-multiply blur-3xl"></div>
        <div className="animation-delay-2000 absolute top-40 right-10 h-80 w-80 animate-pulse rounded-full bg-cyan-500 mix-blend-multiply blur-3xl"></div>
        <div className="animation-delay-4000 absolute bottom-20 left-1/2 h-80 w-80 animate-pulse rounded-full bg-blue-400 mix-blend-multiply blur-3xl"></div>
      </div>

      {/* 3D floating shapes */}
      <div className="perspective pointer-events-none absolute inset-0">
        <div
          className="animate-float absolute top-32 left-10 h-24 w-24 opacity-10"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative h-full w-full"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'float 6s ease-in-out infinite',
            }}
          >
            <div
              className="absolute h-24 w-24 rounded-lg border border-blue-400 bg-blue-500"
              style={{ transform: 'translateZ(48px)' }}
            ></div>
            <div
              className="absolute h-24 w-24 rounded-lg border border-blue-500 bg-blue-600"
              style={{ transform: 'rotateY(90deg) translateZ(48px)' }}
            ></div>
            <div
              className="absolute h-24 w-24 rounded-lg border border-cyan-400 bg-cyan-500"
              style={{ transform: 'rotateY(180deg) translateZ(48px)' }}
            ></div>
          </div>
        </div>

        <div
          className="animate-float-slow absolute bottom-40 right-20 h-20 w-20 opacity-10"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative h-full w-full"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'float 8s ease-in-out infinite reverse',
            }}
          >
            <div
              className="absolute h-20 w-20 rounded-lg border border-cyan-400 bg-cyan-500"
              style={{ transform: 'translateZ(40px)' }}
            ></div>
            <div
              className="absolute h-20 w-20 rounded-lg border border-blue-400 bg-blue-500"
              style={{ transform: 'rotateY(90deg) translateZ(40px)' }}
            ></div>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 h-32 w-32 opacity-15">
          <div className="animation-delay-2000 h-full w-full animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 blur-xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 lg:px-8">
        <div ref={textRef} className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
            Available for work
          </span>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              John Rodney
            </span>
          </h1>

          <p className="text-xl font-semibold text-slate-200 md:text-2xl">
            Freelance Web Developer
          </p>

          <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            Specializing in WordPress, Squarespace, Shopify, Framer, Wix, and Divi. I
            build stunning, responsive websites and e-commerce solutions tailored to
            your business — with a focus on user experience and conversion.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-500/25 md:text-base"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-all duration-300 hover:bg-white/5 hover:ring-white/40 md:text-base"
            >
              Get in touch
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-500 md:text-xs">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-10 w-px bg-slate-800" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div ref={imageRef} className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-3xl bg-blue-500/25 blur-2xl" />
            <div className="relative h-60 w-60 overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-2xl shadow-blue-500/25 sm:h-64 sm:w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/411068017_7561810227171334_4227971823188484885_n.jpg-OODEwjqHv6IuuC51YbGSbSRnBoyshS.jpeg"
                alt="John Rodney Bargayo"
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        aria-label="Scroll down"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex h-9 w-6 items-start justify-center rounded-full ring-1 ring-white/20 p-1.5 transition-colors duration-300 hover:ring-blue-400/60 cursor-pointer"
      >
        <div className="h-2 w-1 animate-bounce rounded-full bg-blue-300/80 transition-colors group-hover:bg-blue-300" />
      </button>
    </section>
  );
}