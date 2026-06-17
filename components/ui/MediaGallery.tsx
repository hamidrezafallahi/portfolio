"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import type { MediaItem } from '@/types';

import ScrollReveal from './ScrollReveal';

export default function MediaGallery({
  media}: {
  media?: MediaItem[]
}) {
  const t = useTranslations("project")
  if (!media?.length) return null;
console.log(media[0].alt)
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
                  alt={t(item.alt)}
                  width={1200}
                  height={800}
                  loading="eager"
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
