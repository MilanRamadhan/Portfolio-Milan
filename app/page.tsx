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
              CONTACT ME
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
        <div className="relative bg-[#f5f5f0] py-20 px-6 md:px-16 border-b border-gray-200">
          {/* shadow bleed from dark About section above */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d1117]/25 via-[#0d1117]/6 to-transparent pointer-events-none" />
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
        <div className="bg-black text-white relative overflow-hidden">
          {/* Giant background text */}
          <span className="absolute right-[-0.05em] bottom-[-0.1em] text-[28vw] font-extrabold leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter">LET'S</span>

          {/* Main CTA */}
          <div className="relative z-10 px-8 md:px-20 pt-20 pb-16 max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.35em] text-white/30 uppercase mb-6">— Let's Build Something</p>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
              <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tight max-w-2xl">
                Have a project
                <br />
                <span className="font-serif italic font-normal text-white/40">in mind?</span>
              </h2>
              <div className="flex flex-col gap-4 mb-1 w-56">
                <a href="mailto:milanmulizar29@gmail.com" className="group flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:text-gray-500 transition-all duration-200 w-full">
                  EMAIL ME
                </a>
                <a href="#projects" className="flex items-center justify-center border border-white/15 text-white/60 px-8 py-4 rounded-full font-bold text-sm hover:border-white/40 hover:text-white transition-all duration-200 w-full">
                  VIEW PROJECTS
                </a>
              </div>
            </div>

            <p className="text-white/35 text-sm max-w-sm leading-relaxed border-l border-white/10 pl-5">Open to freelance projects, collaborations, and internship opportunities. Let's talk about what we can build together.</p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-10">
              {[
                {
                  href: "https://github.com/MilanRamadhan",
                  label: "GitHub",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/muhammad-milan-ramadhan-mulizar-839874314/",
                  label: "LinkedIn",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.instagram.com/milan_ramadhan/",
                  label: "Instagram",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.tiktok.com/@superrr294",
                  label: "TikTok",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:milanmulizar29@gmail.com",
                  label: "Email",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 text-white/40 flex items-center justify-center hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Footer bar */}
          <div className="relative z-10 border-t border-white/[0.07] px-8 md:px-20 py-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="font-extrabold tracking-[0.2em] text-sm">MILAN.DEV</span>
            </div>
            <p className="text-white/20 text-[11px] tracking-widest">© {new Date().getFullYear()} Muhammad Milan Ramadhan Mulizar</p>
            <div className="flex gap-7 text-[11px] font-bold tracking-widest text-white/30 uppercase">
              <a href="https://github.com/MilanRamadhan" target="_blank" className="hover:text-white transition-colors duration-200">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-milan-ramadhan-mulizar-839874314/" target="_blank" className="hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="https://www.tiktok.com/@milan_rmdn" target="_blank" className="hover:text-white transition-colors duration-200">
                TikTok
              </a>
              <a href="https://www.instagram.com/milan_ramadhan/" target="_blank" className="hover:text-white transition-colors duration-200">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
