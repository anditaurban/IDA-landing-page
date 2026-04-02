'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Investasi Terbaik untuk Karirmu
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
          Pilih paket belajar yang sesuai dengan goals kamu. Akses ratusan materi, sertifikat, dan mentoring dari expert industri.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${!isYearly ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Bulanan
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center ${isYearly ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Tahunan <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 rounded text-xs">Hemat 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Basic</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Cocok buat kamu yang baru mau coba-coba belajar.</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{isYearly ? 'Rp 49rb' : 'Rp 69rb'}</span>
            <span className="text-slate-500 dark:text-slate-400">/bulan</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {["Akses 50+ Kelas Basic", "Materi Teks & Video", "Sertifikat Penyelesaian", "Forum Diskusi Komunitas"].map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition">
            Pilih Basic
          </button>
        </div>

        {/* Pro (Highlighted) */}
        <div className="bg-slate-900 dark:bg-blue-900/20 rounded-3xl p-8 border-2 border-blue-600 shadow-2xl shadow-blue-900/20 flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            🔥 Paling Populer (Worth It!)
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Pro Learner</h3>
          <p className="text-slate-400 text-sm mb-6">Akses tanpa batas ke semua materi standar industri.</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-white">{isYearly ? 'Rp 129rb' : 'Rp 159rb'}</span>
            <span className="text-slate-400">/bulan</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Semua fitur Basic", 
              "Akses SEMUA Kelas (termasuk Premium)", 
              "Sertifikat Kelulusan Resmi", 
              "Real-world Portfolio Projects",
              "Review Tugas AI-assisted"
            ].map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
                <span className="text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition shadow-lg shadow-blue-600/30">
            Langganan Pro Sekarang
          </button>
          <p className="text-center text-xs text-slate-400 mt-4">
            {isYearly ? "Ditagih Rp 1.548.000 / tahun" : "Batalkan kapan saja."}
          </p>
        </div>

        {/* Premium */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Bootcamp / Premium</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Fokus switch karir dengan bimbingan intensif.</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{isYearly ? 'Rp 499rb' : 'Rp 599rb'}</span>
            <span className="text-slate-500 dark:text-slate-400">/bulan</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {["Semua fitur Pro", "1-on-1 Mentoring (2x Sebulan)", "Review Resume & LinkedIn", "Penyaluran Kerja (Hiring Partner)", "Simulasi Interview"].map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-3 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition">
            Konsultasi Dulu Yuk
          </button>
        </div>
      </div>
    </div>
  );
}
