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
    },
    {
      id: 2,
      title: 'Podify',
      link: 'https://podify.com',
      category: 'Web App',
      description: 'Podcast management platform',
    },
    {
      id: 3,
      title: 'EIS Education',
      link: 'https://eiseducation.com',
      category: 'Education',
      description: 'Educational platform',
    },
    {
      id: 4,
      title: 'Aura Creo',
      link: 'https://auracreo.com',
      category: 'Business Solution',
      description: 'Creative agency platform',
    },
    {
      id: 5,
      title: 'Empire One Contact Center',
      link: 'https://empireonecontactcenter.com/',
      category: 'Business Solution',
      description: 'Contact center platform',
    },
    {
      id: 7,
      title: 'Bangkok Women',
      link: 'https://bangkok-women.com/',
      category: 'Community',
      description: 'Community platform',
    },
    {
      id: 8,
      title: 'Peru Dating',
      link: 'https://perudating.com/',
      category: 'Social',
      description: 'Dating platform',
    },
    {
      id: 10,
      title: 'Labour Hire and Recruitment',
      link: 'https://labourhireandrecruitment.com.au',
      category: 'Business Solution',
      description: 'Recruitment platform',
    },
    {
      id: 12,
      title: 'KeystrokeQuest',
      link: 'https://htas2wdun2k.vercel.app/',
      category: 'Current Project',
      description: 'Code typing test platform',
    },
    {
      id: 13,
      title: 'Demo Construction Website',
      link: 'https://v7gipcjbs9bvqsav.vercel.app/',
      category: 'Current Project',
      description: 'Construction company website',
    },
  ];

  const handleProjectClick = (projectId: number) => {
    const projectCard = projectRefs.current[projectId];
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
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
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
                  <div className="w-full h-40 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-slate-400 text-sm">{project.category}</p>
                    </div>
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
    </main>
  );
}
