"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GRID_ROWS = 5;
const GRID_COLS = 5;
const TOTAL_PIXELS = GRID_ROWS * GRID_COLS;

function seededOffset(seed: number, range: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return (value - Math.floor(value) - 0.5) * range;
}

function seededDelay(seed: number) {
  const value = Math.sin(seed * 78.233) * 43758.5453;
  return (value - Math.floor(value)) * 0.15;
}

export default function PixelScatterImage({ src, alt }: { src: string; alt: string }) {
  const pixels = useMemo(() => {
    const newPixels: {
      delay: number;
      rotate: number;
      scatterX: number;
      scatterY: number;
      x: number;
      y: number;
      id: number;
    }[] = [];

    for (let id = 0; id < TOTAL_PIXELS; id++) {
      const row = Math.floor(id / GRID_COLS);
      const col = id % GRID_COLS;

        newPixels.push({
          delay: seededDelay(id + 1),
          rotate: seededOffset(id + 3, 90),
          scatterX: seededOffset(id + 5, 300),
          scatterY: seededOffset(id + 7, 300),
          x: (col / (GRID_COLS - 1)) * 100,
          y: (row / (GRID_ROWS - 1)) * 100,
          id,
        });
    }

    return newPixels;
  }, []);

  if (!src) return null;

  return (
    <div aria-label={alt} role="img" className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={src}
          className="absolute inset-0 w-full h-full grid"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          }}
        >
          {pixels.map((p) => (
              <motion.div
                key={p.id}
                initial={{ 
                  opacity: 0, 
                  x: p.scatterX, 
                  y: p.scatterY, 
                  rotateZ: p.rotate,
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
                  x: p.scatterX * 1.5, 
                  y: p.scatterY * 1.5, 
                  rotateZ: p.rotate * 1.5,
                  scale: 0 
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: p.delay,
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
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
