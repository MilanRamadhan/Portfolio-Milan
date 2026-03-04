"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const techCategories = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    note: "85–90% proficiency",
  },
  {
    label: "Backend",
    items: ["Laravel / PHP", "Node.js", "Python", "REST API"],
    note: "75–80% proficiency",
  },
  {
    label: "Mobile",
    items: ["Kotlin", "Flutter / Dart", "Firebase", "Android"],
    note: "65–70% proficiency",
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Figma", "PostgreSQL", "MySQL"],
    note: "Daily workflow",
  },
];

const timeline = [
  {
    year: "2023 — Now",
    title: "Informatics Student",
    place: "FMIPA, Universitas Syiah Kuala",
    desc: "Studying Software Engineering, Machine Learning & Web Development at USK's Faculty of Mathematics and Natural Sciences.",
    type: "edu",
    tag: "EDU",
    index: "01",
  },
  {
    year: "2024",
    title: "Self-taught Developer",
    place: "freeCodeCamp & Online Platforms",
    desc: "Completed certifications in Responsive Web Design, JavaScript Algorithms, and Data Structures through freeCodeCamp and self-paced platforms.",
    type: "edu",
    tag: "LEARN",
    index: "02",
  },
  {
    year: "2024 — 2025",
    title: "BEM FMIPA USK",
    place: "Badan Eksekutif Mahasiswa FMIPA",
    desc: "Member of the Student Executive Board, contributing to the Videography & Design division for faculty-level events and publications.",
    type: "work",
    tag: "ORG",
    index: "03",
  },
  {
    year: "2025 — 2026",
    title: "HMIF USK — Vice Head",
    place: "Dept. Sosial Masyarakat",
    desc: "Vice Head of the Social Community department at the Informatics Student Association — coordinating outreach and welfare programs.",
    type: "work",
    tag: "ORG",
    index: "04",
  },
  {
    year: "2026 — 2027",
    title: "HMIF USK — Vice Chairman I",
    place: "Himpunan Mahasiswa Informatika",
    desc: "Elected Vice Chairman I — overseeing organizational strategy, inter-department coordination, and student representation at campus level.",
    type: "award",
    tag: "LEAD",
    index: "05",
  },
  {
    year: "2026",
    title: "IBM SkillsBuild AI Scholarship",
    place: "Pijak × Dicoding × IBM SkillsBuild",
    desc: "Recipient of a fully-funded AI training scholarship through the Pijak program — a collaboration between Dicoding and IBM SkillsBuild.",
    type: "award",
    tag: "AWARD",
    index: "06",
  },
];

const PANELS = [
  { bg: "dark", label: "Who I Am" },
  { bg: "light", label: "Tech Stack" },
  { bg: "dark", label: "Journey" },
] as const;

