"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navRef = useRef<HTMLElement>(null);

  // Update pill position whenever active changes
  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.href.replace("#", "") === active);
    const el = linkRefs.current[idx];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [active]);

  // Set initial pill position after mount
  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.href.replace("#", "") === "home");
    const el = linkRefs.current[idx];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillStyle({ left: elRect.left - navRect.left, width: elRect.width });
  }, []);

  // IntersectionObserver for scroll tracking
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-4 right-4 md:top-6 md:right-8 z-50 flex items-center gap-1 bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-full px-2 py-1.5 shadow-sm">
      {/* Sliding pill */}
      <span aria-hidden className="absolute top-1.5 bottom-1.5 bg-black rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ left: pillStyle.left, width: pillStyle.width }} />

      {navLinks.map((link, i) => {
        const id = link.href.replace("#", "");
        const isActive = active === id;
        return (
          <a
            key={link.label}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              setActive(id);
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest transition-colors duration-200 ${isActive ? "text-white" : "text-gray-600 hover:text-black"}`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
