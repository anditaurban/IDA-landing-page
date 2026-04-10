import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image'; // TAMBAHAN
import { Mail, Phone, MapPin } from 'lucide-react'; // Instagram dihapus

export const metadata: Metadata = {
  title: 'NgodingAI By Inovasia',
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
        
        {/* CUSTOM FOOTER BARU */}
        <footer className="bg-[#0B1120] text-slate-300 py-16 border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
              
              {/* Kolom 1: Brand (Lebih lebar) */}
              <div className="md:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  {/* TAMBAHAN: Menggunakan komponen Image */}
                  <Image src="/logongodingai.png" alt="NgodingAI Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                  <div>
                    <h3 className="text-xl font-bold text-white leading-none">NgodingAI By Inovasia</h3>
                    <p className="text-sm text-slate-400 mt-1">Ngoding Tanpa Batas!</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pr-4">
                  Kursus AI coding terdepan di Indonesia untuk developer yang ingin bebas dari coding manual.
                </p>
              </div>

              {/* Kolom 2: Kontak */}
              <div className="md:col-span-4">
                <h4 className="text-lg font-bold text-white mb-6">Kontak</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    {/* TAMBAHAN: Menggunakan SVG manual agar tidak error dari lucide-react */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-500">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <a href="https://instagram.com/ngodingai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@ngodingai</a>
                  </li>
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

              {/* Kolom 3: Kursus */}
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

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800/80 text-center text-sm text-slate-500">
              © 2025 NgodingAI by Inovasia Digital Academy.
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/6287760759450" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300 drop-shadow-xl"
          aria-label="Hubungi kami via WhatsApp"
        >
          {/* Mengabaikan warning next/image khusus untuk gambar eksternal WA ini */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Icon" 
            className="w-14 h-14" 
          />
        </a>

      </body>
    </html>
  );
}