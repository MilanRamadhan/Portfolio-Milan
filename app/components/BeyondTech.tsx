"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";
import { Camera, PenTool, Heart, Music } from "lucide-react";

const interests = [
  {
    icon: Camera,
    title: "Videography & Photography",
    description:
      "From documenting campus events to creating visual stories, I've developed an eye for framing moments that matter. This experience taught me that great design starts with observation — seeing the world through other people's eyes.",
    image: "/image/DSC_0014.png",
    position: "center 35%",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description:
      "Designing for BEM FMIPA gave me hands-on experience with visual communication. Every poster, every social media graphic was a lesson in clarity — saying more with less, making complex ideas accessible at a glance.",
    image: "/image/IMG_2570.png",
    position: "center 40%",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description:
      "Leading social community programs showed me that the best solutions come from understanding people in context. Technology built in isolation serves nobody. The most meaningful innovations emerge from genuine human connection.",
    image: "/image/community_engagement.jpg",
    position: "center 55%",
  },
  {
    icon: Music,
    title: "Creative Exploration",
    description:
      "Whether it's exploring new design tools, experimenting with video editing, or brainstorming product ideas — creativity is how I recharge. The interdisciplinary connections I make during creative play often lead to my best technical solutions.",
    image: "/image/creative_exploration2.jpg",
    position: "center 25%",
  },
];

export default function BeyondTech() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5F7]">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
              Beyond Technology
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              The best technologists are also{" "}
              <span className="text-[#86868B]">
                artists, storytellers, and community builders.
              </span>
            </h2>
            <p className="text-[#6E6E73] text-lg max-w-[560px] leading-relaxed">
              Technology is one dimension of who I am. These are the others.
            </p>
          </SectionReveal>

          {/* Interest grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-2xl border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  {item.image && (
                    <div className="relative h-56 sm:h-64 overflow-hidden border-b border-[#E8E8ED]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover hover-zoom"
                        style={{ objectPosition: item.position || "center center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F5F5F7] flex items-center justify-center">
                        <item.icon className="w-4.5 h-4.5 text-[#0071E3]" />
                      </div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#6E6E73] text-sm leading-[1.7] flex-1">
                      {item.description}
                    </p>
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
