'use client';

import Footer from '@/app/components/Footer';
import Stars from '@/app/components/Stars';
import Shapes3D from '@/app/components/Shapes3D';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { name: 'WordPress', icon: 'devicon-wordpress-plain' },
    { name: 'Shopify', icon: 'devicon-shopify-plain' },
    { name: 'Wix', icon: 'devicon-wix-plain' },
    { name: 'Squarespace', icon: 'devicon-square-plain' },
    { name: 'Framer', icon: 'devicon-framer-plain' },
    { name: 'Beaver Builder', icon: 'devicon-wordpress-plain' },
    { name: 'Divi', icon: 'devicon-wordpress-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
  ];

  const services = [
    {
      title: 'WordPress Development',
      description:
        'Custom WordPress websites with Beaver Builder, Divi, and other page builders. I create fully functional, SEO-optimized sites that are easy to manage.',
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Building stunning online stores on Shopify and WooCommerce. I focus on conversion optimization and seamless user experiences.',
    },
    {
      title: 'Web Design & Optimization',
      description:
        'Creating responsive, modern designs with Framer and other tools. Every project includes performance optimization and mobile-first design.',
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 antialiased">
      {/* Devicon stylesheet (loaded once) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      {/* Ambient background */}
      <Stars />
      <Shapes3D />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-28 md:pt-36 md:pb-36">
        {/* Page heading */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300/90 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
            About
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Building the web,{' '}
            <span className="bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent">
              one detail at a time
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed">
            Web developer specializing in WordPress, Wix, Shopify, Framer, Beaver
            Builder, and Divi.
          </p>
        </div>

        {/* Intro + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center mb-24 md:mb-32">
          <div className="md:col-span-3">
            <span className="text-sm font-mono text-slate-600">01</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              John Rodney Bargayo
            </h2>
            <div className="mt-6 space-y-6 text-base md:text-lg text-slate-300 leading-relaxed">
              <p>
                I&apos;m a passionate freelance web developer with extensive
                experience building beautiful, functional websites and e-commerce
                platforms. I specialize in WordPress, Wix, Shopify, Framer, Beaver
                Builder, and Divi to create solutions tailored to your business
                goals.
              </p>
              <p>
                I focus on creating elegant, responsive designs that not only look
                great but also convert visitors into customers. My approach
                emphasizes user experience, performance optimization, and SEO best
                practices to ensure your web presence stands out.
              </p>
              <p>
                When I&apos;m not coding, you can find me watching movies, hiking,
                freediving, and meeting with friends. I mostly enjoy spending time at
                home working on new projects or exploring emerging technologies that
                excite me.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-blue-500/25 blur-2xl scale-105" />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-blue-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/411068017_7561810227171334_4227971823188484885_n.jpg-OODEwjqHv6IuuC51YbGSbSRnBoyshS.jpeg"
                  alt="John Rodney Bargayo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-24 md:mb-32">
          <div className="mb-12">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-mono text-slate-600">02</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Skills &amp; Technologies
              </h2>
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <i
                  className={`${skill.icon} colored text-4xl mb-3 transition-transform duration-300 group-hover:scale-110`}
                ></i>
                <p className="text-slate-300 text-center text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do */}
        <div>
          <div className="mb-12">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-mono text-slate-600">03</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                What I Do
              </h2>
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <span className="text-sm font-mono text-slate-600 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}