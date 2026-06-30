"use client";

import { useState } from "react";
import Image from "next/image";
import SectionReveal from "./SectionReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Users,
  User,
  Lightbulb,
  Target,
  BookOpen,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  summary: string;
  type: string;
  teamType: "Individual" | "Group";
  role: string;
  technologies: string[];
  impact: string;
  challenge: string;
  lesson: string;
  image?: string;
  gradient?: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SkillBridge",
    summary:
      "An AI-powered career recommendation platform that helps students discover personalized learning paths and job opportunities based on their skills, interests, and goals.",
    type: "AI / Career Tech",
    teamType: "Group",
    role: "Full-Stack Developer & AI Integration Lead",
    technologies: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    impact:
      "Designed to help students who feel lost in their career journey — connecting their current skills with meaningful career possibilities through intelligent matching.",
    challenge:
      "Integrating AI recommendations that felt genuinely helpful rather than generic. We iterated on the recommendation engine multiple times to make results feel personal.",
    lesson:
      "AI is only as good as the questions you ask it. Building useful AI products starts with deeply understanding the user's real needs, not just the data.",
    image: "/image/skillbridge.png",
  },
  {
    id: 2,
    title: "DeadDrop",
    summary:
      "A secure, location-based messaging platform where users can leave encrypted messages tied to real-world locations — and messages can self-destruct after being read.",
    type: "Privacy / Communication",
    teamType: "Individual",
    role: "Full-Stack Developer & Product Designer",
    technologies: ["Next.js", "MongoDB", "Socket.IO", "Encryption"],
    impact:
      "Created a novel approach to private communication that combines digital security with physical presence — making privacy tangible and location-aware.",
    challenge:
      "Implementing end-to-end encryption while maintaining a smooth, intuitive user experience. Security and simplicity often pull in opposite directions.",
    lesson:
      "Privacy is a human right, not a feature. Building secure systems taught me that the best security is the kind users never have to think about.",
    image: "/image/deaddrop.png",
  },
  {
    id: 3,
    title: "Klinik Sehat",
    summary:
      "A healthcare reservation system that streamlines patient booking for both BPJS (national insurance) and general patients, reducing wait times and administrative burden.",
    type: "Healthcare / Social Impact",
    teamType: "Group",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "Express.js", "MongoDB", "REST API"],
    impact:
      "Addressed a real pain point in Indonesian healthcare — patients waiting hours for appointments that could be booked in minutes. Designed separate flows for BPJS and general patients.",
    challenge:
      "Understanding the complex workflows of Indonesian healthcare administration. We spent weeks observing real clinic operations before writing a single line of code.",
    lesson:
      "The most impactful technology comes from sitting with the people who will use it. Observation teaches you more than any requirements document.",
    image: "/image/kliniksehat.png",
  },
  {
    id: 4,
    title: "Aqua Save",
    summary:
      "A water usage monitoring system that helps households track, analyze, and reduce their daily water consumption through real-time dashboards and conservation insights.",
    type: "Environmental / IoT",
    teamType: "Group",
    role: "Frontend Developer & UX Designer",
    technologies: ["TypeScript", "IoT Integration", "Data Visualization"],
    impact:
      "Made invisible water waste visible. By showing families their actual usage patterns, the system encouraged mindful consumption and environmental awareness.",
    challenge:
      "Translating raw sensor data into insights that everyday people could understand and act on. Data visualization for non-technical users requires a completely different mindset.",
    lesson:
      "Sustainability technology works best when it empowers people with awareness, not guilt. Show people their impact, and they'll choose to change.",
    image: "/image/aquasave.png",
  },
  {
    id: 5,
    title: "MilanoSport",
    summary:
      "A sports field booking platform that allows users to check real-time availability and reserve courts instantly, removing the friction of phone calls and in-person visits.",
    type: "Booking / Lifestyle",
    teamType: "Individual",
    role: "Full-Stack Developer & Designer",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    impact:
      "Simplified a process that previously required phone calls and physical visits. Users can now find and book available sports facilities in seconds.",
    challenge:
      "Building a real-time availability system that handles concurrent bookings without conflicts. Race conditions in booking systems are deceptively complex.",
    lesson:
      "Simple user experiences often require the most complex engineering underneath. The goal is to absorb complexity so users don't have to.",
    image: "/image/milanosport.png",
    url: "https://milanosport.vercel.app/",
  },
  {
    id: 6,
    title: "SIMATA",
    summary:
      "A bus ticket management platform with two operational sides — an admin dashboard for agencies to manage routes, schedules, and daily passenger manifests, and a customer side for searching trips in real time, selecting seats, and issuing e-tickets.",
    type: "Booking / Web Platform",
    teamType: "Group",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "React", "Prisma", "TypeScript"],
    impact:
      "Digitized the entire ticketing flow for bus travel agents — from posting routes to selling seats — while giving passengers a self-service way to find trips and book seats without phone calls or queues.",
    challenge:
      "Designing a responsive seat-selection UI that minimizes double-booking while keeping inventory consistent across concurrent customers. Coordinating the work across a four-person team also meant keeping our codebase clean and mergeable.",
    lesson:
      "Building software in a team taught me that clear structure and communication matter as much as the code itself. A feature isn't done until everyone can build on top of it.",
    image: "/image/simata.png",
    gradient: "from-[#0071E3] to-[#42A5F5]",
  },
  {
    id: 7,
    title: "inget.in",
    summary:
      "A fast, time-and-category based note-taking app for capturing plans simply and staying organized. Built with a cleanly separated frontend and backend to practice software-quality principles like testing, structure, and maintainability.",
    type: "Productivity / Full-Stack",
    teamType: "Individual",
    role: "Full-Stack Developer",
    technologies: ["Next.js 14", "NestJS", "PostgreSQL", "Prisma"],
    impact:
      "Turned scattered reminders into one quick, organized place — letting users jot down plans by time and category in seconds, backed by secure auth and a real database.",
    challenge:
      "Keeping a clean separation between a Next.js frontend and a NestJS backend while enforcing software-quality practices — proper structure, validation, and testability — rather than just shipping features.",
    lesson:
      "Quality isn't something you add at the end. Writing maintainable, well-structured code from the start makes everything that comes after it faster and safer.",
    image: "/image/ingetin.png",
    gradient: "from-[#7C3AED] to-[#A78BFA]",
  },
  {
    id: 8,
    title: "Medical Chatbot",
    summary:
      "An NLP-powered medical chatbot that understands users' health questions and responds with relevant information, backed by a trained machine-learning model and a full pipeline from data processing to a web interface.",
    type: "AI / NLP",
    teamType: "Individual",
    role: "NLP Engineer & Full-Stack Developer",
    technologies: ["Python", "NLP / ML", "Jupyter", "Web Frontend"],
    impact:
      "Made health information more accessible through natural conversation — letting people ask questions in their own words and get relevant answers instead of navigating complex medical resources.",
    challenge:
      "Training a model that interprets messy, real-world medical questions accurately, then connecting that model to a usable backend and frontend. Bridging data science and product engineering is its own discipline.",
    lesson:
      "An ML model is only half the product. The real value appears when you wrap it in an interface people can actually talk to — the data science and the user experience have to meet.",
    image: "/image/medicalchatbot.png",
    gradient: "from-[#1A7F37] to-[#4ADE80]",
  },
  {
    id: 9,
    title: "MicroJourney AR",
    summary:
      "A WebAR biology learning tool for junior-high students that visualizes the human digestive system and how synthetic microplastics disrupt it. Built around the Discovery Learning model, students scan real plastic objects to trigger an AR investigation.",
    type: "EdTech / AR",
    teamType: "Group",
    role: "Frontend Developer & AR Integration",
    technologies: ["WebAR", "Computer Vision", "Next.js", "TypeScript"],
    impact:
      "Made an invisible biological process tangible — showing students how microplastics reach and damage the stomach and intestines, something a textbook alone can't convey. Built for the LIDM national competition.",
    challenge:
      "Bringing AR and computer vision into the browser and tying every interaction to the six stages of the Discovery Learning syntax, so the technology served the pedagogy instead of distracting from it.",
    lesson:
      "Technology in education works best when it's built around how students actually learn. The AR was never the point — the understanding it unlocked was.",
    image: "/image/microjourney.png",
    gradient: "from-[#C2410C] to-[#FB923C]",
  },
];

