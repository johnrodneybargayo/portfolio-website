'use client';

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
      id: 9,
      title: 'Cebu Insights',
      link: 'https://cebuinsights.com/',
      category: 'Content',
      description: 'News and insights platform',
      image: 'https://api.microlink.io?url=https://cebuinsights.com/&screenshot=true&meta=false&embed=screenshot.url',
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
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-xl text-slate-400">
            A selection of projects I've worked on and created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%239CA3AF%22%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm flex-grow">
                    {project.description}
                  </p>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 text-blue-400 group-hover:gap-4 transition-all">
                    <span>Visit Project</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
