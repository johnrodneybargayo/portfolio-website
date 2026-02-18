'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 text-white py-12 md:py-16 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 md:mb-4">Rod</h3>
            <p className="text-slate-400 text-sm md:text-base">Freelance Web Developer crafting elegant digital solutions</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm md:text-base">
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors duration-200">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-lg">Contact Info</h4>
            <div className="space-y-2 md:space-y-3 text-slate-400 text-sm md:text-base">
              <div className="flex items-center gap-2 md:gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:johnrodney.bargayo@gmail.com" className="hover:text-blue-400 transition-colors duration-200 break-all">
                  johnrodney.bargayo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+6399967788865" className="hover:text-blue-400 transition-colors duration-200">
                  +63 999 677 8865
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-6 md:pt-8">
          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <a href="https://www.linkedin.com/in/rodbargayo/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/lockdown15100" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/juanbargayo/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-center text-slate-500 text-xs md:text-sm">
            © 2026 John Rodney Bargayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
