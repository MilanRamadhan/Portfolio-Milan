"use client";

import SectionReveal from "./SectionReveal";
import { Shield, Users, Palette, ArrowUpRight } from "lucide-react";

const roles = [
  {
    icon: Shield,
    role: "Vice Chairman I",
    organization: "HMIF USK",
    period: "2026 – 2027",
    description:
      "Leading the Informatics Student Association as Vice Chairman I. Overseeing organizational strategy, inter-department coordination, and student representation across campus-level decisions.",
    responsibilities: [
      "Strategic planning for 100+ member organization",
      "Inter-department coordination and conflict resolution",
      "Student representation in faculty-level meetings",
      "Program development and quality assurance",
    ],
    achievement:
      "Building a culture of collaboration where every department feels heard and valued. The best leadership doesn't direct — it creates space.",
    lesson:
      "Leading people is fundamentally different from managing tasks. You have to earn trust through consistency, transparency, and genuine care for each person's growth.",
    current: true,
  },
  {
    icon: Users,
    role: "Vice Head, Social Community Department",
    organization: "HMIF USK",
    period: "2025 – 2026",
    description:
      "Led the Social Community department, designing and executing outreach programs that connected informatics students with the broader community.",
    responsibilities: [
      "Community outreach program design",
      "Social welfare initiatives coordination",
      "Cross-organization collaboration",
      "Event planning and volunteer management",
    ],
    achievement:
      "Organized programs that bridged the gap between tech students and local community needs, showing that informatics can serve beyond the screen.",
    lesson:
      "Technology alone doesn't create change — communities do. The most impactful programs happen when technologists step outside their comfort zones.",
    current: false,
  },
  {
    icon: Palette,
    role: "Staff, Videography & Design Division",
    organization: "BEM FMIPA USK",
    period: "2024 – 2025",
    description:
      "Created visual content for the Faculty of Mathematics and Natural Sciences Student Executive Board. Produced event documentation, promotional campaigns, and publication designs.",
    responsibilities: [
      "Event videography and photography",
      "Social media content design",
      "Campaign visual branding",
      "Faculty publication design support",
    ],
    achievement:
      "Developed an eye for visual storytelling that now informs every interface I design. Understanding composition and narrative changed how I think about user experience.",
    lesson:
      "Design is not decoration — it's communication. Every pixel, every frame, every transition should tell part of the story.",
    current: false,
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
              Leadership & Community
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              Technology is a team sport.
            </h2>
            <p className="text-[#6E6E73] text-lg max-w-[560px] leading-relaxed">
              Here&apos;s how I&apos;ve learned to lead, listen, and build
              together.
            </p>
          </SectionReveal>

          {/* Role cards */}
          <div className="mt-16 space-y-6">
            {roles.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 overflow-hidden">
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#0071E3]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-[#1D1D1F]">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E5F6ED] text-[#1A7F37] uppercase tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#6E6E73]">
                          {item.organization} · {item.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#6E6E73] text-[15px] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {item.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#6E6E73]">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Achievement & Lesson */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#E8E8ED]">
                      <div>
                        <p className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider mb-2">
                          Key Achievement
                        </p>
                        <p className="text-sm text-[#1D1D1F] leading-relaxed">
                          {item.achievement}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider mb-2">
                          What I Learned
                        </p>
                        <p className="text-sm text-[#0071E3] leading-relaxed italic">
                          &ldquo;{item.lesson}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
