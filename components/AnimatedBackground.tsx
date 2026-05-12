"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-[#0a0806]">
      {/* Tech Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      {/* Floating Colored Orbs - Simplified */}
      <motion.div
        animate={{
          y: ["0%", "-5%", "0%"],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-amber-600/10 blur-[120px] will-change-transform"
      />
      
      <motion.div
        animate={{
          y: ["0%", "5%", "0%"],
        }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-orange-700/10 blur-[140px] will-change-transform"
      />

      <motion.div
        animate={{
          y: ["0%", "-3%", "0%"],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-stone-500/10 blur-[120px] will-change-transform"
      />
    </div>
  );
}
