"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";

const topRow = [
  "PYTHON", "TYPESCRIPT", "REACT", "NEXT.JS", "TAILWIND", "FRAMER MOTION", "STREAMLIT"
];
const middleRow = [
  "LLMs", "CREWAI", "AGENTIC AI", "OPENAI", "CLAUDE API", "COMPUTER VISION", "NLP"
];
const bottomRow = [
  "FASTAPI", "MONGODB", "SQL", "DATA ANALYSIS", "SEO AUTOMATION", "SYSTEM DESIGN", "BACKEND"
];

// Multiply by 3 so that the motion remains smooth while keeping DOM size smaller
const multiply = (arr: string[], times: number) => {
  let result: string[] = [];
  for (let i = 0; i < times; i++) {
    result = [...result, ...arr];
  }
  return result;
};

export default function Skills() {
  const scrollToSelectedWorks = useCallback(() => {
    document.getElementById("selected-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section id="skills" className="py-32 overflow-hidden bg-transparent border-t border-white/5 relative flex flex-col gap-6 md:gap-10">
      <div className="max-w-7xl mx-auto px-6 w-full mb-10">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-50"></div>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]"></span>
          <h3 className="text-xs font-bold tracking-widest text-white uppercase relative z-10">
            Tech Stack & Capabilities
          </h3>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white/20 blur-md opacity-50"></div>
        </div>
      </div>

      {/* Row 1 - Moves Left */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 140, repeat: Infinity }}
        className="flex gap-8 md:gap-16 whitespace-nowrap px-6 w-max will-change-transform"
      >
        {multiply(topRow, 4).map((skill, i) => (
          <h2
            key={i}
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent uppercase tracking-tighter hover:text-white hover:opacity-100 transition-all duration-300 cursor-default"
          >
            {skill}
          </h2>
        ))}
      </motion.div>

      {/* Row 2 - Moves Right */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 170, repeat: Infinity }}
        className="flex gap-8 md:gap-16 whitespace-nowrap px-6 w-max will-change-transform"
      >
        {multiply(middleRow, 4).map((skill, i) => (
          <h2
            key={i}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white opacity-20 uppercase tracking-tighter hover:opacity-100 transition-opacity duration-300 cursor-default"
          >
            {skill}
          </h2>
        ))}
      </motion.div>

      {/* Row 3 - Moves Left (Faster) */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 130, repeat: Infinity }}
        className="flex gap-8 md:gap-16 whitespace-nowrap px-6 w-max will-change-transform"
      >
        {multiply(bottomRow, 4).map((skill, i) => (
          <h2
            key={i}
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent uppercase tracking-tighter hover:text-white hover:opacity-100 transition-all duration-300 cursor-default"
          >
            {skill}
          </h2>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <div className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-gray-500 mb-3">
            See how this stack comes to life
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Explore the work that turns capabilities into real products.
          </h2>
        </div>

        <button
          type="button"
          onClick={scrollToSelectedWorks}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-sky-500/10 via-white/10 to-cyan-500/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-white/20 hover:bg-gradient-to-r hover:from-sky-400/15 hover:to-cyan-400/15 hover:text-white hover:scale-[1.01] hover-target focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          Explore Selected Works
        </button>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
    </section>
  );
}
