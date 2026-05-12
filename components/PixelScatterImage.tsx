"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GRID_ROWS = 5;
const GRID_COLS = 5;
const TOTAL_PIXELS = GRID_ROWS * GRID_COLS;

export default function PixelScatterImage({ src, alt }: { src: string; alt: string }) {
  const pixels = useMemo(() => {
    const newPixels: { x: number; y: number; id: number }[] = [];
    let id = 0;

    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        newPixels.push({
          x: (col / (GRID_COLS - 1)) * 100,
          y: (row / (GRID_ROWS - 1)) * 100,
          id: id++,
        });
      }
    }

    return newPixels;
  }, []);

  if (!src) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={src}
          className="absolute inset-0 w-full h-full grid"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          }}
        >
          {pixels.map((p) => {
            // Tighter boundaries and faster delays for maximum smoothness
            const randomX = (Math.random() - 0.5) * 300;
            const randomY = (Math.random() - 0.5) * 300;
            const randomRotate = (Math.random() - 0.5) * 90;
            const randomDelay = Math.random() * 0.15;

            return (
              <motion.div
                key={p.id}
                initial={{ 
                  opacity: 0, 
                  x: randomX, 
                  y: randomY, 
                  rotateZ: randomRotate,
                  scale: 0 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0, 
                  rotateZ: 0,
                  scale: 1 
                }}
                exit={{ 
                  opacity: 0, 
                  x: randomX * 1.5, 
                  y: randomY * 1.5, 
                  rotateZ: randomRotate * 1.5,
                  scale: 0 
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: randomDelay,
                }}
                className="w-full h-full relative will-change-transform"
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: `${GRID_COLS * 100}% ${GRID_ROWS * 100}%`,
                    backgroundPosition: `${p.x}% ${p.y}%`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
