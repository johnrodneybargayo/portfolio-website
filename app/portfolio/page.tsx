'use client';

import Carousel3D from '@/app/components/Carousel3D';
import Footer from '@/app/components/Footer';

export default function PortfolioPage() {
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

  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Carousel3D projects={projects} />
      <Footer />
    </main>
  );
}
