'use client';

import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socials = [
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/rodbargayo/',
      label: 'LinkedIn',
    },
    {
      Icon: Facebook,
      href: 'https://www.facebook.com/lockdown15100',
      label: 'Facebook',
    },
    {
      Icon: Instagram,
      href: 'https://www.instagram.com/juanbargayo/',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-slate-950 text-white">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        {/* CTA row */}
        <div className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300/90 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
              Available for work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-md leading-tight">
              Have a project in{' '}
              <span className="bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent">
                mind?
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 pb-12 md:pb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-slate-950 shadow-lg shadow-blue-500/30">
                R
              </span>
              <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Rod
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xs">
              Freelance web developer crafting elegant, high-performing digital
              solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm md:text-base text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-4 bg-slate-700 transition-all duration-200 group-hover:w-6 group-hover:bg-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:johnrodney.bargayo@gmail.com"
                className="group flex items-center gap-3 text-sm md:text-base text-slate-400 transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/20 text-blue-300 transition-colors group-hover:bg-blue-500/20">
                  <Mail size={15} />
                </span>
                <span className="break-all">johnrodney.bargayo@gmail.com</span>
              </a>
              <a
                href="tel:+6399967788865"
                className="group flex items-center gap-3 text-sm md:text-base text-slate-400 transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/20 text-blue-300 transition-colors group-hover:bg-blue-500/20">
                  <Phone size={15} />
                </span>
                +63 999 677 8865
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
          <p className="text-xs md:text-sm text-slate-500">
            © 2026 John Rodney Bargayo. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/60 text-slate-400 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-300 hover:ring-blue-400/40"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}