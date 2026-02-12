'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Rod</h3>
            <p className="text-gray-400">Freelance Fullstack Web Developer</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/portfolio" className="hover:text-blue-500">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:johnrodney.bargayo@gmail.com" className="hover:text-blue-500">
                  johnrodney.bargayo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+639661641562" className="hover:text-blue-500">
                  +639661641562
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/in/rodbargayo/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/lockdown15100" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/juanbargayo/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-center text-gray-500">
            © 2024 John Rodney Bargayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
