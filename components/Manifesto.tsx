"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  "SCALABLE ARCHITECTURE",
  "AI-DRIVEN LOGIC",
  "OPTIMIZED BACKENDS",
  "IMMERSIVE EXPERIENCES"
];



export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="manifesto" ref={ref} className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[100vh] bg-transparent overflow-hidden">
      


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
