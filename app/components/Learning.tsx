"use client";

import SectionReveal from "./SectionReveal";
import {
  Award,
  Brain,
  Code2,
  GraduationCap,
  Rocket,
  TrendingUp,
} from "lucide-react";

const learningJourney = [
  {
    icon: Brain,
    title: "IBM SkillsBuild AI Scholarship",
    provider: "Pijak × Dicoding × IBM SkillsBuild",
    year: "2026",
    description:
      "Selected as a recipient of a fully-funded AI training scholarship. Studying machine learning fundamentals, data science, and AI ethics through a structured program combining theory with hands-on projects.",
    insight:
      "AI ethics isn't just an academic topic — it's a responsibility every builder carries. The technology we create reflects the values we hold.",
    highlight: true,
  },
  {
    icon: GraduationCap,
    title: "Dicoding Learning Paths",
    provider: "Dicoding Indonesia",
    year: "2024 – Present",
    description:
      "Actively pursuing multiple learning paths on Dicoding, Indonesia's premier developer education platform. Covering web development, AI foundations, and software engineering best practices.",
    insight:
      "Structured learning gave me the discipline to learn consistently, but the real breakthroughs happened when I applied concepts to real projects.",
    highlight: false,
  },
  {
    icon: Code2,
    title: "freeCodeCamp Certifications",
    provider: "freeCodeCamp",
    year: "2024",
    description:
      "Completed certifications in Responsive Web Design and JavaScript Algorithms & Data Structures. Built portfolio projects that taught me to think systematically about code architecture.",
    insight:
      "Self-paced learning taught me that consistency beats intensity. Thirty minutes a day builds more skill than weekend marathons.",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "AI & Machine Learning Exploration",
    provider: "Self-directed",
    year: "Ongoing",
    description:
      "Exploring AI/ML concepts through personal projects, online courses, and community forums. Fascinated by how artificial intelligence can solve problems in healthcare, education, and sustainability.",
    insight:
      "The most exciting AI applications I've found aren't the flashy demos — they're the ones that quietly solve problems for people who need help the most.",
    highlight: false,
  },
];

const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Kotlin",
      "PHP",
      "Dart",
      "Next.js",
      "React",
      "Express.js",
      "Laravel",
      "Flutter",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "Figma",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    category: "Interests",
    items: [
      "AI/ML",
      "Mobile Development",
      "Product Design",
      "UX Research",
      "Data Visualization",
      "Accessibility",
    ],
  },
];

export default function Learning() {
  return (
    <section id="learning" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
              Learning & Exploration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              I don&apos;t wait for classrooms.
            </h2>
            <p className="text-[#6E6E73] text-lg max-w-[560px] leading-relaxed">
              I build, I break things, I learn. Education is a lifelong practice,
              not a destination.
            </p>
          </SectionReveal>

          {/* Learning cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningJourney.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.08}>
                <div
                  className={`rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:shadow-lg hover:shadow-black/[0.03] h-full flex flex-col ${
                    item.highlight
                      ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                      : "bg-[#F5F5F7] border-[#E8E8ED] hover:border-[#D2D2D7]"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.highlight
                          ? "bg-[#0071E3]"
                          : "bg-white border border-[#E8E8ED]"
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          item.highlight ? "text-white" : "text-[#0071E3]"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold mb-0.5 ${
                          item.highlight ? "text-white" : "text-[#1D1D1F]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs font-medium ${
                          item.highlight
                            ? "text-white/50"
                            : "text-[#86868B]"
                        }`}
                      >
                        {item.provider} · {item.year}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-4 flex-1 ${
                      item.highlight ? "text-white/70" : "text-[#6E6E73]"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`border-t pt-4 ${
                      item.highlight
                        ? "border-white/10"
                        : "border-[#E8E8ED]"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <TrendingUp
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                          item.highlight
                            ? "text-[#0071E3]"
                            : "text-[#0071E3]"
                        }`}
                      />
                      <p
                        className={`text-sm italic leading-relaxed ${
                          item.highlight
                            ? "text-white/60"
                            : "text-[#6E6E73]"
                        }`}
                      >
                        &ldquo;{item.insight}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Skills overview */}
          <SectionReveal delay={0.2}>
            <div className="mt-16 bg-[#F5F5F7] rounded-2xl p-6 md:p-8 border border-[#E8E8ED]">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-[#0071E3]" />
                <h3 className="text-lg font-bold text-[#1D1D1F]">
                  Technical Skills
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category) => (
                  <div key={category.category}>
                    <p className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider mb-3">
                      {category.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="text-[12px] font-medium px-2.5 py-1 rounded-lg bg-white text-[#6E6E73] border border-[#E8E8ED]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
