'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Rod
        </Link>
        <ul className="flex gap-8 text-white">
          <li><Link href="/" className="hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-blue-500 transition">Portfolio</Link></li>
          <li><Link href="/about" className="hover:text-blue-500 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
