import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function OpenSourceSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'OpenSource' });
  return (
    <section id="opensource" className="bg-surface section-padding">
      <div className="section-container">
        <div className="lg:items-center gap-8 grid lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
              {t('badge')}
            </p>
            <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl leading-tight">
              {t('title')}
            </h2>
          </div>

          <article className="p-8 rounded-3xl theme-card">
            <h3 className="font-bold text-theme text-2xl">
              {t('project.title')}
            </h3>

            <p className="mt-4 text-muted text-sm sm:text-base leading-7">
              {t('project.description')}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {t('project.tags').split(',').map((tag: string) => (
                <span key={tag} className="text-xs theme-badge">
                  {tag.trim()}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="https://github.com/hamidrezafallahi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 font-medium text-sm theme-button-secondary"
              >
                {t('project.button')}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}