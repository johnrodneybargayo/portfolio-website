'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Portfolio', href: '/portfolio', icon: '💼' },
    { name: 'About', href: '/about', icon: '👤' },
    { name: 'Contact', href: '/contact', icon: '✉️' },
  ];

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.marginLeft = isOpen ? '256px' : '80px';
    }
  }, [isOpen]);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800/50 transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Header */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-slate-800/50">
        {isOpen && (
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Rod
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors duration-200 ml-auto"
        >
          {isOpen ? (
            <X size={20} className="text-slate-300" />
          ) : (
            <Menu size={20} className="text-slate-300" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-8 px-3 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group relative text-slate-300 hover:text-white"
          >
            <span className="text-xl min-w-fit">{item.icon}</span>
            {isOpen && (
              <span className="text-sm font-medium truncate">{item.name}</span>
            )}
            {!isOpen && (
              <div className="absolute left-20 bg-slate-800 text-slate-200 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                {item.name}
              </div>
            )}
          </Link>
        ))}
      </nav>

      {/* Social Links at Bottom */}
      <div className="absolute bottom-8 left-3 right-3 space-y-2">
        {[
          { icon: 'f', href: 'https://www.facebook.com/lockdown15100', title: 'Facebook' },
          { icon: 'in', href: 'https://www.linkedin.com/in/rodbargayo/', title: 'LinkedIn' },
          { icon: 'ig', href: 'https://www.instagram.com/juanbargayo/', title: 'Instagram' },
        ].map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group relative text-slate-400 hover:text-slate-200"
            title={social.title}
          >
            <span className="text-lg font-bold min-w-fit">{social.icon}</span>
            {isOpen && (
              <span className="text-xs truncate">{social.title}</span>
            )}
            {!isOpen && (
              <div className="absolute left-20 bg-slate-800 text-slate-200 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                {social.title}
              </div>
            )}
          </a>
        ))}
      </div>
    </aside>
  );
}
