'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BriefcaseBusiness, Code2, FileText, Home, Instagram, Linkedin, Mail, UserRound } from 'lucide-react';

const menuItems = [
  { name: 'Overview', href: '/', icon: Home, number: '01' },
  { name: 'Selected work', href: '/portfolio', icon: BriefcaseBusiness, number: '02' },
  { name: 'About & skills', href: '/about', icon: UserRound, number: '03' },
  { name: 'Contact', href: '/contact', icon: Mail, number: '04' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="app-sidebar">
      <Link href="/" className="brand"><span className="brand-mark">JR</span><span className="brand-name">JR<span>.DEV</span></span></Link>
      <p className="sidebar-caption mono">Workspace</p>
      <nav className="app-navigation" aria-label="Primary navigation">
        {menuItems.map(({ name, href, icon: Icon, number }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return <Link href={href} key={href} className={`app-nav-item ${active ? 'active' : ''}`}><span className="nav-icon"><Icon size={17} /></span><span className="nav-label">{name}</span><span className="nav-number">{number}</span></Link>;
        })}
      </nav>
      <div className="sidebar-bottom">
        <div className="availability-card"><div className="availability-top"><span className="status-dot" /> Available for work</div><p>Open to focused builds and thoughtful collaborations.</p><Link href="/contact" className="sidebar-contact">Let&apos;s talk <Mail size={14} /></Link></div>
        <div className="sidebar-footer"><span className="mono">© 2026</span><div className="sidebar-socials"><a href="https://www.linkedin.com/in/rodbargayo/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={14} /></a><a href="https://www.instagram.com/juanbargayo/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={14} /></a></div></div>
      </div>
    </aside>
  );
}
