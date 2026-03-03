"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    const updateActive = () => {
      // Cari section yang posisi top-nya paling dekat dengan tengah viewport dari atas
      const threshold = window.innerHeight * 0.45;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold) {
          current = id;
        }
      }

      setActive(current);
    };

    updateActive(); // set state saat pertama kali mount
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    /* Nav links — fixed, blur background */
    <nav className="fixed top-4 right-4 md:top-6 md:right-8 z-50 flex items-center gap-1 bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-full px-2 py-1.5 shadow-sm">
      {navLinks.map((link) => {
        const id = link.href.replace("#", "");
        const isActive = active === id;
        return (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActive(id)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest transition-all duration-200 ${isActive ? "bg-black text-white" : "text-gray-600 hover:text-black hover:bg-black/5"}`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
