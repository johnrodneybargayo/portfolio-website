'use client';

import Image from 'next/image';
import Footer from '@/app/components/Footer';
import { ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Jay Abbasi',
      link: 'https://jayabbasi.me',
      category: 'Portfolio',
      description: 'Professional portfolio website',
      image: 'https://api.microlink.io?url=https://jayabbasi.me&screenshot=true&meta=false&embed=screenshot.url',
      featured: true,
    },
    {
      id: 2,
      title: 'Podify',
      link: 'https://podify.com',
      category: 'Web App',
      description: 'Podcast management platform',
      image: 'https://api.microlink.io?url=https://podify.com&screenshot=true&meta=false&embed=screenshot.url',
      featured: true,
    },
    {
      id: 3,
      title: 'EIS Education',
      link: 'https://eiseducation.com',
      category: 'Education',
      description: 'Educational platform',
      image: 'https://api.microlink.io?url=https://eiseducation.com&screenshot=true&meta=false&embed=screenshot.url',
      featured: true,
    },
    {
      id: 4,
      title: 'Aura Creo',
      link: 'https://auracreo.com',
      category: 'Business Solution',
      description: 'Creative agency platform',
      image: 'https://api.microlink.io?url=https://auracreo.com&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 5,
      title: 'Empire One Contact Center',
      link: 'https://empireonecontactcenter.com/',
      category: 'Business Solution',
      description: 'Contact center platform',
      image: 'https://api.microlink.io?url=https://empireonecontactcenter.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 7,
      title: 'Bangkok Women',
      link: 'https://bangkok-women.com/',
      category: 'Community',
      description: 'Community platform',
      image: 'https://api.microlink.io?url=https://bangkok-women.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 8,
      title: 'Peru Dating',
      link: 'https://perudating.com/',
      category: 'Social',
      description: 'Dating platform',
      image: 'https://api.microlink.io?url=https://perudating.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 10,
      title: 'Labour Hire and Recruitment',
      link: 'https://labourhireandrecruitment.com.au',
      category: 'Business Solution',
      description: 'Recruitment platform',
      image: 'https://api.microlink.io?url=https://labourhireandrecruitment.com.au&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 12,
      title: 'KeystrokeQuest',
      link: 'https://htas2wdun2k.vercel.app/',
      category: 'Current Project',
      description: 'Code typing test platform',
      image: 'https://api.microlink.io?url=https://htas2wdun2k.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 13,
      title: 'Demo Construction Website',
      link: 'https://v7gipcjbs9bvqsav.vercel.app/',
      category: 'Current Project',
      description: 'Construction company website',
      image: 'https://api.microlink.io?url=https://v7gipcjbs9bvqsav.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    },
  ];

  return (
    <main className="bg-slate-900 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 pointer-events-none" />
        
        {/* Minimal accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-slate-700 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/411068017_7561810227171334_4227971823188484885_n.jpg-OODEwjqHv6IuuC51YbGSbSRnBoyshS.jpeg"
                alt="John Rodney Bargayo"
                fill
                className="object-cover"
              />
            </div>

            {/* Headline */}
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Featured Work
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                WordPress, Shopify, Framer & custom web solutions
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
              Carefully crafted digital experiences for businesses that demand results
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Projects Grid - Masonry style */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative bg-slate-800 overflow-hidden ${
                  index === 0 ? 'h-80 md:h-96' : 'h-56 md:h-64'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2220%22 fill=%22%239CA3AF%22 font-weight=%22500%22%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-xs font-semibold text-blue-300 mb-2 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-sm font-semibold">View Project</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">All Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg transition-all duration-300"
              >
                <div className="relative bg-slate-800 overflow-hidden h-48 md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2216%22 fill=%22%239CA3AF%22%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Info */}
                <div className="p-4 md:p-5 bg-slate-800/50 border border-slate-700">
                  <span className="inline-block text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
