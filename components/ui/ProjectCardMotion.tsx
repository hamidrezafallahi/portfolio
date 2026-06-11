"use client";

import { motion } from 'framer-motion';

export function ProjectCardMotion({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}