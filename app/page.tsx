'use client';

import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Layers3, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Go Online Now',
    type: 'Business platform',
    image: 'https://api.microlink.io?url=https://goonlinenow.co/&screenshot=true&meta=false&embed=screenshot.url',
    href: 'https://goonlinenow.co/',
  },
  {
    title: 'Jay Abbasi',
    type: 'Portfolio experience',
    image: 'https://api.microlink.io?url=https://jayabbasi.me&screenshot=true&meta=false&embed=screenshot.url',
    href: 'https://jayabbasi.me',
  },
];

const capabilities = ['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Framer', 'Custom builds'];

export default function Home() {
  return (
    <main className="dashboard-page">
      <header className="topbar">
        <div className="breadcrumb">
          <span>JR.DEV</span><span className="breadcrumb-separator">/</span><strong>Overview</strong>
        </div>
        <div className="topbar-right">
          <span className="time-label">PHILIPPINES · AVAILABLE</span>
          <span className="topbar-divider" />
          <span className="profile">JR</span>
          <Link href="/contact" className="topbar-cta">Start a project <ArrowUpRight size={14} /></Link>
        </div>
      </header>

      <div className="dashboard-content">
        <section className="section-heading">
          <div>
            <p className="kicker mono">Independent web developer</p>
            <h1 className="section-title">Digital experiences,<br /><em>built better.</em></h1>
          </div>
          <p className="heading-description">Websites and commerce experiences designed with clarity, built for performance, and shaped around the business behind them.</p>
        </section>

        <section className="home-grid">
          <article className="bento hero-card motion-item">
            <div className="hero-topline">
              <span className="status-badge"><span className="status-dot" /> Available for select projects</span>
              <span className="hero-index mono">01 / 04</span>
            </div>
            <div>
              <h2 className="hero-heading">Hi, I&apos;m<br /><span className="outline">John</span> <span className="purple">Rodney.</span></h2>
              <p className="hero-description">I help businesses turn ideas into polished, responsive websites that feel as good to use as they look.</p>
              <div className="hero-actions">
                <Link href="/portfolio" className="cta-button cta-primary">Explore selected work <ArrowUpRight size={15} /></Link>
                <Link href="/about" className="cta-button cta-secondary">About me</Link>
              </div>
            </div>
            <div className="hero-bottomline"><span>Based in the Philippines</span><strong>Open to meaningful work</strong></div>
          </article>

          <a className="bento visual-card motion-item" href={projects[0].href} target="_blank" rel="noreferrer">
            <img src={projects[0].image} alt="Preview of Go Online Now website" />
            <div className="visual-overlay" />
            <div className="visual-content"><div><span className="card-label">Selected project / 01</span><h2>{projects[0].title}</h2></div><span className="round-link"><ArrowUpRight size={16} /></span></div>
          </a>

          <article className="bento stats-card motion-item">
            <div className="stats-header"><span className="card-label">What I bring</span><span className="stats-icon"><Sparkles size={17} /></span></div>
            <div><div className="stat-number">10<span className="purple">+</span></div><p className="stat-description">Digital products, portfolios, and business websites brought to life.</p></div>
            <div className="stat-tags">{capabilities.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        </section>

        <section className="lower-grid">
          <article className="bento services-card motion-item">
            <div className="card-heading-row"><div><span className="card-label">Core capabilities</span><h2 className="card-title">A practical partner<br />for your next build.</h2></div><Layers3 size={20} className="accent-icon" /></div>
            <div className="capability-list">{capabilities.map((item, index) => <div className="capability-row" key={item}><span className="capability-number mono">0{index + 1}</span><span>{item}</span><Check size={14} /></div>)}</div>
          </article>
          <article className="bento project-list-card motion-item">
            <div className="card-heading-row"><div><span className="card-label">Recent work</span><h2 className="card-title">Built with intent.</h2></div><BriefcaseBusiness size={20} className="accent-icon" /></div>
            <div className="mini-project-list">{projects.map((project) => <a href={project.href} target="_blank" rel="noreferrer" className="mini-project" key={project.title}><div className="mini-thumb"><img src={project.image} alt="" /></div><div><strong>{project.title}</strong><span>{project.type}</span></div><ArrowUpRight size={15} /></a>)}</div>
            <Link href="/portfolio" className="text-link">View all projects <ArrowUpRight size={14} /></Link>
          </article>
          <article className="bento note-card motion-item"><Code2 size={22} className="accent-icon" /><span className="card-label">My approach</span><p>Clear structure.<br /><em>Thoughtful details.</em></p><Link href="/contact" className="round-link"><ArrowUpRight size={16} /></Link></article>
        </section>

        <footer className="dashboard-footer"><span className="mono">© 2026 JR.DEV</span><span className="mono">Crafted for the web <span className="footer-dot" /></span></footer>
      </div>
    </main>
  );
}
