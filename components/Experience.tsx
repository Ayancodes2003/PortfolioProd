"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
          <h3 className="text-xs font-bold tracking-widest text-white uppercase relative z-10">
            Professional Experience
          </h3>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white/20 blur-md opacity-50"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Column: Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-widest uppercase text-gray-400 font-medium border border-white/10 px-4 py-1.5 rounded-full">Feb 2026 - May 2026</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-white mb-2">
                Aekovera
              </h2>
              <p className="text-xl md:text-2xl font-medium text-gray-400 mb-8">
                AI Engineer
              </p>
              
              <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  AI Engineer and Computer Science graduate student specializing in Generative AI, backend engineering, and scalable data systems. Experienced in developing FastAPI-based applications, RAG-driven workflows, ETL pipelines, and real-time analytics platforms using Python, SQL, and modern AI frameworks.
                </p>
                <p>
                  Built intelligent systems focused on automation, retrieval-based AI, and data-driven decision making, with hands-on expertise in machine learning, API integrations, and performance-oriented backend development. Passionate about transforming complex problems into scalable, production-ready AI solutions through clean engineering and innovative system design.
                </p>
              </div>
            </motion.div>

            {/* Featured Project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden mt-4 hover:-translate-y-2 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                  Key Project Delivered
                </h4>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  Claude SEO Agent
                </h3>
                <p className="text-sm text-gray-400 mb-6 line-clamp-3">
                  An autonomous, AI-driven technical SEO auditing system capable of analyzing web structures, generating performance reports, and executing workflow automations using advanced LLM reasoning.
                </p>
                <a href="https://github.com/varundhondi/seo-audit-report" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-blue-400 transition-colors">
                  View Source <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visuals */}
          <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32 lg:h-max">
            <motion.div 
              style={{ y: y1 }}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-black"
            >
              {/* Browser bar mockup */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <div className="mx-auto w-1/2 h-5 bg-black/50 rounded-md flex items-center justify-center border border-white/5">
                  <span className="text-[9px] text-gray-500 tracking-wider">aekovera.com</span>
                </div>
              </div>
              
              <div className="absolute inset-0 pt-10 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/projects/aekovera.png" 
                  alt="Aekovera Platform" 
                  className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
                 <a href="https://www.aekovera.com/" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    Visit Website
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
