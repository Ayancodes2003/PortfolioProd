"use client";

import { motion } from "framer-motion";

export default function SectionTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "0px 0px -100px 0px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
