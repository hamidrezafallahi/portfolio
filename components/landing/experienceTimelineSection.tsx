import { getTranslations } from 'next-intl/server';

const experiences = [
  { key: 'erp' },
  { key: 'ecommerce' },
  { key: 'opensource' },
];
 
  export default async function ExperienceTimelineSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'Experience' });

  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
            {t('badge')}
          </p>
          <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl">
            {t('title')}
          </h2>
        </div>

        <div className="space-y-6 mt-12">
          {experiences.map((item, index) => (
            <article
              key={item.key}
              className="gap-4 grid md:grid-cols-[180px_1fr] p-8 rounded-3xl theme-card"
            >
              <div className="font-medium text-primary-theme text-sm">
                {t(`${item.key}.period`)}
              </div>

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
          ))}
        </div>
      </div>
    </section>
  );
}