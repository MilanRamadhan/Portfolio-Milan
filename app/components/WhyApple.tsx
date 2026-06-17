"use client";

import SectionReveal from "./SectionReveal";
import { Sparkles, BookOpen, HandHelping, Eye } from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "What I Want to Learn",
    content:
      "I want to learn how to think like a product designer who codes. Design thinking, Swift and iOS development, collaborative product building, accessibility-first design — these aren't just skills. They're a way of seeing the world through the eyes of the people you're building for.",
  },
  {
    icon: HandHelping,
    title: "What I Will Contribute",
    content:
      "I bring leadership experience from managing 100+ students, a community-first mindset shaped by outreach programs, an interdisciplinary perspective from videography and design, and technical depth in AI and full-stack development. I don't just want to learn — I want to make the cohort stronger.",
  },
  {
    icon: Eye,
    title: "My Long-Term Vision",
    content:
      "I want to bring world-class product thinking back to Banda Aceh and Indonesia. I see a future where Acehnese developers aren't just consumers of global technology — they're creators of it. Apple Developer Academy is where I learn to build at that level.",
  },
];

export default function WhyApple() {
  return (
    <section id="why-apple" className="py-24 md:py-32 bg-[#1D1D1F]">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0071E3]" />
              </div>
              <p className="text-[#0071E3] text-sm font-semibold tracking-wide">
                Why Apple Developer Academy
              </p>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white tracking-tight leading-tight mb-6 max-w-[700px]">
              I want to learn how to build technology that{" "}
              <span className="text-[#0071E3]">disappears</span> into
              people&apos;s lives.
            </h2>
          </SectionReveal>

          {/* Main motivation text */}
          <SectionReveal delay={0.15}>
            <div className="max-w-[640px] mb-16">
              <p className="text-white/60 text-lg leading-[1.8] mb-6">
                Technology so well-designed that it just feels natural. That&apos;s
                what drew me to Apple&apos;s philosophy — the belief that the
                best interface is the one you never notice.
              </p>
              <p className="text-white/60 text-lg leading-[1.8] mb-6">
                I&apos;ve taught myself to code. I&apos;ve led organizations. I&apos;ve
                built projects that serve real people. But I know there&apos;s a
                gap between building functional software and creating
                experiences that truly delight.
              </p>
              <p className="text-white/60 text-lg leading-[1.8]">
                Apple Developer Academy is where I close that gap. It&apos;s
                where I learn to combine empathy with engineering, design with
                code, and ambition with craft.
              </p>
            </div>
          </SectionReveal>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.1 + 0.2}>
                <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#0071E3]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-[1.7] flex-1">
                    {item.content}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Closing quote */}
          <SectionReveal delay={0.4}>
            <div className="mt-16 pt-12 border-t border-white/[0.06]">
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl font-semibold text-white leading-snug tracking-tight max-w-[600px] mx-auto mb-4">
                  &ldquo;The people who are crazy enough to think they can
                  change the world are the ones who do.&rdquo;
                </p>
                <cite className="text-sm text-white/30 font-medium not-italic">
                  — Steve Jobs
                </cite>
              </blockquote>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
