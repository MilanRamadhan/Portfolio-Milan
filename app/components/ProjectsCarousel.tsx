"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "MilanoSport",
    category: "BOOKING SYSTEM",
    desc: "A sports venue reservation platform allowing users to check availability and book courts instantly.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    image: "/image/milanosport.png",
    accent: "#f59e0b",
  },
  {
    id: 2,
    title: "Sipapa Travel Times",
    category: "WEB PORTAL & BLOG",
    desc: "A digital travel news portal delivering curated destination guides, cultural insights, and tourism updates.",
    tech: ["WordPress", "PHP", "MySQL"],
    image: "/image/sipapatravel.png",
    accent: "#10b981",
  },
  {
    id: 3,
    title: "Aqua Save",
    category: "MOBILE APPS",
    desc: "IoT-integrated application for real-time water monitoring. Features daily usage analytics, sensor management, and conservation guides.",
    tech: ["Kotlin", "Firebase", "IoT"],
    image: "/image/aquasave.png",
    accent: "#3b82f6",
  },
  {
    id: 4,
    title: "Climate Action",
    category: "MOBILE APPS",
    desc: "An eco-community ecosystem connecting users with local environmental events and a waste-to-reward gamification system.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/image/climateaction.png",
    accent: "#8b5cf6",
  },
  {
    id: 5,
    title: "DevStore",
    category: "E-COMMERCE / SAAS",
    desc: "A secure marketplace for developer tools featuring escrow payments and milestone-based project releases.",
    tech: ["React", "Node.js", "Stripe"],
    image: "/image/devstore.png",
    accent: "#06b6d4",
  },
  {
    id: 6,
    title: "SILAPOR Banda Aceh",
    category: "PUBLIC SERVICE / SMART CITY",
    desc: "A civic engagement platform empowering citizens to report issues and track resolutions directly to the city government.",
    tech: ["Laravel", "Vue.js", "PostgreSQL"],
    image: "/image/silapor.png",
    accent: "#ef4444",
  },
];

export default function ProjectsCarousel() {
  const midIndex = Math.floor(projects.length / 2);
  const [activeIndex, setActiveIndex] = useState(midIndex);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll carousel to middle card on mount (only horizontal, no page jump)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[midIndex] as HTMLElement;
    if (card) {
      container.scrollLeft = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update active index on manual scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      Array.from(container.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const prev = () => goTo((activeIndex - 1 + projects.length) % projects.length);
  const next = () => goTo((activeIndex + 1) % projects.length);

  return (
    <section className="bg-[#0d1117] py-11 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-3">— What I've Built —</p>
        <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
          My <span className="font-serif italic font-normal text-gray-400">Projects</span>
        </h2>
      </div>

      {/* Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", paddingLeft: "max(24px, calc(50vw - 340px))", paddingRight: "max(24px, calc(50vw - 340px))" }}
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={project.id}
              onClick={() => goTo(index)}
              className="snap-center flex-shrink-0 w-[680px] max-w-[88vw] rounded-2xl overflow-hidden cursor-pointer border border-white/5"
              style={{
                opacity: isActive ? 1 : 0.45,
                transform: isActive ? "scale(1)" : "scale(0.96)",
                transition: "all 0.4s ease",
              }}
            >
              {/* Screenshot Preview */}
              <div className="relative w-full h-[340px] bg-gray-900 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover object-top transition-transform duration-700 hover:scale-105" />
                {/* Browser mockup bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#1e1e1e]/90 flex items-center px-4 gap-2 backdrop-blur-sm z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <div className="ml-3 flex-1 bg-white/10 rounded-full h-4 max-w-[200px] flex items-center px-3">
                    <span className="text-white/40 text-[9px] truncate">milan.dev/{project.title.toLowerCase().replace(/\s/g, "-")}</span>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black/25 border border-white/20 text-white/70 backdrop-blur-sm">{project.category}</div>
              </div>

              {/* Card Info */}
              <div className="bg-[#161b22] px-6 py-5 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-extrabold text-xl leading-tight mb-2 truncate">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-10 px-6">
        <button onClick={prev} className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center text-lg transition">
          ‹
        </button>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 28 : 8,
                backgroundColor: i === activeIndex ? projects[activeIndex].accent : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
        <button onClick={next} className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center text-lg transition">
          ›
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-gray-600 text-xs mt-4 tracking-widest">
        {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </p>
    </section>
  );
}
