"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between relative pointer-events-auto">
                <Link href="/" className="hover-target relative z-10 block group">
                    <div className="relative flex items-center">
                        {/* Core text with extreme polish */}
                        <span className="text-xl md:text-2xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.9)]">
                            VARUN
                        </span>
                        {/* Glowing aura that ignites on hover */}
                        <span className="absolute top-0 left-0 text-xl md:text-2xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none">
                            VARUN
                        </span>
                        {/* Tech accent line */}
                        <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-transparent group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-[#050505]/40 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
                    {[
                        { label: 'Skills', href: '#skills' },
                        { label: 'Projects', href: '#selected-works' },
                        { label: 'Experience', href: '#experience' },
                        { label: 'Manifesto', href: '#manifesto' },
                    ].map((item) => (
                        <Link 
                            key={item.label} 
                            href={item.href} 
                            className="relative px-5 py-2.5 text-[10px] lg:text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-all duration-500 hover-target rounded-full overflow-hidden group"
                        >
                            <span className="relative z-10">{item.label}</span>
                            {/* Hover Pill Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 rounded-full"></div>
                            {/* Subtle Glow */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Link>
                    ))}
                </div>

                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=varundhondi2235@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm font-medium tracking-wide hover-target uppercase flex items-center gap-2 group relative z-10 mix-blend-difference text-white"
                    aria-label="Compose email to varundhondi2235@gmail.com"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Let&apos;s Talk
                </a>
            </div>
        </motion.nav>
    );
}