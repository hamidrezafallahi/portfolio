import { getTranslations } from 'next-intl/server';

import { highlights } from '@/contents/highlights/data';
import ScrollReveal from '@components/ui/ScrollReveal';
import SectionAmbientBackground from '@components/ui/SectionAmbientBackground';

export default async function HighlightsSection(props: { locale: string }) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "Highlights",
  });

  return (
    <section
      id="highlight"
      className="relative overflow-hidden section-padding"
    >
      <SectionAmbientBackground />

      <div className="relative section-container">

        {/* Grid */}
        <div className="gap-6 grid lg:grid-cols-3 mt-12">
          {highlights.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              direction="left"
            >
              <article
                className="group flex flex-col hover:shadow-xl p-8 rounded-3xl h-full transition hover:-translate-y-1 theme-card"
              >

                <div className="font-extrabold text-primary-theme text-4xl sm:text-5xl">
                  {t(item.title)}
                </div>

                <h3 className="mt-4 font-semibold text-theme text-xl">
                  {t(item.subtitle)}
                </h3>

                <p className="flex-1 mt-4 text-muted text-sm leading-7">
                  {t(item.description)}
                </p>

              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}