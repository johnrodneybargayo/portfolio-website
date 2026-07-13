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

  const stats = [
    { value: '15+', label: 'Technologies' },
    { value: '20+', label: 'Projects shipped' },
    { value: '6', label: 'Platforms' },
    { value: '100%', label: 'Responsive' },
  ];

  const services = [
    {
      title: 'WordPress Development',
      description:
        'Custom WordPress websites with Beaver Builder, Divi, and other page builders. Fully functional, SEO-optimized sites that are easy to manage.',
    },
    {
      title: 'E-Commerce Solutions',
      description:
        'Building stunning online stores on Shopify and WooCommerce, focused on conversion optimization and seamless user experiences.',
    },
    {
      title: 'Squarespace & Framer',
      description:
        'Polished Squarespace and Framer builds with Fluid Engine layouts and custom CSS — design-led sites that stay easy for clients to edit.',
    },
    {
      title: 'Web Design & Optimization',
      description:
        'Responsive, modern designs with a mobile-first approach. Every project includes performance tuning and SEO best practices.',
    },
  ];

  const approach = [
    {
      step: 'Discover',
      text: 'Understand the business goals, audience, and what success looks like before a single line of code.',
    },
    {
      step: 'Design & Build',
      text: 'Craft responsive, on-brand layouts and build them cleanly on the right platform for the job.',
    },
    {
      step: 'Optimize & Launch',
      text: 'Tune performance, wire up tracking and SEO, then hand over a site the client can confidently manage.',
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
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 md:pt-28 md:pb-24">
        {/* Heading + portrait, side by side to close the gap */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300/90 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
              About
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Building the web,{' '}
              <span className="bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent">
                one detail at a time
              </span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Freelance web developer specializing in WordPress, Squarespace, Wix,
              Shopify, Framer, Beaver Builder, and Divi.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-4 gap-4 max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-slate-500 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-blue-500/25 blur-2xl scale-105" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-blue-500/20">
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

        {/* Bio in two columns to use the full width */}
        <div className="mb-16 md:mb-20">
          <div className="mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-mono text-slate-600">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                John Rodney Bargayo
              </h2>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-base md:text-lg text-slate-300 leading-relaxed">
            <div className="space-y-5">
              <p>
                I&apos;m a passionate freelance web developer with extensive
                experience building beautiful, functional websites and e-commerce
                platforms. I specialize in WordPress, Squarespace, Wix, Shopify,
                Framer, Beaver Builder, and Divi to create solutions tailored to your
                business goals.
              </p>
              <p>
                I focus on creating elegant, responsive designs that not only look
                great but also convert visitors into customers. My approach
                emphasizes user experience, performance optimization, and SEO best
                practices.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Every build starts with the client&apos;s goals and ends with a site
                they can confidently manage on their own — clean, documented, and
                easy to extend.
              </p>
              <p>
                When I&apos;m not coding, you can find me watching movies, hiking,
                freediving, and meeting with friends. I mostly enjoy spending time at
                home working on new projects or exploring emerging technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16 md:mb-20">
          <div className="mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-mono text-slate-600">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Skills &amp; Technologies
              </h2>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 md:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-4 md:p-5 rounded-xl bg-slate-900/60 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <i
                  className={`${skill.icon} colored text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110`}
                ></i>
                <p className="text-slate-300 text-center text-xs font-medium leading-tight">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do — 2x2 to fill the row */}
        <div className="mb-16 md:mb-20">
          <div className="mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-mono text-slate-600">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                What I Do
              </h2>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative flex flex-col p-7 md:p-8 rounded-2xl bg-slate-900/60 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <span className="text-sm font-mono text-slate-600 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How I Work */}
        <div>
          <div className="mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-mono text-slate-600">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                How I Work
              </h2>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {approach.map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col p-7 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 ring-1 ring-white/10"
              >
                <span className="text-4xl font-bold text-slate-800 mb-3 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}