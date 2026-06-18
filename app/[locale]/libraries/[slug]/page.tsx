import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { libraries } from '@/contents/libraries/data';
import MediaGallery from '@components/ui/MediaGallery';
import ScrollReveal from '@components/ui/ScrollReveal';

function getLibrary(slug: string) {
  return libraries.find((x) => x.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: "fa" | "en" }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const library = getLibrary(slug);
  if (!library) return {};
  const t = await getTranslations({ locale, namespace: "library" });
  return { title: t(library.name) };
}

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: "fa" | "en" }>;
}) {
  const { slug, locale } = await params;
  const library = getLibrary(slug);

  if (!library) notFound();

  const t = await getTranslations({ locale, namespace: "library" });

  return (
    <main className="w-full">
      <section className="section-padding">
        <div className="section-container">

          <ScrollReveal>
            <h1 className="font-extrabold text-primary-theme text-4xl md:text-6xl">
              {t(library.name)}
            </h1>
            <p className="mt-6 max-w-3xl text-muted text-lg leading-8">
              {t(library.description)}
            </p>
          </ScrollReveal>

          {library.media && library.media.length > 0 && (
            <ScrollReveal delay={0.2}>
              <MediaGallery media={library.media}  source='library' />
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.3}>
            <section className="mt-12 p-8 rounded-3xl theme-card">
              <h2 className="font-bold text-theme text-2xl">
                {locale === "fa" ? "ویژگی‌ها" : "Features"}
              </h2>
              <div className="space-y-4 mt-6">
                {library.features.map((item, index) => (
                  <p key={index} className="text-muted">
                    ✓ {t(item)}
                  </p>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <section className="mt-8 p-8 rounded-3xl theme-card">
              <h2 className="font-bold text-theme text-2xl">
                {locale === "fa" ? "نحوه استفاده" : "Usage"}
              </h2>
              <p className="mt-4 text-muted leading-7">
                {t(library.usageExample)}
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <section className="flex gap-4 mt-10">
              {library.github && (
                <a
                  href={library.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl transition hover:-translate-y-1 theme-card"
                >
                  GitHub
                </a>
              )}
              {library.npm && (
                <a
                  href={library.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl transition hover:-translate-y-1 theme-card"
                >
                  NPM
                </a>
              )}
            </section>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}