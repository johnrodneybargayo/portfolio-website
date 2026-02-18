'use client';

import { useRef } from 'react';
import Carousel3D from '@/app/components/Carousel3D';
import Footer from '@/app/components/Footer';
import { ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const projectRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const projects = [
    {
      id: 1,
      title: 'Jay Abbasi',
      link: 'https://jayabbasi.me',
      category: 'Portfolio',
      description: 'Professional portfolio website',
      image: 'https://api.microlink.io?url=https://jayabbasi.me&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 2,
      title: 'Podify',
      link: 'https://podify.com',
      category: 'Web App',
      description: 'Podcast management platform',
      image: 'https://api.microlink.io?url=https://podify.com&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 3,
      title: 'EIS Education',
      link: 'https://eiseducation.com',
      category: 'Education',
      description: 'Educational platform',
      image: 'https://api.microlink.io?url=https://eiseducation.com&screenshot=true&meta=false&embed=screenshot.url',
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

  const handleProjectClick = (projectId: number) => {
    console.log('[v0] Scroll requested for project:', projectId);
    const projectCard = projectRefs.current[projectId];
    console.log('[v0] Project card ref found:', !!projectCard);
    if (projectCard) {
      projectCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add highlight animation
      projectCard.classList.add('ring-2', 'ring-blue-400');
      setTimeout(() => {
        projectCard.classList.remove('ring-2', 'ring-blue-400');
      }, 2000);
    }
  };

  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 perspective pointer-events-none opacity-10">
        {/* Floating Cube 1 */}
        <div className="absolute top-32 left-10 w-24 h-24 animate-float" style={{ perspective: '1000px' }}>
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'float 6s ease-in-out infinite' }}>
            <div className="absolute w-24 h-24 bg-blue-500 border border-blue-400 rounded-lg" style={{ transform: 'translateZ(48px)' }}></div>
            <div className="absolute w-24 h-24 bg-blue-600 border border-blue-500 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(48px)' }}></div>
            <div className="absolute w-24 h-24 bg-cyan-500 border border-cyan-400 rounded-lg" style={{ transform: 'rotateY(180deg) translateZ(48px)' }}></div>
          </div>
        </div>

        {/* Floating Cube 2 */}
        <div className="absolute bottom-40 right-20 w-20 h-20 animate-float-slow" style={{ perspective: '1000px' }}>
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', animation: 'float 8s ease-in-out infinite reverse' }}>
            <div className="absolute w-20 h-20 bg-cyan-500 border border-cyan-400 rounded-lg" style={{ transform: 'translateZ(40px)' }}></div>
            <div className="absolute w-20 h-20 bg-blue-500 border border-blue-400 rounded-lg" style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
          </div>
        </div>

        {/* Floating Sphere */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      {/* Content - with relative z-index to appear above background */}
      <div className="relative z-10">
        {/* 3D Carousel Section */}
        <Carousel3D projects={projects} onProjectClick={handleProjectClick} />

        {/* Projects Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-lg md:text-xl text-slate-400">
            Explore all projects in detail
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current[project.id] = el;
              }}
              className="group transition-all duration-300"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%239CA3AF%22%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm flex-grow">
                      {project.description}
                    </p>
                  </div>

                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="flex items-center gap-2 text-blue-400 group-hover:gap-4 transition-all">
                      <span className="text-sm md:text-base">Visit Project</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      </div>
    </main>
  );
}
