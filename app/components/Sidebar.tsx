'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Home,
  Briefcase,
  User,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Portfolio', href: '/portfolio', icon: Briefcase },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const socials = [
    {
      Icon: Facebook,
      href: 'https://www.facebook.com/lockdown15100',
      title: 'Facebook',
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/rodbargayo/',
      title: 'LinkedIn',
    },
    {
      Icon: Instagram,
      href: 'https://www.instagram.com/juanbargayo/',
      title: 'Instagram',
    },
  ];

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      if (window.innerWidth < 768) {
        mainElement.style.marginLeft = '0px';
      } else {
        mainElement.style.marginLeft = isOpen ? '256px' : '80px';
      }
    }
  }, [isOpen]);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen hidden md:flex flex-col bg-slate-950/80 backdrop-blur-xl border-r border-white/5 transition-all duration-300 ease-out z-50 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      {/* Header */}
      <div className="relative h-20 flex items-center justify-between px-4 border-b border-white/5">
        <div className="flex items-center gap-3 overflow-hidden">
          {/* Logo mark — always visible */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-slate-950 shadow-lg shadow-blue-500/30">
            R
          </span>
          {isOpen && (
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 whitespace-nowrap">
              Rod
            </span>
          )}
        </div>
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Collapse sidebar"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Expand button when collapsed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Expand sidebar"
          className="mx-auto mt-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
        >
          <Menu size={18} />
        </button>
      )}

      {/* Navigation */}
      <nav className="relative mt-6 px-3 space-y-1.5 flex-1">
        {menuItems.map((item) => {
          const active =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-4 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-gradient-to-r from-blue-500/15 to-cyan-500/5 text-white ring-1 ring-blue-400/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {/* Active accent bar */}
              {active && (
                <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-blue-400 to-cyan-400" />
              )}
              <Icon
                size={20}
                className={`shrink-0 transition-colors ${
                  active
                    ? 'text-blue-300'
                    : 'text-slate-500 group-hover:text-slate-200'
                }`}
              />
              {isOpen && <span className="truncate">{item.name}</span>}

              {/* Tooltip when collapsed */}
              {!isOpen && (
                <span className="pointer-events-none absolute left-16 z-50 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-100 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="relative border-t border-white/5 px-3 py-5 space-y-1">
        {isOpen && (
          <p className="px-3.5 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Connect
          </p>
        )}
        {socials.map(({ Icon, href, title }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="group relative flex items-center gap-4 rounded-xl px-3.5 py-2.5 text-slate-400 transition-all duration-200 hover:text-white hover:bg-white/5"
          >
            <Icon
              size={18}
              className="shrink-0 text-slate-500 transition-colors group-hover:text-blue-300"
            />
            {isOpen && <span className="truncate text-xs">{title}</span>}
            {!isOpen && (
              <span className="pointer-events-none absolute left-16 z-50 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-slate-100 opacity-0 shadow-lg ring-1 ring-white/10 transition-opacity duration-200 group-hover:opacity-100">
                {title}
              </span>
            )}
          </a>
        ))}
      </div>
    </aside>
  );
}