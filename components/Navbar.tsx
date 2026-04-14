'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learning Path', path: '/learning-path' },
    { name: 'Langganan', path: '/subscription', icon: <Sparkles className="w-4 h-4 mr-1 text-amber-500 inline" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)} // Tutup menu kalau logo diklik
          >
            <Image src="/logo.png" alt="Inovasi Logo" width={32} height={32} className="h-8 w-auto object-contain" />
            <span className="font-bold text-xl text-slate-900 tracking-tight">Digital Academy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`transition flex items-center ${pathname === link.path || (pathname.startsWith('/course') && link.path === '/learning-path') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="https://course.inovasia.co.id/" 
              className="text-slate-600 font-medium text-sm hover:text-blue-600 transition-colors"
            >
              Masuk
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              Daftar
            </button>
          </div>

          {/* Mobile Menu Toggle (HP) */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              type="button" // Ditambahkan agar browser tidak bingung
              onClick={() => setMobileMenuOpen((prev) => !prev)} // Menggunakan previous state untuk memastikan toggle berjalan lancar
              className="p-2 text-slate-600 hover:text-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel - Dipindah ke Root <nav> agar tidak terpotong padding kontainer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 px-4 py-6 shadow-2xl z-50 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3.5 rounded-xl font-medium transition-colors ${pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <hr className="border-slate-100 my-4" />
          
          <div className="flex flex-col space-y-3">
            <Link 
              href="https://course.inovasia.co.id/" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex justify-center items-center border border-slate-200 text-slate-700 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors"
            >
              Masuk
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-colors shadow-md shadow-blue-600/20"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}