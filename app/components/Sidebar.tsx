'use client';

import { useState } from 'react';
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

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 transition-all duration-300 z-40 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-slate-700">
          {isOpen && (
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Rod
            </span>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
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
              className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors group relative"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && (
                <span className="text-slate-200 font-medium">{item.name}</span>
              )}
              {!isOpen && (
                <div className="absolute left-20 bg-slate-700 text-slate-200 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
              className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors group relative"
              title={social.title}
            >
              <span className="text-lg font-bold text-slate-300">{social.icon}</span>
              {isOpen && (
                <span className="text-slate-400 text-sm">{social.title}</span>
              )}
              {!isOpen && (
                <div className="absolute left-20 bg-slate-700 text-slate-200 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {social.title}
                </div>
              )}
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content Offset */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'ml-64' : 'ml-20'
        }`}
      />
    </>
  );
}
