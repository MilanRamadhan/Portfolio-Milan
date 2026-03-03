// app/page.tsx
import Image from "next/image";

// Data placeholder untuk statistik dan klien
const stats = [
  { number: "#01", text: "Brand Strategy" },
  { number: "#02", text: "Brand Identity Design" },
  { number: "#03", text: "Packaging Design" },
  { number: "#04", text: "Creative Direction" },
];

const clients = ["Supa Blox", "Hype Blox", "Frame Blox", "Ultra Blox"];

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
      {/* ========================================================================
        BAGIAN LATAR BELAKANG (Ganti dengan foto kamu nanti)
        ========================================================================
      */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder Gradien Oranye-Merah dari desain */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-90"></div>

        {/*
          ======================================================================
          TUTORIAL UNTUK FOTO KAMU NANTI:
          ======================================================================
          1. Letakkan foto kamu di folder `public/image/` (misal: public/image/milan-photo.jpg).
          2. Hapus gradien placeholder di atas.
          3. Un-comment (aktifkan) komponen <Image /> di bawah ini.
          4. Ganti `src` dengan path foto kamu.
        */}

        {/*
        <Image 
          src="/image/your-photo-placeholder.jpg" // Ganti path ini
          alt="Milan - Creative Director"
          layout="fill"
          objectFit="cover"
          className="opacity-60" // Atur opasitas foto di sini
        />
        */}
      </div>

      {/* ========================================================================
        KONTEN UTAMA (Berada di atas latar belakang)
        ========================================================================
      */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 py-12 md:px-16 md:py-20">
        {/* 1. Header & Navigasi */}
        <header className="flex justify-between items-center mb-24">
          <div className="text-2xl font-extrabold">Folioblox</div>
          <nav className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-orange-200">
              Home
            </a>
            <a href="#" className="hover:text-orange-200">
              About
            </a>
            <a href="#" className="hover:text-orange-200">
              Projects
            </a>
            <button className="bg-white text-black px-6 py-2.5 rounded-full flex items-center gap-2.5 text-xs font-bold transition-transform hover:scale-105">
              Get in touch
              <span className="bg-orange-600 w-5 h-5 rounded-full text-white flex items-center justify-center text-xs">→</span>
            </button>
          </nav>
        </header>

        {/* 2. Judul Besar Hero */}
        <div className="flex-grow flex items-center mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div>
              <p className="text-lg mb-2.5">Hey, I'm a</p>
              <h1 className="text-7xl md:text-9xl font-extrabold leading-tight tracking-tight">
                Creative
                <br />
                Director
              </h1>
            </div>
            <div className="flex items-center md:pl-20">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-100 max-w-xl">Great design should feel invisible. From logo to language, I build brands that connect and convert.</p>
            </div>
          </div>
        </div>

        {/* 3. Bagian Statistik */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-white/20 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="font-mono text-2xl text-orange-200 mb-6">{stat.number}</span>
              {/* Placeholder ikon lingkaran putih di tengah */}
              <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center mb-6">{/* Ikon bisa diletakkan di sini */}</div>
              <p className="text-base font-semibold max-w-[150px]">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* 4. Bagian Klien */}
        <div className="border-t border-white/20 pt-16 text-center">
          <p className="text-gray-200 mb-10 text-sm">Trusted by Brands I've Helped Shape</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">{/* Placeholder ikon logo klien */}</div>
                <span className="text-xl text-gray-100 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
