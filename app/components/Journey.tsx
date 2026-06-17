"use client";

import SectionReveal from "./SectionReveal";
import {
  GraduationCap,
  BookOpen,
  Palette,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Started Informatics at Universitas Syiah Kuala",
    description:
      "Chose to study not just code, but how systems shape people's lives. Entered FMIPA USK with a curiosity about the intersection of technology and human experience.",
    growth:
      "Discovered that computer science is fundamentally about solving human problems, not just writing algorithms.",
    icon: GraduationCap,
    tag: "Education",
  },
  {
    year: "2024",
    title: "Self-taught through Online Platforms",
    description:
      "Completed certifications in Responsive Web Design, JavaScript, and Data Structures through freeCodeCamp and self-paced learning platforms. Built projects outside the classroom.",
    growth:
      "Realized the best learning happens when you're building something real — for someone real.",
    icon: BookOpen,
    tag: "Learning",
  },
  {
    year: "2024–2025",
    title: "BEM FMIPA USK — Videography & Design",
    description:
      "Joined the Student Executive Board's Videography & Design division. Created visual content for faculty-level events, campaigns, and publications.",
    growth:
      "Learned to communicate ideas visually, not just logically. Design thinking became part of how I approach every problem.",
    icon: Palette,
    tag: "Creative",
  },
  {
    year: "2025–2026",
    title: "HMIF USK — Vice Head, Social Community",
    description:
      "Led the Social Community department at the Informatics Student Association. Coordinated outreach programs connecting students with the wider community.",
    growth:
      "Discovered that technology alone doesn't create change — communities do. People need connection, not just solutions.",
    icon: Users,
    tag: "Leadership",
  },
  {
    year: "2026–2027",
    title: "HMIF USK — Vice Chairman I",
    description:
      "Elected Vice Chairman I of the Informatics Student Association. Overseeing organizational strategy, inter-department coordination, and representing 100+ students.",
    growth:
      "Leading taught me that listening matters more than directing. The best ideas come from creating space for others to contribute.",
    icon: Award,
    tag: "Leadership",
  },
  {
    year: "2026",
    title: "IBM SkillsBuild AI Scholarship",
    description:
      "Selected as a recipient of the fully-funded AI training scholarship through Pijak — a collaboration between Dicoding and IBM SkillsBuild.",
    growth:
      "AI fascinated me not for its power, but for its potential to serve people who need it most.",
    icon: Sparkles,
    tag: "Achievement",
  },
];

const tagColors: Record<string, string> = {
  Education: "bg-[#E8F4FD] text-[#0071E3]",
  Learning: "bg-[#E5F6ED] text-[#1A7F37]",
  Creative: "bg-[#F5EDFC] text-[#7C3AED]",
  Leadership: "bg-[#FEF3E2] text-[#C2410C]",
  Achievement: "bg-[#FFF1F2] text-[#BE123C]",
};

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
              My Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              Every step taught me something new.
            </h2>
            <p className="text-[#6E6E73] text-lg max-w-[560px] leading-relaxed">
              About technology, about people, and about myself. Here&apos;s the
              path that brought me here.
            </p>
          </SectionReveal>

          {/* Timeline */}
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] md:left-[27px] top-2 bottom-2 w-px bg-[#E8E8ED]" />

            <div className="space-y-0">
              {milestones.map((item, index) => (
                <SectionReveal key={index} delay={index * 0.08}>
                  <div className="relative flex gap-6 md:gap-8 group pb-12 last:pb-0">
                    {/* Timeline dot & icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-2xl bg-[#F5F5F7] group-hover:bg-[#E8F4FD] border border-[#E8E8ED] group-hover:border-[#0071E3]/20 flex items-center justify-center transition-all duration-300">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#86868B] group-hover:text-[#0071E3] transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-[#86868B] font-mono">
                          {item.year}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            tagColors[item.tag] || "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#1D1D1F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#6E6E73] text-[15px] leading-relaxed mb-3">
                        {item.description}
                      </p>
                      {/* Growth quote */}
                      <div className="border-l-2 border-[#0071E3]/30 pl-4">
                        <p className="text-[#0071E3] text-sm font-medium italic leading-relaxed">
                          &ldquo;{item.growth}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
