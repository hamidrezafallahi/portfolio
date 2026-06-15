import { getTranslations } from 'next-intl/server';

import ScrollReveal from '@components/ui/ScrollReveal';

const highlights = [
  {
    key: "experience",
  },
  {
    key: "projects",
  },
  {
    key: "technical",
  },
];

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

{/* <SectionAmbientBackground /> */}


<div className="relative section-container">
        <div
          className="items-stretch gap-6 grid md:grid-cols-3"
        >
          {highlights.map((item, index) => (
            <ScrollReveal key={item.key} delay={index * 0.15} direction='left'>
              <article
                className="hover:shadow-xl p-8 rounded-3xl h-full transition hover:-translate-y-1 theme-card"
              >
                <div
                  className="font-extrabold text-primary-theme text-4xl sm:text-5xl"
                >
                  {t(`${item.key}.title`)}
                </div>

                <h3
                  className="mt-4 font-semibold text-theme text-xl"
                >
                  {t(`${item.key}.subtitle`)}
                </h3>

                <p
                  className="mt-4 text-[15px] text-muted leading-relaxed"
                >
                  {t(`${item.key}.description`)}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
