import { getTranslations } from 'next-intl/server';

export default async function AboutSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'About' });
  return (
    <section className="bg-surface section-padding">
      <div className="section-container">
        <div className="items-start gap-10 grid lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
              {t('badge')}
            </p>
            <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl leading-tight">
              {t('title')}
            </h2>
          </div>

          <div className="space-y-6 text-theme text-sm sm:text-base leading-8">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}