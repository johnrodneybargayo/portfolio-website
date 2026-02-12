'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 text-white py-16 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">Rod</h3>
            <p className="text-slate-400">Freelance Fullstack Web Developer crafting elegant digital solutions</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors duration-200">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:johnrodney.bargayo@gmail.com" className="hover:text-blue-400 transition-colors duration-200 text-sm break-all">
                  johnrodney.bargayo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+6399967788865" className="hover:text-blue-400 transition-colors duration-200">
                  +63 999 677 8865
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/rodbargayo/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/lockdown15100" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/juanbargayo/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-center text-slate-500 text-sm">
            © 2024 John Rodney Bargayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
