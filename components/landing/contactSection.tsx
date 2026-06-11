import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ContactSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'Contact' });

  return (
    <section id="contact" className="bg-surface section-padding">
      <div className="section-container">
        <div className="mx-auto p-8 sm:p-12 max-w-3xl text-center theme-card">
          <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
            {t('badge')}
          </p>

          <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl md:text-5xl leading-tight">
            {t('title')}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted text-sm sm:text-base leading-8">
            {t('description')}
          </p>

          <div className="flex sm:flex-row flex-col sm:flex-wrap justify-center gap-4 mt-10">
            <Link
              href="mailto:your-email@example.com"
              className="px-8 py-3.5 w-full sm:w-auto text-base theme-button-primary"
            >
              {t('email')}
            </Link>

            <Link
              href="https://t.me/hamidrezafalahi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 w-full sm:w-auto text-base theme-button-secondary"
            >
              {t('telegram')}
            </Link>

            <Link
              href="https://www.linkedin.com/in/hamidreza-falahi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 w-full sm:w-auto text-base theme-button-secondary"
            >
              {t('linkedin')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}