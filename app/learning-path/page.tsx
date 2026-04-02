'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, PlayCircle, Star, Users, AlertCircle } from 'lucide-react';
import { COURSES, CATEGORIES, formatRupiah } from '@/lib/dummyData';

export default function LearningPathPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Kelas");
  
  // Filter Logic
  const filteredCourses = COURSES.filter(course => {
    const matchCategory = selectedCategory === "Semua Kelas" || course.category === selectedCategory;
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Search */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pb-8 pt-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mau jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Expert</span> apa hari ini?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Tingkatkan skill digitalmu dengan materi standar industri. Mulai dari nol sampai siap kerja.
          </p>
          
          <div className="relative max-w-2xl mx-auto mt-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Cari course, misal: 'React' atau 'Data Science'" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Content & Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Tabs Filter */}
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-4 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map(category => (
            <button 
              key={category} 
              onClick={() => setSelectedCategory(category)} 
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
              <AlertCircle className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Waduh, kelasnya nggak ketemu 😭</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda. Kami selalu mengupdate materi baru setiap minggu!
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCategory("Semua Kelas"); }}
              className="mt-6 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <Link href={`/course/${course.id}`} key={course.id} className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className={`h-40 w-full ${course.thumbnail} relative p-4 flex flex-col justify-between`}>
                  <div className="flex justify-between">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/20 text-white backdrop-blur-md border border-white/20">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">{course.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4 mt-auto">
                    <div className="flex items-center text-amber-500 mr-3">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{(course.students / 1000).toFixed(1)}k Siswa</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <span className={`font-bold ${course.price === 0 ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}>
                      {formatRupiah(course.price)}
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                      Lihat Detail
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}