const AUTO_INTERVAL = 5000; // ms per panel
const PAUSE_AFTER_INTERACT = 10000; // ms to pause after manual interaction

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activePanelRef = useRef(0);

  // Keep ref in sync with state for use inside interval callback
  useEffect(() => {
    activePanelRef.current = activePanel;
  }, [activePanel]);

  // Sync activePanel from scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActivePanel(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver — track if section is on screen
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-advance interval
  useEffect(() => {
    if (!isVisible || isPaused) return;
    const id = setInterval(() => {
      const next = (activePanelRef.current + 1) % PANELS.length;
      const el = scrollRef.current;
      if (el) el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [isVisible, isPaused]);

  const scrollToPanel = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    // Pause auto-advance after manual interaction
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), PAUSE_AFTER_INTERACT);
  };

  const isDark = PANELS[activePanel].bg === "dark";

  return (
    <section ref={sectionRef} id="about" className="font-sans relative h-screen overflow-hidden">
      {/* ═══ Horizontal snap-scroll container ═══ */}
      <div ref={scrollRef} className="flex h-full overflow-x-scroll snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PANEL 1 — Who I Am  (dark)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="snap-start flex-shrink-0 w-screen h-full bg-[#0d1117] text-white relative overflow-hidden">
          {/* Background watermark text */}
          <span className="absolute right-[-0.15em] bottom-[-0.05em] text-[22vw] font-extrabold leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter">MILAN</span>

          {/* 12-col grid */}
          <div className="relative z-10 h-full grid grid-cols-12 gap-0">
            {/* Left meta column */}
            <div className="col-span-1 border-r border-white/5 flex flex-col justify-between py-10 px-3">
              <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase [writing-mode:vertical-lr] rotate-180">About Me</span>
              <span className="text-[10px] text-white/20 font-mono">01 / 03</span>
            </div>

            {/* Photo */}
            <div className="col-span-4 relative overflow-hidden">
              <Image src="/image/DSC_3399.png" alt="Milan" fill className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" style={{ objectPosition: "50% 20%" }} />
              {/* gradient overlay */}
              {/* right-side fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/0 via-[#0d1117]/10 to-[#0d1117]/60" />
              {/* top fade — soft blur transition */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d1117] via-[#0d1117]/60 to-transparent" />
              {/* location badge */}
              <div className="absolute bottom-8 left-6 bg-white/5 backdrop-blur border border-white/10 text-white px-4 py-2.5 rounded-xl">
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Based in</p>
                <p className="font-bold text-sm">Banda Aceh, Indonesia 🇮🇩</p>
              </div>
            </div>

            {/* Bio content */}
            <div className="col-span-7 flex flex-col justify-center px-10 md:px-16 py-12 overflow-y-auto">
              <p className="text-xs font-bold tracking-[0.35em] text-white/30 uppercase mb-6">— Muhammad Milan Ramadhan Mulizar</p>
              <h2 className="text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight mb-8">
                Software
                <br />
                <span className="font-serif italic font-normal text-white/50">Engineer &</span>
                <br />
                Student.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-4 max-w-lg">
                Final-year Informatics student at <span className="text-white font-semibold">Universitas Syiah Kuala</span> turning complex problems into clean, functional software.
              </p>
              <p className="text-white/40 text-sm leading-relaxed max-w-lg mb-10">Full-stack web development, mobile apps, and machine learning. I write code for humans first — machines second.</p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden">
                {[
                  { val: "10+", label: "Projects" },
                  { val: "3+", label: "Yrs Coding" },
                  { val: "A", label: "GPA Avg" },
                ].map((s, i) => (
                  <div key={s.label} className={`px-6 py-5 ${i < 2 ? "border-r border-white/10" : ""}`}>
                    <p className="text-3xl font-extrabold text-white">{s.val}</p>
                    <p className="text-[11px] text-white/30 uppercase tracking-widest mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PANEL 2 — Tech Stack  (light)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="snap-start flex-shrink-0 w-screen h-full bg-[#f5f5f0] overflow-hidden relative">
          {/* Background number */}
          <span className="absolute right-[-0.1em] bottom-[-0.05em] text-[22vw] font-extrabold leading-none text-black/[0.04] select-none pointer-events-none tracking-tighter">CODE</span>

          <div className="relative z-10 h-full grid grid-cols-12">
            {/* Left meta */}
            <div className="col-span-1 border-r border-black/5 flex flex-col justify-between py-10 px-3">
              <span className="text-[10px] tracking-[0.3em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">Tech Stack</span>
              <span className="text-[10px] text-black/20 font-mono">02 / 03</span>
            </div>

            {/* Content */}
            <div className="col-span-11 flex flex-col justify-center px-8 md:px-16 py-12 overflow-y-auto">
              <p className="text-xs font-bold tracking-[0.35em] text-black/30 uppercase mb-3">— What I Build With</p>
              <h2 className="text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-gray-900 mb-10">
                Tech <span className="font-serif italic font-normal text-gray-400">Stack</span>
              </h2>

              {/* 4 category cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techCategories.map((cat) => (
                  <div key={cat.label} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase mb-3">{cat.label}</p>
                    <div className="flex flex-col gap-2 mb-4">
                      {cat.items.map((item) => (
                        <span key={item} className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 border-t border-gray-100 pt-3">{cat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PANEL 3 — Journey  (dark)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="snap-start flex-shrink-0 w-screen h-full bg-[#0d1117] text-white overflow-hidden relative">
          <span className="absolute right-[-0.1em] bottom-[-0.05em] text-[22vw] font-extrabold leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter">PATH</span>

          <div className="relative z-10 h-full grid grid-cols-12">
            {/* Left meta */}
            <div className="col-span-1 border-r border-white/5 flex flex-col justify-between py-10 px-3">
              <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase [writing-mode:vertical-lr] rotate-180">Journey</span>
              <span className="text-[10px] text-white/20 font-mono">03 / 03</span>
            </div>

            {/* Content */}
            <div className="col-span-11 flex flex-col justify-center px-8 md:px-16 py-12 overflow-y-auto">
              <p className="text-xs font-bold tracking-[0.35em] text-white/30 uppercase mb-3">— Where I've Been</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-[0.95] tracking-tight mb-6">
                Experience & <span className="font-serif italic font-normal text-white/40">Education</span>
              </h2>

              {/* Timeline cards — 2×3 grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeline.map((item) => {
                  const isInverted = item.type === "award";
                  return (
                    <div
                      key={item.index}
                      className={`rounded-xl p-4 border flex flex-col gap-2 transition-all duration-300 hover:-translate-y-0.5 group ${
                        isInverted ? "bg-white text-black border-white shadow-lg" : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]"
                      }`}
                    >
                      {/* Top row: index + tag */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-mono tracking-widest ${isInverted ? "text-black/35" : "text-white/20"}`}>{item.index}</span>
                        <span className={`text-[8px] font-extrabold tracking-[0.2em] px-1.5 py-0.5 rounded ${isInverted ? "bg-black text-white" : item.type === "work" ? "bg-white/10 text-white/50" : "bg-indigo-400/10 text-indigo-300/80"}`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Year */}
                      <p className={`text-[9px] font-bold tracking-[0.25em] uppercase ${isInverted ? "text-black/35" : "text-white/22"}`}>{item.year}</p>

                      {/* Title + place */}
                      <div>
                        <h3 className={`text-[13px] font-extrabold leading-tight ${isInverted ? "text-black" : "text-white"}`}>{item.title}</h3>
                        <p className={`text-[10px] font-semibold mt-0.5 ${isInverted ? "text-black/45" : "text-white/35"}`}>{item.place}</p>
                      </div>

                      {/* Desc */}
                      <p className={`text-[10px] leading-snug mt-auto pt-1 border-t ${isInverted ? "text-black/55 border-black/10" : "text-white/30 border-white/5"}`}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Bottom navigation bar ═══ */}
      <div className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between px-6 md:px-14 py-4">
        {/* Prev button */}
        <button
          onClick={() => scrollToPanel(Math.max(0, activePanel - 1))}
          disabled={activePanel === 0}
          aria-label="Previous panel"
          className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none ${
            isDark ? "text-white/40 hover:text-white" : "text-black/30 hover:text-black"
          }`}
        >
          <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-sm ${isDark ? "border-white/15 hover:bg-white/10" : "border-black/10 hover:bg-black/5"}`}>←</span>
          Prev
        </button>

        {/* Center — label + pills */}
        <div className="flex flex-col items-center gap-2">
          <span className={`text-[10px] font-extrabold tracking-[0.35em] uppercase transition-colors duration-300 ${isDark ? "text-white/40" : "text-black/30"}`}>{PANELS[activePanel].label}</span>
          <div className="flex items-center gap-2">
            {PANELS.map((panel, i) => (
              <button
                key={i}
                onClick={() => scrollToPanel(i)}
                aria-label={`Go to ${panel.label}`}
                className={`rounded-full transition-all duration-300 ${activePanel === i ? (isDark ? "w-10 h-2 bg-white" : "w-10 h-2 bg-black") : isDark ? "w-4 h-2 bg-white/20 hover:bg-white/35" : "w-4 h-2 bg-black/15 hover:bg-black/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={() => scrollToPanel(Math.min(PANELS.length - 1, activePanel + 1))}
          disabled={activePanel === PANELS.length - 1}
          aria-label="Next panel"
          className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none ${
            isDark ? "text-white/40 hover:text-white" : "text-black/30 hover:text-black"
          }`}
        >
          Next
          <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-sm ${isDark ? "border-white/15 hover:bg-white/10" : "border-black/10 hover:bg-black/5"}`}>→</span>
        </button>
      </div>
    </section>
  );
}
