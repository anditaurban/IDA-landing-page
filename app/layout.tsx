import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react'; 

// Ganti baris import yang lama menjadi ini:
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Inovasia Digital Academy',
  description: 'Kursus AI coding terdepan di Indonesia untuk developer yang ingin bebas dari coding manual.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body 
        suppressHydrationWarning 
        className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300 relative"
      >
        <Navbar />
        <main>{children}</main>
        
        {/* CUSTOM FOOTER */}
        <footer className="bg-[#0B1120] text-slate-300 py-16 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
              
              <div className="md:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="NgodingAI Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                  <div>
                    <h3 className="text-xl font-bold text-white leading-none">Digital Academy</h3>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pr-4">
                  Belajar skill Digital dari nol, bangun portfolio nyata, dan dapatkan bimbingan langsung dari expert industri. Dirancang khusus untuk talenta masa depan.
                </p>
              </div>

              <div className="md:col-span-4">
                <h4 className="text-lg font-bold text-white mb-6">Kontak</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 shrink-0 text-slate-500" />
                    <a href="mailto:course@inovasia.co.id" className="hover:text-blue-400 transition-colors">course@inovasia.co.id</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-slate-500" />
                    <span>+62 877-6075-9450</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 shrink-0 text-slate-500 mt-0.5" />
                    <span className="leading-relaxed">Ruko Pesona Darussalam Blok A3/1 Lt.2, Waringin Jaya, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16920</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <h4 className="text-lg font-bold text-white mb-6">Kursus</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><Link href="/learning-path" className="hover:text-blue-400 transition-colors">AI untuk Pemula</Link></li>
                  <li><Link href="/learning-path" className="hover:text-blue-400 transition-colors">Advanced AI Coding</Link></li>
                  <li><Link href="#" className="hover:text-blue-400 transition-colors">Corporate Training</Link></li>
                  <li><Link href="#" className="hover:text-blue-400 transition-colors">Private Mentoring</Link></li>
                </ul>
              </div>

            </div>

            <div className="pt-8 border-t border-slate-800/80 text-center text-sm text-slate-500">
              © 2026 Inovasia Digital Academy.
            </div>
          </div>
        </footer>

        {/* PANGGIL KOMPONEN FLOATING WA DI SINI */}
        <FloatingWhatsApp/>

      </body>
    </html>
  );
}