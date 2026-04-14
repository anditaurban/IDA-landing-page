'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Users, PlayCircle, ChevronDown, Check, Lock, ArrowRight } from 'lucide-react';
import { COURSES, formatRupiah } from '@/lib/dummyData';

// Data silabus dummy
const SYLLABUS = [
  { id: 1, title: "1. Pengenalan & Persiapan", duration: "45 Min", items: ["Apa itu teknologi ini?", "Instalasi Tools", "Hello World"] },
  { id: 2, title: "2. Konsep Dasar & Sintaks", duration: "2 Jam", items: ["Tipe Data & Variabel", "Control Flow", "Fungsi & Modularitas"] },
  { id: 3, title: "3. Studi Kasus Mini Project", duration: "3 Jam", items: ["Setup Project", "Implementasi Logika", "Deployment Sederhana"] },
];

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  
  // WAJIB menggunakan `use()` untuk membuka Promise dari params (Next.js 15+)
  const resolvedParams = use(params);

  // Mencari course berdasarkan ID di parameter URL
  const courseId = parseInt(resolvedParams.id);
  const course = COURSES.find(c => c.id === courseId);

  // Jika course tidak ditemukan, arahkan ke halaman 404 (Not Found)
  if (!course) {
    notFound();
  }

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header Breadcrumb & Basic Info dengan Image Background */}
      <div 
        className="relative pt-10 pb-28 px-4"
        style={{
          // Gambar hardcode umum bernuansa digital/teknologi
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay Gradients */}
        {/* Overlay 1: Warna gelap solid untuk memastikan kontras teks */}
        <div className="absolute inset-0 bg-slate-950/70"></div>
        {/* Overlay 2: Gradient fade out di bagian bawah agar menyatu dengan background halaman */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"></div>

        {/* Konten Header */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <Link href="/learning-path" className="text-blue-300 text-sm font-medium hover:text-white flex items-center w-fit transition-colors">
            ← Kembali ke Learning Path
          </Link>
          
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-600/50 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-blue-400/30">
              {course.category}
            </span>
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
              {course.level}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            {course.title}
          </h1>
          
          <p className="text-slate-200 text-lg max-w-2xl drop-shadow-md">
            Pelajari dari dasar hingga mahir dengan kurikulum yang dirancang khusus oleh praktisi industri. Dilengkapi dengan mini project untuk membangun portfolio.
          </p>
          
          <div className="flex items-center space-x-6 text-sm font-medium">
            <div className="flex items-center text-amber-400 drop-shadow">
              <Star className="w-5 h-5 fill-current mr-1.5" />
              <span className="text-white">{course.rating} / 5.0 Rating</span>
            </div>
            <div className="flex items-center text-slate-200 drop-shadow">
              <Users className="w-5 h-5 mr-1.5" />
              <span>{course.students.toLocaleString('id-ID')} Terdaftar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20 flex flex-col md:flex-row gap-8">
        
        {/* Main Content (Left) */}
        <div className="flex-1 space-y-8">
          {/* Mentor Section */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pengajar Utama</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-500 shadow-inner">
                {course.author.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{course.author}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Senior {course.category} @ Tech Startup</p>
              </div>
            </div>
          </div>

          {/* Syllabus Accordion */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Materi Pelajaran</h3>
            <div className="space-y-3">
              {SYLLABUS.map((module, index) => (
                <div key={module.id} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-slate-900 dark:text-white">{module.title}</span>
                      <span className="text-xs text-slate-500 mt-1">{module.items.length} Topik • {module.duration}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === index && (
                    <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-top-2">
                      <ul className="space-y-3">
                        {module.items.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                            <PlayCircle className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Checkout Card (Right) */}
        <div className="md:w-80 shrink-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-6 sticky top-24">
            <div className={`h-40 w-full rounded-xl mb-6 ${course.thumbnail} flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner`}>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
               <PlayCircle className="w-12 h-12 text-white relative z-10 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all drop-shadow-md" />
            </div>
            
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {course.price === 0 ? 'Gratis' : formatRupiah(course.price)}
            </div>
            
            {course.price > 0 && (
              <p className="text-sm text-slate-500 line-through mb-6">{formatRupiah(course.price * 2)}</p>
            )}
            
            <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl mb-3 shadow-lg shadow-blue-600/20 transition-all flex justify-center items-center">
              {course.price === 0 ? 'Daftar Kelas Gratis' : 'Beli Kelas Sekarang'} <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            
            {course.price > 0 && (
              <Link href="/subscription" className="w-full py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-xl transition-all flex justify-center items-center">
                Berlangganan Pro
              </Link>
            )}

            <div className="mt-6 space-y-3 pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">Kelas ini mencakup:</div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400"><Lock className="w-4 h-4 mr-2 text-slate-400" /> Akses Selamanya</div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Sertifikat Penyelesaian</div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400"><Check className="w-4 h-4 mr-2 text-emerald-500" /> Akses Grup Diskusi</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}