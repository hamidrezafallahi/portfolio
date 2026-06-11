"use client";

import { motion } from 'framer-motion';

export default function SectionAmbientBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="-top-40 -left-40 absolute bg-primary-theme/10 blur-[120px] rounded-full w-125 h-125"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="-right-40 -bottom-40 absolute bg-highlight-theme/10 blur-[140px] rounded-full w-150 h-150"
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* subtle grid */}

      <div
        className="absolute inset-0 bg-grid-theme opacity-20"
      />
    </div>
  );
}
