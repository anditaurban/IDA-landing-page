'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, PlayCircle, Star, Users, AlertCircle, SlidersHorizontal, X, Check } from 'lucide-react';
import { COURSES, CATEGORIES, formatRupiah } from '@/lib/dummyData';

export default function LearningPathPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Kelas");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // === LOGIKA DRAGGABLE & AUTO-SCROLL MARQUEE ===
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplikasi data agar bisa looping (dibuat agak banyak)
  const marqueeCategories = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

  // Efek jalan otomatis
  useEffect(() => {
    const container = scrollRef.current;
    let animationId: number;

    const playScroll = () => {
      if (container && !isDragging && !isHovered) {
        container.scrollLeft += 0.8; // Ganti angka ini untuk mengatur kecepatan

        // Reset ke awal jika sudah mencapai setengah jalan (untuk ilusi infinite scroll)
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth) / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(playScroll);
    };

    animationId = requestAnimationFrame(playScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isHovered]);

  // Handler untuk Mouse Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Angka 2 adalah kecepatan geser (drag multiplier)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  // ===============================================

  // Filter Logic
  const filteredCourses = COURSES.filter(course => {
    const matchCategory = selectedCategory === "Semua Kelas" || course.category === selectedCategory;
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Kunci scroll body saat drawer terbuka
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isFilterOpen]);

  return (
    <div className="animate-in fade-in duration-500 min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* Overlay Drawer */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Side Drawer / Bottom Sheet */}
      <div 
        className={`fixed z-50 bg-white dark:bg-slate-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out
          inset-x-0 bottom-0 h-[75vh] rounded-t-3xl
          ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}
          md:inset-y-0 md:right-0 md:left-auto md:w-[400px] md:h-full md:rounded-none
          md:translate-y-0 ${isFilterOpen ? 'md:translate-x-0' : 'md:translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Filter Kelas</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Pilih kategori yang ingin dipelajari</p>
          </div>
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {CATEGORIES.map(category => (
              <button
                key={`drawer-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border ${
                  selectedCategory === category
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-slate-600'
                }`}
              >
                <span className="font-medium">{category}</span>
                {selectedCategory === category && (
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <button 
            onClick={() => setIsFilterOpen(false)}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-colors"
          >
            Tampilkan {filteredCourses.length} Kelas
          </button>
        </div>
      </div>

      {/* Header Area */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pb-0 pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mau jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Expert</span> apa hari ini?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Tingkatkan skill digitalmu dengan materi standar industri. Mulai dari nol sampai siap kerja.
          </p>
          
          <div className="flex items-center gap-3 w-full max-w-2xl mx-auto mt-8">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Cari kelas impianmu..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex-shrink-0 flex items-center justify-center gap-2 px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 rounded-2xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium hidden sm:block">Filter</span>
            </button>
          </div>
        </div>

        {/* DRAGGABLE & AUTO-SCROLLING MARQUEE */}
        <div className="mt-10 py-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div 
              className="relative w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
              }}
            >
              <div 
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                className={`flex gap-3 overflow-x-auto hide-scrollbar select-none pb-2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ scrollBehavior: 'auto' }}
              >
                {marqueeCategories.map((category, index) => (
                  <button
                    key={`marquee-${category}-${index}`}
                    onClick={() => {
                      if (!isDragging) setSelectedCategory(category);
                    }}
                    className={`flex-shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {selectedCategory !== "Semua Kelas" && (
          <div className="flex justify-between items-center mb-8 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm animate-in fade-in slide-in-from-top-4">
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              Menampilkan hasil untuk: <span className="font-bold text-slate-900 dark:text-white">{selectedCategory}</span>
            </p>
            <button 
              onClick={() => setSelectedCategory("Semua Kelas")}
              className="text-sm font-medium text-red-500 hover:text-red-600 dark:hover:text-red-400 flex items-center gap-1 bg-red-50 dark:bg-red-900/20 px-3 py-1.5 rounded-full transition-colors"
            >
              <X className="w-4 h-4" /> Reset Filter
            </button>
          </div>
        )}

        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-300">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-white dark:bg-slate-800 rounded-full mb-4 shadow-sm border border-slate-100 dark:border-slate-700">
              <AlertCircle className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Waduh, kelasnya nggak ketemu 😭</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua Kelas"); }}
              className="mt-6 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <Link 
                href={`/course/${course.id}`} 
                key={course.id} 
                className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`h-40 w-full ${course.thumbnail} relative p-4 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="flex justify-between relative z-10">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-sm">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-auto flex justify-end relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-5 mt-auto">
                    <div className="flex items-center text-amber-500 mr-4">
                      <Star className="w-4 h-4 fill-current mr-1.5" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1.5" />
                      <span>{(course.students / 1000).toFixed(1)}k Siswa</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center mt-auto">
                    <span className={`font-bold ${course.price === 0 ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}>
                      {course.price === 0 ? 'Gratis' : formatRupiah(course.price)}
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                      Lihat Detail &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      
      {/* CSS Utilities tambahan untuk menyembunyikan scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}