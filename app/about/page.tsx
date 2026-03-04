import Image from "next/image";
import Link from "next/link";

const skills = [
  { name: "Next.js / React", level: 85, color: "#a3a3a3" },
  { name: "Tailwind CSS", level: 90, color: "#a3a3a3" },
  { name: "Python / ML", level: 75, color: "#a3a3a3" },
  { name: "Laravel / PHP", level: 80, color: "#a3a3a3" },
  { name: "Kotlin / Android", level: 70, color: "#a3a3a3" },
  { name: "Flutter / Dart", level: 65, color: "#a3a3a3" },
];

const timeline = [
  {
    year: "2023 — Now",
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

const interests = [
  { icon: "◎", label: "Open Source" },
  { icon: "◎", label: "UI/UX Design" },
  { icon: "◎", label: "Data Science" },
  { icon: "◎", label: "Smart City" },
  { icon: "◎", label: "Photography" },
  { icon: "◎", label: "Coffee & Code" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f0] font-sans min-h-screen">
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 md:px-12 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-gray-200/40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <span className="font-bold tracking-widest text-sm">MILAN.DEV</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-gray-500">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="text-black border-b-2 border-black pb-0.5">About</span>
          <Link href="/#projects" className="hover:text-black transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>
        <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition">
          CONTACT →
        </Link>
      </header>

      {/* ── HERO SPLIT ── */}
      <section className="pt-24 md:pt-0 min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* LEFT — Photo */}
        <div className="relative h-[50vh] md:h-screen overflow-hidden">
          <Image src="/image/IMG_2570.png" alt="Milan" fill className="object-cover object-center" priority />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f5f5f0]/30" />
          {/* Floating label */}
          <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-sm text-white px-5 py-3 rounded-2xl">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Based in</p>
            <p className="font-bold text-sm">Banda Aceh, Indonesia 🇮🇩</p>
          </div>
        </div>

        {/* RIGHT — Intro */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">— About Me</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-6">
            Milan <br />
            <span className="font-serif italic font-normal text-gray-500">Andi</span>
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-4 max-w-md">
            I'm a final-year Informatics student at <strong>Universitas Syiah Kuala</strong> with a passion for turning complex problems into clean, functional software.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-8">
            My work spans full-stack web development, mobile applications, and machine learning. I believe great code is both performant and readable — written for humans first, machines second.
          </p>

          {/* Quick Stats */}
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
      </section>

      {/* ── SKILLS ── */}
      <section className="bg-[#0d1117] text-white py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-3">— What I Work With</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
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
                  <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-12">
            {["TypeScript", "Node.js", "PostgreSQL", "MySQL", "Firebase", "Docker", "Git", "Figma", "REST API", "IoT"].map((t) => (
              <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6 md:px-16 bg-[#f5f5f0]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">— Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight">
            Experience & <span className="font-serif italic font-normal text-gray-500">Education</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8">
                  {/* Dot */}
                  <div className="flex-shrink-0 mt-1.5">
                    <div
                      className="w-[15px] h-[15px] rounded-full border-2 border-gray-900 bg-[#f5f5f0]"
                      style={{
                        backgroundColor: item.type === "award" ? "#000" : "#f5f5f0",
                      }}
                    />
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
      </section>

      {/* ── INTERESTS ── */}
      <section className="py-20 px-6 md:px-16 border-t border-gray-200 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
          <div className="md:w-1/3">
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3">— Beyond Code</p>
            <h2 className="text-4xl font-extrabold leading-tight">
              Things I <br />
              <span className="font-serif italic font-normal text-gray-500">Care About</span>
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-wrap gap-4">
            {interests.map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default group">
                <span className="text-xs text-gray-400 group-hover:text-gray-300">{item.icon}</span>
                <span className="text-sm font-bold tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">— Let's Build Something</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Have a project in <br />
          <span className="font-serif italic font-normal text-gray-400">mind?</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-10 leading-relaxed">I'm open to freelance projects, collaborations, and internship opportunities. Let's talk about what we can build together.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition">
            CONTACT ME →
          </Link>
          <Link href="/" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/5 transition">
            VIEW PROJECTS
          </Link>
        </div>
      </section>
    </main>
  );
}
