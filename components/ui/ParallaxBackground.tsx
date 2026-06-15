"use client";

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1200], [0, 150]);

  return (
    <div className="top-0 -z-10 fixed w-screen h-screen overflow-hidden">
      <motion.div
        style={{ y }}
        className="relative w-full h-full"
      >
        <Image
          src="/images/1000038574.jpg"
          alt="background"
          fill
          priority
          className="object-cover scale-110"
        />
      </motion.div>
    </div>
  );
}