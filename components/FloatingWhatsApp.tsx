'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Swal from 'sweetalert2';

// HAPUS kata "default", sehingga menjadi seperti ini:
export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    kota: '',
    perihal: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form kosong
    if (!formData.nama || !formData.kota || !formData.perihal) {
      Swal.fire({
        icon: 'warning',
        title: 'Data Belum Lengkap!',
        text: 'Silakan isi Nama, Domisili, dan Perihal terlebih dahulu sebelum memulai percakapan.',
        confirmButtonColor: '#25D366'
      });
      return;
    }

    // Format pesan sesuai permintaan
    const message = `Halo Admin NgodingAI, saya ${formData.nama} dari ${formData.kota}. Ingin bertanya mengenai ${formData.perihal}`;
    
    // Nomor WA Admin
    const waNumber = "6287760759450";
    
    // Encode teks agar format spasi dan enter aman di URL
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');
    
    // Opsional: Tutup modal dan reset form setelah klik kirim
    setIsOpen(false);
    setFormData({ nama: '', kota: '', perihal: '' });
  };

  return (
    <>
      {/* FLOATING BUTTON (Pemicu Modal) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hover:scale-110 transition-transform duration-300 drop-shadow-xl focus:outline-none"
        aria-label="Hubungi kami via WhatsApp"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/logo_wa.png" 
          alt="WhatsApp Icon" 
          className="w-14 h-14" 
        />
      </button>

      {/* MODAL FORM OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* MODAL CONTAINER */}
          <div className="bg-white rounded-2xl w-full max-w-[400px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            
            {/* HEADER MODAL */}
            <div className="bg-[#128C7E] px-6 py-5 relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold text-white mb-1">Tanya Admin WA</h3>
              <p className="text-white/90 text-sm">Silakan isi data untuk memulai percakapan</p>
            </div>

            {/* BODY FORM */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama Anda..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Domisili / Kota</label>
                <input 
                  type="text" 
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  placeholder="Contoh: Jakarta..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Perihal</label>
                <textarea 
                  name="perihal"
                  value={formData.perihal}
                  onChange={handleChange}
                  placeholder="Tuliskan pertanyaan Anda..."
                  rows={4}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#128C7E] focus:ring-1 focus:ring-[#128C7E] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-sm"
              >
                {/* Inline SVG Logo WhatsApp agar persis seperti tombol */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Kirim WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}