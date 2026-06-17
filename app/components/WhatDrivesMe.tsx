"use client";

import SectionReveal from "./SectionReveal";
import { Heart, Lightbulb, Compass, Sparkles } from "lucide-react";

const stories = [
  {
    icon: Compass,
    title: "How It Started",
    content:
      "Growing up in Banda Aceh, I witnessed firsthand how technology could bridge gaps — in healthcare access, in education, in community connection. I didn't start with code. I started with a question: how can things work better for the people around me? That curiosity led me to informatics, but the human side of that question has never left me.",
  },
  {
    icon: Lightbulb,
    title: "Why Problem-Solving Matters",
    content:
      "Every project I take on starts with a real person facing a real problem. When I built Klinik Sehat, it wasn't about the code — it was about patients who struggled with booking appointments. When I worked on Aqua Save, it was about families who wanted to understand their water usage. The code comes later. The understanding comes first.",
  },
  {
    icon: Heart,
    title: "Why Human-Centered Technology",
    content:
      "I believe the most powerful technology is the kind people don't notice — it just works, naturally, for them. The best apps don't make you think about the technology behind them. They make you feel understood. That's the kind of technology I want to build, and that's the kind of thinking I want to master.",
  },
  {
    icon: Sparkles,
    title: "Why Apple Developer Academy",
    content:
      "I want to learn how to think at the intersection of design, technology, and human experience. Apple Developer Academy teaches exactly that — building products that put people first. I've taught myself to code, but I want to learn how to create experiences. There's a difference, and Apple understands that difference better than anyone.",
  },
];

export default function WhatDrivesMe() {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
              What Drives Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              Technology is a tool.
              <br />
              <span className="text-[#86868B]">People are the purpose.</span>
            </h2>
          </SectionReveal>

          {/* Pull quote */}
          <SectionReveal delay={0.15}>
            <blockquote className="mt-12 mb-16 border-l-4 border-[#0071E3] pl-6 md:pl-8">
              <p className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] leading-snug tracking-tight">
                &ldquo;I didn&apos;t start with technology. I started with a
                question: how can things work better for people around
                me?&rdquo;
              </p>
            </blockquote>
          </SectionReveal>

          {/* Story cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-5">
                    <story.icon className="w-6 h-6 text-[#0071E3]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D1D1F] mb-3">
                    {story.title}
                  </h3>
                  <p className="text-[#6E6E73] text-[15px] leading-[1.7]">
                    {story.content}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
