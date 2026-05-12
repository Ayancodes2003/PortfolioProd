"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PixelScatterImage from "./PixelScatterImage";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Claude SEO Agent",
    role: "AI Tooling",
    year: "2026",
    color: "from-emerald-500 to-teal-500",
    url: "https://github.com/varundhondi/seo-audit-report",
    description: "A comprehensive SEO analysis skill for Claude Code that automates technical SEO, on-page analysis, and AI search optimization.",
    working: "It operates via a suite of AI subagents that run parallel audits (e.g., technical, content, schema). It generates an interactive report with actionable insights, automates multi-language hreflang validation, and creates programmatic SEO plans with strict quality gates.",
    features: ["Parallel Subagent Architecture", "Programmatic SEO Planning", "Schema Generation", "Core Web Vitals Analysis"],
    bgImage: "/projects/seo-audit.png"
  },
  {
    title: "Real-Time Sentiment Analytics",
    role: "Data Engineering",
    year: "2025",
    color: "from-red-600 to-rose-600",
    url: "https://github.com/varundhondi/Real-Time-Sentiment-Analytics-Dashboard",
    description: "A real-time dashboard that collects, analyzes, and visualizes public opinions from Twitter using NLP and machine learning.",
    working: "It streams live tweets using the Tweepy API and applies TextBlob for NLP sentiment analysis. The interactive dashboard, built with Plotly Dash, visualizes sentiment trends, geolocation insights, and top keywords in real time, delivering actionable public relations intelligence.",
    features: ["Live Twitter Streaming", "NLP Sentiment Scoring", "Geolocation Tracking", "Plotly Dash Visualizations"],
    bgImage: "/projects/sentiment-analytics.png"
  },
  {
    title: "AutoEDA-AI",
    role: "Multi-Agent System",
    year: "2025",
    color: "from-blue-600 to-indigo-600",
    url: "https://github.com/varundhondi/AutoEDA-AI-Multi-Agent-LLM-System-for-Natural-Language-Driven-Exploratory-Data-Analysis",
    description: "A natural language-driven exploratory data analysis platform powered by a multi-agent LLM system.",
    working: "Users ask questions in plain English. The system's Query Agent interprets the intent, the SQL Agent translates it to database queries, the Analysis Agent runs statistical and trend analysis, and the Visualization Agent generates interactive charts on the Streamlit dashboard.",
    features: ["Natural Language to SQL", "Automated Data Analysis", "Interactive Plotly Dashboard", "CrewAI Multi-Agent Framework"],
    bgImage: "/projects/autoeda.png"
  },
  {
    title: "Diabetes AI Assistant",
    role: "AI Health Tech",
    year: "2025",
    color: "from-purple-600 to-pink-600",
    url: "https://github.com/varundhondi/Diabetes-AI-assistant",
    description: "An AI-powered health management application helping users track, analyze, and understand diabetes-related data.",
    working: "It accepts voice, text, and image inputs (e.g., food or wound images) to analyze patient health. It securely stores vital signs, medication history, and glucose levels in MongoDB, using AI to generate comprehensive PDF medical reports and personalized health insights.",
    features: ["Voice & Text Input", "AI Image Analysis", "Medical Report Generation", "Secure Authentication"],
    bgImage: "/projects/diabetes.png"
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectCardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          const indexAttr = mostVisible.target.getAttribute("data-project-index");
          const index = indexAttr ? Number(indexAttr) : 0;
          setActiveIndex(index);
        }
      },
      {
        threshold: [0.4, 0.6, 0.8],
        rootMargin: "-10% 0px -50% 0px",
      }
    );

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative w-full border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 relative overflow-hidden group w-fit">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-50"></div>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
          <h3 className="text-xs font-bold tracking-widest text-white uppercase relative z-10">
            Selected Works
          </h3>
        </div>
        <div className="max-w-3xl text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Portfolio projects crafted for AI, automation, and growth.
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            Scroll directly to the first project and see the image update instantly as each case study becomes visible.
          </p>
        </div>
      </div>

      {/* 
        Container that spans the height of all projects.
        We use a flex layout: left side sticky image, right side scrolling cards.
      */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row relative">
        
        {/* Left Side: Sticky Visuals (Pixel Scatter Image) */}
        <div className="hidden lg:flex w-1/2 h-screen sticky top-0 flex-col justify-center pr-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 relative overflow-hidden group w-fit">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-50"></div>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
            <h3 className="text-xs font-bold tracking-widest text-white uppercase relative z-10">
              Selected Works
            </h3>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white/20 blur-md opacity-50"></div>
          </div>

          <div className="w-full aspect-video relative rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
            <PixelScatterImage 
              src={projects[activeIndex].bgImage} 
              alt={projects[activeIndex].title} 
            />
          </div>
        </div>

        {/* Right Side: Scrolling Project Details */}
        <div className="w-full lg:w-1/2 flex flex-col py-16 lg:py-16 gap-32 lg:gap-64">
          {/* Mobile Heading */}
          <div className="lg:hidden inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 relative overflow-hidden group w-fit">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-50"></div>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
            <h3 className="text-xs font-bold tracking-widest text-white uppercase relative z-10">
              Selected Works
            </h3>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white/20 blur-md opacity-50"></div>
          </div>

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              id={idx === 0 ? "selected-works" : undefined}
              ref={(node) => {
                projectCardsRef.current[idx] = node;
              }}
              data-project-index={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-6 p-8 md:p-12 rounded-3xl bg-[#050505]/60 backdrop-blur-xl border border-white/10 shadow-2xl origin-bottom hover-target will-change-transform"
            >
              {/* Mobile Image (Visible only on small screens) */}
              <div className="lg:hidden w-full aspect-video relative rounded-xl border border-white/10 overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.bgImage} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                  <span className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                    {project.role}
                  </span>
                </div>
                <h4 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                  {project.title}
                </h4>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                  {project.description}
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {project.working}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.features.map((feature, fIdx) => (
                  <span key={fIdx} className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-between w-full py-4 border-t border-white/10 group cursor-pointer"
              >
                <span className="text-sm font-bold tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors">
                  View Repository
                </span>
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <FiArrowUpRight className="text-xl" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