const fallbackGradient = "from-[#86868B] to-[#C7C7CC]";

export default function FeaturedProjects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const expandedProject = projects.find((p) => p.id === expandedId);

  const showImage = (p: Project) => p.image && !failedImages.has(p.id);
  const markFailed = (id: number) =>
    setFailedImages((prev) => new Set(prev).add(id));

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-[980px] mx-auto">
          {/* Section header */}
          <SectionReveal>
            <p className="text-[#0071E3] text-sm font-semibold tracking-wide mb-3">
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-4">
              Built to solve, designed to matter.
            </h2>
            <p className="text-[#6E6E73] text-lg max-w-[560px] leading-relaxed">
              Each project started with a question about people — and became a
              lesson in building technology that serves them.
            </p>
          </SectionReveal>

          {/* Project cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <SectionReveal
                key={project.id}
                delay={index * 0.08}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <button
                  onClick={() => setExpandedId(project.id)}
                  className={`w-full text-left group rounded-2xl overflow-hidden border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300 bg-[#F5F5F7] ${
                    index === 0 ? "md:grid md:grid-cols-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden bg-[#E8E8ED] ${
                      index === 0 ? "h-64 md:h-full" : "h-52"
                    }`}
                  >
                    {showImage(project) ? (
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        onError={() => markFailed(project.id)}
                        className="object-cover object-top hover-zoom"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                          project.gradient ?? fallbackGradient
                        } hover-zoom`}
                      >
                        <span className="text-white font-bold tracking-tight text-2xl md:text-3xl px-6 text-center drop-shadow-sm">
                          {project.title}
                        </span>
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    {/* Type badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#1D1D1F]">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      {project.teamType === "Group" ? (
                        <Users className="w-3.5 h-3.5 text-[#86868B]" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-[#86868B]" />
                      )}
                      <span className="text-[12px] text-[#86868B] font-medium">
                        {project.teamType} · {project.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 group-hover:text-[#0071E3] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#6E6E73] text-sm leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#F5F5F7] text-[#6E6E73] border border-[#E8E8ED]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#0071E3] text-sm font-medium mt-4 group-hover:underline">
                      View case study →
                    </p>
                  </div>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded case study modal */}
      <AnimatePresence>
        {expandedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setExpandedId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-[720px] w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal header image */}
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-3xl">
                {showImage(expandedProject) ? (
                  <Image
                    src={expandedProject.image!}
                    alt={expandedProject.title}
                    fill
                    onError={() => markFailed(expandedProject.id)}
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      expandedProject.gradient ?? fallbackGradient
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <button
                  onClick={() => setExpandedId(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-[#1D1D1F]" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[12px] font-semibold px-3 py-1 rounded-full bg-white/90 text-[#1D1D1F] mb-3 inline-block">
                    {expandedProject.type}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    {expandedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-8">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-[#E8E8ED]">
                  <div className="flex items-center gap-1.5 text-sm text-[#6E6E73]">
                    {expandedProject.teamType === "Group" ? (
                      <Users className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    {expandedProject.teamType}
                  </div>
                  <span className="text-[#D2D2D7]">·</span>
                  <span className="text-sm text-[#6E6E73]">
                    {expandedProject.role}
                  </span>
                  {expandedProject.url && (
                    <>
                      <span className="text-[#D2D2D7]">·</span>
                      <a
                        href={expandedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[#0071E3] hover:underline"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </>
                  )}
                </div>

                {/* Summary */}
                <p className="text-[#1D1D1F] text-base leading-relaxed mb-8">
                  {expandedProject.summary}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {expandedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-lg bg-[#F5F5F7] text-[#6E6E73] border border-[#E8E8ED]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact, Challenge, Lesson cards */}
                <div className="space-y-4">
                  <div className="bg-[#E8F4FD] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[#0071E3]" />
                      <h4 className="font-bold text-[#1D1D1F] text-sm">
                        Impact
                      </h4>
                    </div>
                    <p className="text-[#1D1D1F] text-[15px] leading-relaxed">
                      {expandedProject.impact}
                    </p>
                  </div>

                  <div className="bg-[#FEF3E2] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-[#C2410C]" />
                      <h4 className="font-bold text-[#1D1D1F] text-sm">
                        Key Challenge
                      </h4>
                    </div>
                    <p className="text-[#1D1D1F] text-[15px] leading-relaxed">
                      {expandedProject.challenge}
                    </p>
                  </div>

                  <div className="bg-[#E5F6ED] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-[#1A7F37]" />
                      <h4 className="font-bold text-[#1D1D1F] text-sm">
                        Lesson Learned
                      </h4>
                    </div>
                    <p className="text-[#1D1D1F] text-[15px] leading-relaxed">
                      {expandedProject.lesson}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
