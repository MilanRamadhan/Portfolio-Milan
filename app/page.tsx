import Image from "next/image";
import NavBar from "./components/NavBar";
import ProjectsCarousel from "./components/ProjectsCarousel";
import SkillsTicker from "./components/SkillsTicker";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Done" },
  { value: "Next.js", label: "Core Stack" },
  { value: "A", label: "Grade Avg" },
];

const skills = [
  { name: "Next.js / React", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python / ML", level: 75 },
  { name: "Laravel / PHP", level: 80 },
  { name: "Kotlin / Android", level: 70 },
  { name: "Flutter / Dart", level: 65 },
];

const timeline = [
  {
    year: "2022 — Now",
    title: "Informatics Student",
    place: "Universitas Syiah Kuala, Banda Aceh",
    desc: "Focusing on Software Engineering, Machine Learning, and Web Development. Active in campus tech communities.",
    type: "edu",
  },
  {
    year: "2023",
    title: "Frontend Developer Intern",
    place: "PT. Smart City Aceh",
    desc: "Built civic reporting dashboard used by Banda Aceh government for real-time issue tracking.",
    type: "work",
  },
  {
    year: "2023",
    title: "Winner — Hackathon Aceh",
    place: "DigiAceh Competition",
    desc: "Built 'Climate Action' — an eco-community app with gamification for recycling and environmental events.",
    type: "award",
  },
  {
    year: "2024",
    title: "Freelance Full-Stack Developer",
    place: "Self-employed",
    desc: "Delivered 6+ web projects including booking systems, portals, and e-commerce platforms.",
    type: "work",
  },
];

const interests = ["Open Source", "UI/UX Design", "Data Science", "Smart City", "Photography", "Coffee & Code"];

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
                <Image src="/image/IMG_2570.png" alt="Milan Profile" fill className="object-cover object-center scale-140 hover:scale-150 transition-transform duration-700" style={{ objectPosition: "50% 35%" }} priority />
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
      <section id="about" className="font-sans">
        {/* Bio Split */}
        <div className="bg-[#f5f5f0] grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[60vh] md:h-[90vh] overflow-hidden">
            <Image src="/image/IMG_2570.png" alt="Milan" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f5f5f0]/20" />
            <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-sm text-white px-5 py-3 rounded-2xl">
              <p className="text-xs text-gray-400 uppercase tracking-widest">Based in</p>
              <p className="font-bold text-sm">Banda Aceh, Indonesia 🇮🇩</p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-8 md:px-16 py-16">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">— About Me</p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-6">
              Muhammad Milan <br />
              <span className="font-serif italic font-normal text-gray-500">Ramadhan Mulizar</span>
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-md">
              I'm a final-year Informatics student at <strong>Universitas Syiah Kuala</strong> with a passion for turning complex problems into clean, functional software.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-8">
              My work spans full-stack web development, mobile applications, and machine learning. I believe great code is both performant and readable — written for humans first, machines second.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              {[
                { val: "10+", label: "Projects Shipped" },
                { val: "3+", label: "Years Coding" },
                { val: "A", label: "GPA Average" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-gray-900">{s.val}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-[#0d1117] text-white py-24 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-3">— What I Work With</p>
                <h2 className="text-4xl md:text-5xl font-extrabold">
                  Tech <span className="font-serif italic font-normal text-gray-400">Stack</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Tools & technologies I use daily to build production-ready applications.</p>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-12">
              {["TypeScript", "Node.js", "PostgreSQL", "MySQL", "Firebase", "Docker", "Git", "Figma", "REST API", "IoT"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="py-24 px-6 md:px-16 bg-[#f5f5f0]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">— Journey</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight">
              Experience & <span className="font-serif italic font-normal text-gray-500">Education</span>
            </h2>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-[15px] h-[15px] rounded-full border-2 border-gray-900" style={{ backgroundColor: item.type === "award" ? "#000" : "#f5f5f0" }} />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{item.year}</span>
                        {item.type === "award" && <span className="text-[10px] font-bold px-2 py-0.5 bg-black text-white rounded-full w-fit">🏆 AWARD</span>}
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-0.5">{item.title}</h3>
                      <p className="text-sm font-semibold text-gray-500 mb-2">{item.place}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="py-20 px-6 md:px-16 border-t border-gray-200 bg-[#f5f5f0]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:w-1/3">
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">— Beyond Code</p>
              <h2 className="text-4xl font-extrabold leading-tight">
                Things I <br />
                <span className="font-serif italic font-normal text-gray-500">Care About</span>
              </h2>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-4">
              {interests.map((label) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default group">
                  <span className="text-xs text-gray-400 group-hover:text-gray-300">◎</span>
                  <span className="text-sm font-bold tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ */}
      {/* SECTION 4 — CONTACT                       */}
      {/* ══════════════════════════════════════════ */}
      <section id="contact" className="bg-black text-white py-15 px-6 text-center font-sans">
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
      </section>
    </>
  );
}
