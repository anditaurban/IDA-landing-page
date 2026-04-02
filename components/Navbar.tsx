'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  

  // 2. Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learning Path', path: '/learning-path' },
    { name: 'Langganan', path: '/subscription', icon: <Sparkles className="w-4 h-4 mr-1 text-amber-500 inline" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">Inovasi Course</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`transition flex items-center ${pathname === link.path || pathname.startsWith('/course') && link.path === '/learning-path' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 dark:text-slate-300 font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Masuk</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">Daftar</button>
          </div>

          {/* Mobile Menu Toggle (HP) */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Panel (Diperbaiki Posisinya) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-4 shadow-xl z-50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${pathname === link.path ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <hr className="border-slate-200 dark:border-slate-700 my-2" />
            
            <div className="flex flex-col space-y-3 pt-2 pb-2">
              <button className="w-full text-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Masuk</button>
              <button className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-colors shadow-md shadow-blue-600/20">Daftar Sekarang</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
