import { getTranslations } from 'next-intl/server';

const stacks = [
  { key: 'frontend' },
  { key: 'state' },
  { key: 'ui' },
  { key: 'architecture' },
  { key: 'backend' },
  { key: 'performance' },
];
 
  export default async function TechStackSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'TechStack' });
  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
            {t('badge')}
          </p>
          <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl">
            {t('title')}
          </h2>
        </div>

        <div className="gap-6 grid md:grid-cols-2 xl:grid-cols-3 mt-12">
          {stacks.map((group) => (
            <article
              key={group.key}
              className="p-8 rounded-3xl theme-card"
            >
              <h3 className="font-bold text-theme text-xl">
                {t(`${group.key}.title`)}
              </h3>

              <div className="flex flex-wrap gap-2 mt-6">
                {t(`${group.key}.items`).split(',').map((item: string) => (
                  <span
                    key={item}
                    className="text-sm theme-badge"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}