"use client";

import { motion } from 'framer-motion';

export default function FloatingGlass({
  children
}:{
  children:React.ReactNode
}){

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}