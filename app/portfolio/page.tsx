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
    },
    {
      id: 2,
      title: 'Podify',
      link: 'https://podify.com',
      category: 'Business Solution',
      description: 'Podcast management platform',
      image: 'https://api.microlink.io?url=https://podify.com&screenshot=true&meta=false&embed=screenshot.url',
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
      category: 'Social',
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
      category: 'Projects',
      description: 'Code typing test platform',
      image: 'https://api.microlink.io?url=https://htas2wdun2k.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 13,
      title: 'Demo Construction Website',
      link: 'https://v7gipcjbs9bvqsav.vercel.app/',
      category: 'Projects',
      description: 'Construction company website',
      image: 'https://api.microlink.io?url=https://v7gipcjbs9bvqsav.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 14,
      title: 'ESL Website',
      link: 'https://www.nambu-english.online//',
      category: 'Business Solution',
      description: 'ESL Website',
      image: 'https://api.microlink.io?url=https://www.nambu-english.online/&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 15,
      title: 'Dr. Laura Berman',
      link: 'https://drlauraberman.com',
      category: 'Community',
      description: 'Community platform',
      image: 'https://api.microlink.io?url=https://drlauraberman.com&screenshot=true&meta=false&embed=screenshot.url',
    },
    {
      id: 16,
      title: 'Go Online Now',
      link: 'https://goonlinenow.co/',
      category: 'Business Solution',
      description: 'Business platform',
      image: 'https://api.microlink.io?url=https://goonlinenow.co/&screenshot=true&meta=false&embed=screenshot.url',
    },
  ];

  // Order in which category sections should appear.
  // Any category not listed here is appended alphabetically at the end.
  const categoryOrder = [
    'Business Solution',
    'Portfolio',
    'Community',
    'Social',
    'Projects',
  ];

  // Group projects by category
  const grouped = projects.reduce((acc, project) => {
    (acc[project.category] = acc[project.category] || []).push(project);
    return acc;
  }, {});

  // Build the final ordered list of categories to render
  const orderedCategories = [
    ...categoryOrder.filter((cat) => grouped[cat]),
    ...Object.keys(grouped)
      .filter((cat) => !categoryOrder.includes(cat))
      .sort(),
  ];

  return (
    <main className="bg-slate-950 min-h-screen antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
        {/* Layered ambient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image with glow ring */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl scale-110" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-blue-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/411068017_7561810227171334_4227971823188484885_n.jpg-OODEwjqHv6IuuC51YbGSbSRnBoyshS.jpeg"
                  alt="John Rodney Bargayo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300/90 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
              Available for work
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl">
              Featured{' '}
              <span className="bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
              WordPress, Shopify, Framer &amp; custom web solutions
            </p>
            <p className="mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
              Carefully crafted digital experiences for businesses that demand results
            </p>

            {/* Stat strip */}
            <div className="mt-10 flex items-center gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {projects.length}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                  Projects
                </div>
              </div>
              <div className="h-10 w-px bg-slate-800" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {orderedCategories.length}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                  Categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-28 md:pb-36">
        <div className="space-y-24 md:space-y-32">
          {orderedCategories.map((category, index) => (
            <div key={category}>
              {/* Category heading */}
              <div className="mb-12">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-mono text-slate-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {category}
                  </h2>
                  <span className="text-sm font-medium text-slate-500">
                    {grouped[category].length}
                    {grouped[category].length === 1 ? ' project' : ' projects'}
                  </span>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-700 via-slate-800 to-transparent" />
              </div>

              {/* Projects grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {grouped[category].map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    {/* Preview */}
                    <div className="relative overflow-hidden h-52 md:h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src =
                            'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23374151%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22system-ui%22 font-size=%2216%22 fill=%22%239CA3AF%22%3E' +
                            project.title +
                            '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                      {/* Category chip */}
                      <span className="absolute top-3 left-3 inline-block text-[11px] font-semibold text-white/90 uppercase tracking-wider bg-slate-950/60 backdrop-blur-md ring-1 ring-white/10 rounded-full px-3 py-1">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Info */}
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 shrink-0 mt-1 text-slate-600 transition-all duration-300 group-hover:text-blue-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}