import Image from "next/image";
import ProjectsCarousel from "./components/ProjectsCarousel";

const stats = [
  { value: "3+", label: "Years Experience" }, // Disesuaikan dengan status mahasiswa
  { value: "10+", label: "Projects Done" },
  { value: "Next.js", label: "Core Stack" },
  { value: "A", label: "Grade Avg" },
];

const features = [
  { title: "FULL-STACK WEB", desc: "Membangun aplikasi web responsif dengan Next.js & React." },
  { title: "MACHINE LEARNING", desc: "Analisis data dan model prediksi menggunakan Python." },
  { title: "MOBILE APPS", desc: "Pengembangan aplikasi Android native dengan Kotlin." },
  { title: "SMART CITY", desc: "Solusi digital untuk integrasi transportasi kota." },
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative flex flex-col font-sans bg-[#f5f5f0]">
        {/* 1. NAVBAR (Top - Floating di atas foto) */}
        <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="font-bold tracking-widest text-sm">MILAN.DEV</span>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition">MENU =</button>
        </header>

        {/* 2. MAIN CONTENT (Middle Grid - mulai dari top, foto tembus ke atas) */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* KOLOM KIRI: Headline Teks (3 Col) - padding atas untuk clear navbar */}
          <div className="md:col-span-3 relative z-20 flex flex-col justify-center order-2 md:order-1 px-6 md:pl-12 md:pr-4 pt-6 md:pt-28 pb-6">
            <p className="text-lg text-gray-700 mb-2">Hey, I'm Milan,</p>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[0.9] tracking-tight text-gray-900 mb-4">
              SOFTWARE
              <br />
              <span className="font-serif italic font-normal">Engineer</span>
              <br />
              STUDENT
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm mb-8 border-l-2 border-gray-400 pl-4">Transforming ideas into functional code. Informatics student specializing in Web Development & Machine Learning.</p>
            <button className="bg-black text-white w-fit px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              CONTACT ME <span>→</span>
            </button>
          </div>

          {/* KOLOM TENGAH: Foto Utama - tembus dari atas ke bawah */}
          <div className="md:col-span-6 relative z-10 order-1 md:order-2 mb-10 flex justify-center">
            {/* Wrapper untuk mengontrol lebar foto agar lebih kurus */}
            <div className="relative w-[75%] h-full min-h-[500px]">
              {/* Background abu-abu dengan rounded bawah saja */}
              <div className="absolute inset-0 bg-[#c6c6c2] rounded-b-[50%] transform translate-y-2 z-0"></div>

              {/* Foto dengan rounded bawah saja, flat di atas - mulai dari top */}
              <div className="relative w-full h-full rounded-b-[50%] overflow-hidden z-10">
                <Image
                  src="/image/IMG_2570.jpg"
                  alt="Milan Profile"
                  fill
                  className="object-cover object-center scale-140 hover:scale-150 transition-transform duration-700"
                  style={{
                    objectPosition: "50% 35%", // X=50% (Tengah), Y=20% (Agak ke Atas)
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Stats - padding atas untuk clear navbar */}
          <div className="md:col-span-3 relative z-20 flex flex-col justify-center gap-12 order-3 md:order-3 px-6 md:pl-10 md:pr-12 pt-6 md:pt-28 pb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-xs uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. FOOTER FEATURES (Bottom) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-300/50 px-6 md:px-12 pb-8">
          {features.map((item, index) => (
            <div key={index}>
              <h4 className="font-bold text-sm mb-2 uppercase">{item.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* 4. PROJECTS SECTION */}
      <ProjectsCarousel />
    </>
  );
}
