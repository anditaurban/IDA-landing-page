import Link from 'next/link';
import { ArrowRight, Sparkles, Target, Briefcase, Award, Rocket, PlayCircle, Star, Users, MessageSquareQuote, CheckCircle2, ChevronRight } from 'lucide-react';
import { COURSES, TESTIMONIALS, formatRupiah } from '@/lib/dummyData';

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-slate-800/40 dark:via-[#0B1120] dark:to-[#0B1120] -z-10"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold mb-8 border border-blue-100 dark:border-blue-800/50 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
            <Sparkles className="w-4 h-4 mr-2" />
            Platform Belajar Digital #1 Gen-Z
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.15]">
            Bangun Karir Tech <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Impianmu Hari Ini</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Belajar skill Digital dari nol, bangun portfolio nyata, dan dapatkan bimbingan langsung dari expert industri. Dirancang khusus untuk talenta masa depan.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/learning-path" className="group w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-slate-900/20 dark:shadow-blue-600/20 flex items-center justify-center text-lg">
              Eksplor Kelas <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/subscription" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-bold rounded-xl transition-all flex items-center justify-center text-lg shadow-sm backdrop-blur-sm">
              Lihat Paket Belajar
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Trusted By Section */}
      <section className="pb-16 pt-8 border-b border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-[#0B1120]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-8 uppercase tracking-widest">Alumni Kami Bekerja Di Perusahaan Top</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-800 dark:text-slate-200"><Rocket className="w-7 h-7 text-indigo-500"/> TechCorp</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-800 dark:text-slate-200"><Briefcase className="w-7 h-7 text-amber-500"/> GoStartup</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-800 dark:text-slate-200"><Target className="w-7 h-7 text-emerald-500"/> FinTech.id</div>
            <div className="flex items-center gap-2 font-bold text-2xl text-slate-800 dark:text-slate-200"><Award className="w-7 h-7 text-blue-500"/> EduGlobal</div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-white dark:bg-[#0B1120] py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100 dark:divide-slate-800">
          <div className="p-4">
            <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">100k<span className="text-blue-500">+</span></div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">Siswa Bergabung</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">4.9<span className="text-amber-500">/5</span></div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">Rating Rata-rata</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">50<span className="text-blue-500">+</span></div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">Expert Mentor</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">200<span className="text-blue-500">+</span></div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">Hiring Partners</div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-100 dark:border-slate-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Kenapa Belajar di Inovasi Course?</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">Kami mendesain ekosistem belajar yang memastikan kamu tidak hanya paham teori, tapi juga siap praktek di dunia kerja sesungguhnya.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Kurikulum Terarah</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Materi disusun berurutan dari fundamental hingga level advanced (Learning Path) sesuai standar industri terkini.</p>
          </div>
          
          <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-500/50 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Portfolio Ready</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Kerjakan real-world project di setiap akhir materi untuk memperkuat resume dan portfolio GitHub kamu.</p>
          </div>

          <div className="group bg-white dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sertifikat Kelulusan</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Dapatkan sertifikat resmi setelah menyelesaikan ujian dan project, langsung bisa kamu pajang di LinkedIn!</p>
          </div>
        </div>
      </section>

      {/* 4. Popular Courses */}
      <section className="bg-slate-50/50 dark:bg-slate-900/20 py-24 border-y border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Kelas Terpopuler Minggu Ini</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">Mulai langkah pertamamu dengan materi yang paling banyak diminati oleh industri saat ini.</p>
            </div>
            <Link href="/learning-path" className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-900 dark:text-white font-medium rounded-xl transition-all shadow-sm flex items-center shrink-0">
              Lihat Semua Kelas <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSES.slice(0, 3).map(course => (
              <Link href={`/course/${course.id}`} key={course.id} className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                <div className={`h-48 w-full ${course.thumbnail} relative p-5 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <div className="flex justify-between relative z-10">
                    <span className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-sm">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-auto flex justify-end relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      <PlayCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">{course.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6 mt-auto">
                    <div className="flex items-center text-amber-500 mr-4">
                      <Star className="w-4 h-4 fill-current mr-1.5" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1.5" />
                      <span>{(course.students / 1000).toFixed(1)}k Siswa</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <span className={`font-extrabold text-lg ${course.price === 0 ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}>
                      {formatRupiah(course.price)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. Testimonials */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Cerita Sukses Alumni</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">Ribuan orang telah membuktikan bahwa Inovasi Course adalah jalan pintas terbaik menuju karir impian mereka.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testi => (
            <div key={testi.id} className="bg-white dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm relative hover:-translate-y-1 transition duration-300">
              <MessageSquareQuote className="absolute top-8 right-8 w-10 h-10 text-slate-100 dark:text-slate-700/30" />
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${testi.color}`}>
                  {testi.initial}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900 dark:text-white">{testi.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testi.role}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10 italic">
                {testi.text}
              </p>
              <div className="mt-6 flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Masih ragu? Berikut jawaban untuk pertanyaan umum dari calon pendaftar.</p>
          </div>
          <div className="grid gap-4">
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3 flex items-start">
                <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 shrink-0 mt-0.5"/> 
                Apakah pemula tanpa background IT bisa ikut?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 pl-9 leading-relaxed">Tentu saja! Materi kami disusun dari level fundamental. Kamu akan dibimbing step-by-step dari 0 sampai siap membuat project sendiri tanpa perlu pengalaman koding sebelumnya.</p>
            </div>
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3 flex items-start">
                <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 shrink-0 mt-0.5"/> 
                Apakah sertifikatnya berlaku untuk melamar kerja?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 pl-9 leading-relaxed">Sangat bisa. Sertifikat Inovasi Course mencantumkan skill spesifik dan project akhir yang kamu selesaikan, yang mana nilai plus ini sangat dicari dan disukai oleh rekruter perusahaan tech.</p>
            </div>
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-slate-600 transition-colors">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3 flex items-start">
                <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 shrink-0 mt-0.5"/> 
                Bagaimana jika saya mengalami kesulitan saat belajar?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 pl-9 leading-relaxed">Kami menyediakan forum diskusi komunitas yang aktif dan mentor eksklusif (khusus untuk paket Pro & Premium) yang siap menjawab pertanyaan dan me-review kodemu kapan saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW PREMIUM CTA Bottom */}
      <section className="px-4 py-24 max-w-6xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl py-20 px-6 md:px-16 text-center">
            {/* Abstract Premium Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
               <div className="absolute top-[-25%] left-[5%] w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>
               <div className="absolute bottom-[-25%] right-[5%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
               {/* Subtle Grid overlay */}
               <div className="absolute inset-0 bg-[url('[https://grainy-gradients.vercel.app/noise.svg](https://grainy-gradients.vercel.app/noise.svg)')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Siap Memulai Karir <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">
                  Tech Impianmu?
                </span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed">
                Bergabunglah dengan ekosistem kami. Mulai dari nol, bangun portfolio standar industri, dan bersiaplah direkrut oleh perusahaan top.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link href="/learning-path" className="group w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] flex items-center justify-center text-lg">
                  Mulai Belajar Sekarang <Rocket className="w-5 h-5 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/subscription" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-2xl transition-all flex items-center justify-center text-lg backdrop-blur-md">
                  Lihat Paket Pro
                </Link>
              </div>
              <p className="mt-8 text-sm text-slate-400 flex items-center justify-center gap-2">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bebas akses materi basic selamanya.
              </p>
            </div>
        </div>
      </section>
    </div>
  );
}
