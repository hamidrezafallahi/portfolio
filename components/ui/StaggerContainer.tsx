"use client";

import { motion } from 'framer-motion';

export default function StaggerContainer({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}