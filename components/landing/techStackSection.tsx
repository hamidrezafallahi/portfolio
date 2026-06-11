import { getTranslations } from 'next-intl/server';

import ScrollReveal from '@components/ui/ScrollReveal';

const stacks = [
  { key: "frontend" },
  { key: "state" },
  { key: "ui" },
  { key: "architecture" },
  { key: "backend" },
  { key: "performance" },
];

export default async function TechStackSection(props: { locale: string }) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "TechStack",
  });

  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
            {t("badge")}
          </p>

          <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* Grid */}

        <div className="gap-6 grid md:grid-cols-2 xl:grid-cols-3 mt-12">
          {stacks.map((group, index) => (
            <ScrollReveal key={group.key} delay={index * 0.1}>
              <article
                className="flex flex-col hover:shadow-xl p-8 rounded-3xl h-full transition hover:-translate-y-1 theme-card"
              >
                <h3 className="font-bold text-theme text-xl">
                  {t(`${group.key}.title`)}
                </h3>

                <div className="flex flex-wrap gap-2 mt-6">
                  {t(`${group.key}.items`)
                    .split(",")
                    .map((item: string) => (
                      <span
                        key={item}
                        className="text-sm hover:scale-105 transition theme-badge"
                      >
                        {item.trim()}
                      </span>
                    ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
