"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle gradient orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0071E3]/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0071E3]/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-[980px] mx-auto pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#1D1D1F] mb-6 max-w-[800px]"
          >
            Building technology that starts with{" "}
            <span className="text-[#0071E3]">people.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#6E6E73] text-lg md:text-xl leading-relaxed max-w-[600px] mb-10"
          >
            Informatics student, AI enthusiast, community leader, and lifelong
            learner exploring how technology can create meaningful impact.
          </motion.p>

          {/* Profile row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
          >
            {/* Photo */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#D2D2D7] ring-offset-2 ring-offset-[#FAFAFA] flex-shrink-0">
              <Image
                src="/image/milan_new.jpg"
                alt="Muhammad Milan Ramadhan Mulizar"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>

            <div>
              <p className="text-[#1D1D1F] font-semibold text-base">
                Muhammad Milan Ramadhan Mulizar
              </p>
              <p className="text-[#86868B] text-sm">
                Informatics · Universitas Syiah Kuala · Banda Aceh, Indonesia
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#0071E3] hover:bg-[#0077ED] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#0071E3]/20"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-milan-ramadhan-mulizar-839874314/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-[#333336] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
            >
              <Briefcase className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 border border-[#D2D2D7] hover:border-[#86868B] text-[#1D1D1F] px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#AEAEB2]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
