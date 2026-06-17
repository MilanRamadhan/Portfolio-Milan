"use client";

import SectionReveal from "./SectionReveal";
import {
  Mail,
  Briefcase,
  Code2,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "milanmulizar29@gmail.com",
    href: "mailto:milanmulizar29@gmail.com",
    primary: true,
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "Muhammad Milan Ramadhan Mulizar",
    href: "https://www.linkedin.com/in/muhammad-milan-ramadhan-mulizar-839874314/",
    primary: false,
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "MilanRamadhan",
    href: "https://github.com/MilanRamadhan",
    primary: false,
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
                Let&apos;s Connect
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
                Let&apos;s build something
                <br />
                <span className="text-[#86868B]">meaningful together.</span>
              </h2>
              <p className="text-[#6E6E73] text-lg max-w-[480px] mx-auto leading-relaxed">
                Whether it&apos;s about Apple Developer Academy, a collaboration
                idea, or just a conversation about technology and people — I&apos;d
                love to hear from you.
              </p>
            </div>
          </SectionReveal>

          {/* Contact cards */}
          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px] mx-auto">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") || item.href.startsWith("/") ? undefined : "_blank"}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                    item.primary
                      ? "bg-[#0071E3] border-[#0071E3] text-white hover:bg-[#0077ED] hover:shadow-lg hover:shadow-[#0071E3]/20"
                      : "bg-[#F5F5F7] border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-md hover:shadow-black/[0.03]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.primary
                        ? "bg-white/20"
                        : "bg-white border border-[#E8E8ED]"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.primary ? "text-white" : "text-[#0071E3]"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-wider mb-0.5 ${
                        item.primary ? "text-white/60" : "text-[#86868B]"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`text-sm font-medium truncate ${
                        item.primary ? "text-white" : "text-[#1D1D1F]"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                      item.primary ? "text-white/60" : "text-[#86868B]"
                    }`}
                  />
                </a>
              ))}
            </div>
          </SectionReveal>

          {/* Footer */}
          <SectionReveal delay={0.3}>
            <div className="mt-20 pt-8 border-t border-[#E8E8ED] text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]" />
                <span className="text-sm font-semibold text-[#1D1D1F] tracking-wide">
                  Milan Ramadhan
                </span>
              </div>
              <p className="text-[#86868B] text-xs">
                © {new Date().getFullYear()} Muhammad Milan Ramadhan Mulizar.
                Built with Next.js and genuine curiosity.
              </p>
              <p className="text-[#AEAEB2] text-[11px] mt-2">
                Designed for Apple Developer Academy Indonesia 2026 Application
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
