import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Inovasi Course | Platform Belajar Gen-Z',
  description: 'Tingkatkan skill digitalmu dengan materi standar industri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* Tambahkan suppressHydrationWarning di bawah ini 👇 */}
      <body 
        suppressHydrationWarning 
        className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300"
      >
        <Navbar />
        <main>{children}</main>
        
        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 mt-10">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 dark:text-slate-400 text-sm">
            <p>© 2026 Inovasi Course. Crafted for Gen Z Learners.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}