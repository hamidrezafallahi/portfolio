import { getTranslations } from 'next-intl/server';

import ScrollReveal from '@components/ui/ScrollReveal';

const experiences = [
  { key: "erp" },
  { key: "ecommerce" },
  { key: "opensource" },
];

export default async function ExperienceTimelineSection(props: {
  locale: string;
}) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "Experience",
  });

  return (
    <section
    id="experience"
    className="bg-surface section-padding">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
            {t("badge")}
          </p>

          <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* Timeline wrapper */}

        <div className="relative space-y-6 mt-12">
          {/* vertical line */}
          <div className="top-0 bottom-0 left-5 absolute bg-primary-theme/20 w-px" />

          {experiences.map((item, index) => (
            <ScrollReveal key={item.key} delay={index * 0.15} direction='right'>
              <article
                className="relative gap-4 grid md:grid-cols-[180px_1fr] p-8 pl-12 rounded-3xl theme-card"
              >
                {/* dot */}
                <span
                  className="top-10 left-3 absolute bg-primary-theme shadow-md rounded-full w-3 h-3"
                />

                {/* period */}

                <div className="font-medium text-primary-theme text-sm">
                  {t(`${item.key}.period`)}
                </div>

                {/* content */}

                <div>
                  <h3 className="font-bold text-theme text-xl">
                    {t(`${item.key}.role`)}

                    <span className="mx-2 text-muted">—</span>

                    <span className="text-muted">
                      {t(`${item.key}.company`)}
                    </span>
                  </h3>

                  <p className="mt-3 text-muted text-sm leading-7">
                    {t(`${item.key}.description`)}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
