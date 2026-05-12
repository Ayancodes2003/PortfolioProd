"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  "SCALABLE ARCHITECTURE",
  "AI-DRIVEN LOGIC",
  "OPTIMIZED BACKENDS",
  "IMMERSIVE EXPERIENCES"
];

const floatingImages = [
  {
    src: "/personal/image2.jpg",
    quote: "The sky isn't the limit; it's just the beginning.",
    className: "absolute top-[5%] left-[5%] md:left-[10%] w-40 h-56 md:w-64 md:h-80 -rotate-6",
    delay: 0.2
  },
  {
    src: "/personal/image3.jpg",
    quote: "Finding stillness in the noise of data.",
    className: "absolute top-[35%] right-[5%] md:right-[10%] w-32 h-44 md:w-56 md:h-72 rotate-6",
    delay: 0.4
  },
  {
    src: "/personal/image4.jpg",
    quote: "Power comes from within the algorithms.",
    className: "absolute bottom-[10%] left-[10%] md:left-[25%] w-40 h-56 md:w-72 md:h-96 rotate-3",
    delay: 0.6
  }
];

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="manifesto" ref={ref} className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[100vh] bg-transparent overflow-hidden">
      
      {/* Background Floating Images */}
      {floatingImages.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, zIndex: 50 }}
          className={`hidden md:block group rounded-2xl overflow-hidden shadow-2xl z-0 border-2 border-white/5 ${img.className}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={img.src} 
            alt="Atmosphere" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-center p-6 pt-12 text-center">
            <p className="text-white font-bold text-sm sm:text-base leading-relaxed italic drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
              &quot;{img.quote}&quot;
            </p>
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl w-full text-center pointer-events-none">
        <h3 className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-16">
          The Manifesto
        </h3>

        <div className="flex flex-col gap-8 md:gap-12">
          {values.map((value, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.15,
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mix-blend-screen"
              >
                {value}
              </motion.h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
