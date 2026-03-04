import Image from "next/image";
import NavBar from "./components/NavBar";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SkillsTicker from "./components/SkillsTicker";
import AboutSection from "./components/AboutSection";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Done" },
  { value: "Next.js", label: "Core Stack" },
  { value: "A", label: "Grade Avg" },
];

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 1 — HERO                          */}
      {/* ══════════════════════════════════════════ */}
      <section id="home" className="min-h-screen relative flex flex-col font-sans bg-[#f5f5f0]">
        {/* Logo — absolute di hero, tidak ikut saat scroll */}
        <div className="absolute top-0 left-0 z-40 px-6 py-6 md:px-12 md:py-8">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black rounded-full" />
            <span className="font-bold tracking-widest text-sm">MILAN.DEV</span>
          </a>
        </div>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* LEFT */}
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
            <a href="#contact" className="bg-black text-white w-fit px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              CONTACT ME <span>→</span>
            </a>
          </div>

          {/* CENTER — Photo */}
          <div className="md:col-span-6 relative z-10 order-1 md:order-2 mb-10 flex justify-center">
            <div className="relative w-[75%] h-full min-h-[500px]">
              <div className="absolute inset-0 bg-[#c6c6c2] rounded-b-[50%] transform translate-y-2 z-0" />
              <div className="relative w-full h-full rounded-b-[50%] overflow-hidden z-10">
                <Image src="/image/IMG_2570.png" alt="Milan Profile" fill className="object-cover object-center grayscale-50 scale-140 hover:scale-150 transition-transform duration-700" style={{ objectPosition: "50% 35%" }} priority />
              </div>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div className="md:col-span-3 relative z-20 flex flex-col justify-center gap-12 order-3 px-6 md:pl-20 md:pr-12 pt-6 md:pt-28 pb-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-xs uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <SkillsTicker />
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 2 — PROJECTS                      */}
      {/* ══════════════════════════════════════════ */}
      <section id="projects">
        <ProjectsCarousel />
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 3 — ABOUT                         */}
      {/* ══════════════════════════════════════════ */}
      <AboutSection />

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 4 — CONTACT                       */}
      {/* ══════════════════════════════════════════ */}
      <section id="contact" className="font-sans">
        {/* ── Things I Care About ── */}
        <div className="bg-[#f5f5f0] py-20 px-6 md:px-16 border-b border-gray-200">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:w-1/3">
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">— Beyond Code</p>
              <h2 className="text-4xl font-extrabold leading-tight">
                Things I <br />
                <span className="font-serif italic font-normal text-gray-500">Care About</span>
              </h2>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-4">
              {["Open Source", "UI/UX Design", "Data Science", "Smart City", "Photography", "Coffee & Code"].map((label) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default group">
                  <span className="text-xs text-gray-400 group-hover:text-gray-300">◎</span>
                  <span className="text-sm font-bold tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-black text-white py-15 px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">— Let's Build Something</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Have a project in <br />
            <span className="font-serif italic font-normal text-gray-400">mind?</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-12 leading-relaxed">I'm open to freelance projects, collaborations, and internship opportunities. Let's talk about what we can build together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:milan@example.com" className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition">
              EMAIL ME →
            </a>
            <a href="#projects" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/5 transition">
              VIEW PROJECTS
            </a>
          </div>
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-white rounded-full" />
              <span className="font-bold tracking-widest text-sm">MILAN.DEV</span>
            </div>
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Milan Andi. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="https://github.com" target="_blank" className="hover:text-white transition">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
