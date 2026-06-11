"use client";

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MotionWrapper({
  children,
  className
}: Props) {

  return (
    <motion.div
      className={className}
      initial={{
        opacity:0,
        y:30
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.7,
        ease:"easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}