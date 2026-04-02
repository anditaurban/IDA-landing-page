export const CATEGORIES: string[] = [
  "Semua Kelas", "AI Engineer", "Gen AI Engineer", "MLOps Engineer", 
  "Data Scientist", "Front-End Web", "React", "Back-End Python", "Back-End JavaScript"
];

export interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  rating: number;
  students: number;
  price: number;
  thumbnail: string;
  author: string;
}

export const COURSES: Course[] = [
  { id: 1, title: "Roadmap Menjadi AI Engineer di 2026", category: "AI Engineer", level: "Beginner", rating: 4.9, students: 15420, price: 0, thumbnail: "bg-gradient-to-br from-blue-500 to-purple-600", author: "Dr. Sandhika" },
  { id: 2, title: "Mastering Prompt Engineering & Gen AI", category: "Gen AI Engineer", level: "Intermediate", rating: 4.8, students: 8200, price: 299000, thumbnail: "bg-gradient-to-br from-indigo-500 to-cyan-500", author: "Nadia AI" },
  { id: 3, title: "Deployment Model ML dengan MLOps", category: "MLOps Engineer", level: "Advanced", rating: 4.7, students: 3150, price: 450000, thumbnail: "bg-gradient-to-br from-slate-700 to-slate-900", author: "Budi Santoso" },
  { id: 4, title: "Data Science Fundamentals dengan Python", category: "Data Scientist", level: "Beginner", rating: 4.9, students: 22100, price: 150000, thumbnail: "bg-gradient-to-br from-emerald-400 to-teal-600", author: "Riza Rahman" },
  { id: 5, title: "Membangun UI Interaktif dengan React.js", category: "React", level: "Intermediate", rating: 4.8, students: 18400, price: 199000, thumbnail: "bg-gradient-to-br from-cyan-400 to-blue-500", author: "Galih Pratama" },
  { id: 6, title: "Dasar HTML, CSS, & JS Modern", category: "Front-End Web", level: "Beginner", rating: 4.6, students: 35000, price: 0, thumbnail: "bg-gradient-to-br from-orange-400 to-red-500", author: "WPU Team" },
  { id: 7, title: "REST API Super Cepat dengan Node.js", category: "Back-End JavaScript", level: "Intermediate", rating: 4.7, students: 9200, price: 250000, thumbnail: "bg-gradient-to-br from-yellow-400 to-green-500", author: "Eko Kurniawan" },
  { id: 8, title: "Python API Development: FastAPI", category: "Back-End Python", level: "Intermediate", rating: 4.9, students: 6700, price: 299000, thumbnail: "bg-gradient-to-br from-blue-600 to-blue-800", author: "Tigor M." }
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  initial: string;
  color: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Budi Santoso", role: "Front-End Engineer @ Unicorn", text: "Berkat Inovasi Course, saya bisa switch karir dari non-IT ke IT dalam 6 bulan. Materinya sangat up-to-date dan komunitasnya suportif!", initial: "B", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400" },
  { id: 2, name: "Siti Aminah", role: "Data Scientist @ Tech Startup", text: "Mini project-nya sangat ngebantu buat portofolio GitHub. Mentornya juga fast response kalau ditanya di forum.", initial: "S", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400" },
  { id: 3, name: "Andi Saputra", role: "AI Engineer", text: "Worth it banget langganan paket Pro. Roadmapnya jelas, gak bikin pusing buat pemula yang mau belajar AI.", initial: "A", color: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400" }
];

export const formatRupiah = (price: number): string => {
  if (price === 0) return "Gratis";
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};