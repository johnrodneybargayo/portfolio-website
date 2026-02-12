'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'ProductHQ',
      link: 'https://producthq.io/',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://producthq.io/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 2,
      title: 'Curtis Service',
      link: 'https://service.curtiscss.com/',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://service.curtiscss.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 3,
      title: 'Curtis Support',
      link: 'https://support.curtiscss.com/',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://support.curtiscss.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 4,
      title: 'Empire One Contact Center',
      link: 'https://empireonecontactcenter.com/',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://empireonecontactcenter.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 5,
      title: 'Empire One Credit',
      link: 'https://empireonecredit.ca/',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://empireonecredit.ca/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 6,
      title: 'Bangkok Women',
      link: 'https://bangkok-women.com/',
      category: 'Community Platform',
      image: 'https://api.microlink.io?url=https://bangkok-women.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 7,
      title: 'Peru Dating',
      link: 'https://perudating.com/',
      category: 'Community Platform',
      image: 'https://api.microlink.io?url=https://perudating.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 8,
      title: 'Cebu Insights',
      link: 'https://cebuinsights.com/',
      category: 'Community Platform',
      image: 'https://api.microlink.io?url=https://cebuinsights.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 9,
      title: 'Careero',
      link: 'https://careero.com/',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://careero.com/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 10,
      title: 'Labour Hire and Recruitment',
      link: 'https://labourhireandrecruitment.com.au',
      category: 'Business Solution',
      image: 'https://api.microlink.io?url=https://labourhireandrecruitment.com.au&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 11,
      title: 'VerbiVibe',
      link: 'https://www.verbivibe.com/login',
      category: 'Current Project',
      image: 'https://scontent.fceb7-1.fna.fbcdn.net/v/t39.30808-6/411068017_7561810227171334_4227971823188484885_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGkLWkjaGmsac5w_WuGmgZSVII8DFubZd1UgjwMW5tl3S80nRPKLK_7t-rdKSu9vsui_axtvxKlqg0oJRyJSoDu&_nc_ohc=hKsmh3JbfZwQ7kNvgGXQdl2&_nc_zt=23&_nc_ht=scontent.fceb7-1.fna&_nc_gid=A1NKt6TSpo3NxrhzQkNTFaw&oh=00_AYB685OJytoezJKyS_oyHgIGVkly9s3pZtBK21ECsdBzcQ&oe=6760C3AC',
    },
    {
      id: 12,
      title: 'KeystrokeQuest',
      link: 'https://htas2wdun2k.vercel.app/?vercelToolbarCode=Ty129TZvCqESc2x',
      category: 'Current Project',
      image: 'https://api.microlink.io?url=https://htas2wdun2k.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 13,
      title: 'Demo Construction Website',
      link: 'https://v7gipcjbs9bvqsav.vercel.app/',
      category: 'Current Project',
      image: 'https://api.microlink.io?url=https://v7gipcjbs9bvqsav.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    },
  ];

  return (
    <main className="bg-gray-900">
      <Navigation />
      
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">My Portfolio</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="relative w-full h-48 bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2216%22 fill=%22%23fff%22 text-anchor=%22middle%22 dy=%22.3em%22%3E' + encodeURIComponent(project.title) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                <div className="p-6 bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                    Visit <ExternalLink size={16} />
                  </div>
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
