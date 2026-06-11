import { getTranslations } from 'next-intl/server';

const highlights = [
  {
    key: 'experience',
  },
  {
    key: 'projects',
  },
  {
    key: 'technical',
  },
];
export default async function HighlightsSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'Highlights' });
 

  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        <div className="gap-6 grid md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.key}
              className="hover:shadow-xl p-8 rounded-3xl transition hover:-translate-y-1 theme-card"
            >
              <div className="font-extrabold text-primary-theme text-4xl sm:text-5xl">
                {t(`${item.key}.title`)}
              </div>
              <h3 className="mt-4 font-semibold text-theme text-xl">
                {t(`${item.key}.subtitle`)}
              </h3>
              <p className="mt-4 text-[15px] text-muted leading-relaxed">
                {t(`${item.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}