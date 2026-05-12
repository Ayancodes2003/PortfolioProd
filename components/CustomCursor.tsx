"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    setUseCustomCursor(!isTouchDevice);

    if (isTouchDevice) {
      return;
    }

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLinkButton =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.classList.contains("hover-target");

      setIsHovered(isLinkButton);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = previousCursor;
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!useCustomCursor) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
      style={{ x: mouseX, y: mouseY }}
      animate={{
        scale: isHovered ? 2.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
