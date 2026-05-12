"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Webnyay AI",
    role: "Software Engineering Intern",
    date: "June 2025 - July 2025",
    type: "Hybrid",
    bullets: [
      "Spearheaded a scalable OCR-to-translation pipeline using FastAPI REST APIs in Python, adhering to SDLC principles, reducing manual effort by 99% and accelerating retrieval speed by 3x across 100K+ records.",
      "Orchestrated server-side indexing logic for 1M+ legal entities, improving API-based search precision by 50% and enabling 90% faster query time for downstream consumers."
    ]
  },
  {
    company: "Neophyte Ambience Intelligence",
    role: "AI Engineering Intern",
    date: "May 2025 - June 2025",
    type: "Hybrid",
    bullets: [
      "Mechanized complex agentic workflows by integrating LLM services with HITL across containerized pipelines, identifying anomalies and validation checkpoints, slashing manual intervention by 99% across 10K+ prompts.",
      "Deployed a production-grade RAG retrieval system with API-driven indexing, achieving 95% precision across 20+ evaluation benchmarks for large-scale semantic search."
    ]
  },
  {
    company: "DRDO Lab (Ministry of Defence - India)",
    role: "Technical Intern",
    date: "June 2024 - July 2024",
    type: "On-site",
    bullets: [
      "Synthesized C/C++ algorithms on Linux to analyze sensor data and predict system failures, improving diagnostic accuracy by 99% for flight-path modeling.",
      "Engineered data validation routines for 10+ defense prototype simulations, ensuring strict compliance with Ministry of Defense SDLC standards and improving data accuracy by 90%."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto w-full">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-16 md:mb-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-50"></div>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
          <h3 className="text-xs font-bold tracking-widest text-white uppercase relative z-10">
            Professional Experience
          </h3>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white/20 blur-md opacity-50"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Column: Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white mb-2">
                SUMMARY
              </h2>
              <div className="mt-8 space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Computer Science Engineering student specializing in scalable backend platforms and distributed infrastructure with experience building APIs, automation pipelines, and data processing systems.
                </p>
                <p>
                  Delivered production-grade solutions across internships and projects involving large-scale data processing and real-time applications following software engineering principles and SDLC. Strong foundation in operating systems, data structures, algorithms, and system design with interest in infrastructure and AI-driven systems.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-8 rounded-2xl bg-[#0a0806]/80 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-xs tracking-widest uppercase text-gray-400 font-medium border border-white/10 px-4 py-1.5 rounded-full">{exp.date}</span>
                      <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">{exp.type}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1">
                      {exp.company}
                    </h3>
                    <h4 className="text-sm md:text-base font-bold text-gray-400 mb-6 uppercase tracking-widest">
                      {exp.role}
                    </h4>
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3 text-sm md:text-base text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 min-w-[6px] rounded-full bg-amber-500/50"></span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Visuals */}
          <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32 lg:h-max hidden lg:block">
            <motion.div 
              style={{ y: y1 }}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-[#050505]"
            >
              {/* Abstract Tech Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_100%)]"></div>
              
              <div className="absolute inset-0 pt-10 bg-transparent flex flex-col items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-amber-500/20 flex items-center justify-center relative">
                  <div className="w-32 h-32 rounded-full border border-orange-500/20 absolute animate-[spin_10s_linear_infinite]"></div>
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 blur-xl"></div>
                  <span className="absolute text-xs uppercase tracking-widest text-amber-500/50">Building Systems</span>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
