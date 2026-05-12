"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const titleLines = ["VARUN", "DHONDI"];
    const roles = ["AI Engineer", "& DATA Scientist"];

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-10">
            <div className="max-w-7xl mx-auto w-full">

                {/* Status Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 mb-12"
                >
                    <div className="text-xs tracking-widest uppercase text-gray-400 font-medium">Current Status</div>
                    <div className="h-px w-12 bg-gray-700"></div>
                    <div className="text-xs tracking-widest uppercase text-white font-medium border border-white/20 px-3 py-1 rounded-full flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Projects
                    </div>
                </motion.div>

                {/* Main Typography */}
                <div className="flex flex-col gap-2 relative">
                    {/* Profile Picture with Hover Quote */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: -5 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                        transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
                        className="group absolute right-0 md:right-10 lg:right-20 xl:right-32 top-0 sm:top-[-10px] md:top-[-20px] w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-[22rem] xl:w-[20rem] xl:h-[26rem] rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-[#0a0a0a] will-change-transform"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/personal/image1.jpg" alt="Varun Dhondi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                        
                        {/* Overlay and Quote */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4 sm:p-6 pb-8 text-center">
                            <p className="text-white font-bold text-sm sm:text-base leading-relaxed italic drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                                &quot;Engineering the future, one line of code at a time.&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <div className="flex flex-col">
                        {titleLines.map((line, idx) => (
                            <div key={idx} className="overflow-hidden">
                                <motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (idx * 0.1) }}
                                    className="text-[12vw] sm:text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase text-[#ededed]"
                                >
                                    {line}
                                </motion.h1>
                            </div>
                        ))}
                    </div>

                    {/* Roles */}
                    <div className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40 ml-auto text-right relative z-10">
                        {roles.map((role, idx) => (
                            <div key={idx} className="overflow-hidden">
                                <motion.h2
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 + (idx * 0.1) }}
                                    className="text-4xl sm:text-6xl md:text-8xl leading-[0.9] font-medium tracking-tight text-gray-400"
                                >
                                    {role}
                                </motion.h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
            </motion.div>
        </section>
    );
}
