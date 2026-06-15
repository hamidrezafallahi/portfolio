"use client";

import Image from 'next/image';

import type { MediaItem } from '@/types';

import ScrollReveal from './ScrollReveal';

export default function MediaGallery({
  media,
  locale,
}: {
  media?: MediaItem[];
  locale: "fa" | "en";
}) {
  if (!media?.length) return null;

  return (
    <section className="mt-16">
      <div
        className="gap-6 grid md:grid-cols-2"
      >
        {media.map((item, index) => (
          <ScrollReveal key={`${item.type}-${item.src}`} delay={index * 0.1}>
            <div
              className="rounded-3xl overflow-hidden theme-card"
            >
              {item.type === "image" && (
                <Image
                  src={item.src}
                  alt={item.alt[locale]}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              )}

              {item.type === "video" && (
                <video
                  controls
                  preload="metadata"
                  className="w-full h-auto"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
