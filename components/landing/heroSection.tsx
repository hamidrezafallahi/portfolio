import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function HeroSection(props: {
  params: Promise<{locale: string }>;
}) {
    const { locale } = await props.params;
  const t = await getTranslations({ locale:locale, namespace: 'Hero' });
  return (
    <section
      id="home"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="-z-10 absolute inset-0 bg-grid-theme opacity-40" />

      {/* Glow Orb */}
      <div className="top-24 left-1/2 -z-10 absolute bg-[radial-gradient(circle,var(--primary-color)_0%,transparent_70%)] opacity-25 blur-3xl rounded-full w-[18rem] sm:w-[24rem] lg:w-136 h-72 sm:h-96 lg:h-136 -translate-x-1/2" />

      <div className="items-center gap-14 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 section-container">
        <div className="text-center lg:text-right">
          <span className="inline-flex bg-surface backdrop-blur-md px-4 py-2 border border-primary-theme/25 rounded-full text-muted text-sm">
            {t('badge')}
          </span>

          <h1 className="mt-6 font-extrabold text-theme text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {t('name')}
            <span className="block mt-3 font-medium text-muted text-lg sm:text-2xl">
              {t('tagline')}
            </span>
          </h1>

          <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-muted text-sm sm:text-base leading-8">
            {t('description')}
          </p>

          <div className="sm:flex sm:flex-wrap sm:justify-center lg:justify-start gap-4 grid grid-cols-2 mt-8">
            <Link
              href="#projects"
              className="px-8 py-3.5 text-base theme-button-primary"
            >
              {t('ctaProjects')}
            </Link>

            <Link
              href="#contact"
              className="px-8 py-3.5 text-base theme-button-secondary"
            >
              {t('ctaContact')}
            </Link>

            <Link
              href="/documents/hamidreza-fallahi-resume-1405-01.pdf"
              target="_blank"
              className="flex justify-center items-center gap-2 col-span-2 sm:col-span-1 hover:bg-primary-theme px-8 py-3.5 hover:text-white text-base theme-button-secondary"
            >
              {t('ctaResume')}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-3 mt-10 text-muted text-sm">
            <a
              href="https://github.com/hamidrezafallahi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-theme transition theme-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hamidreza-falahi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-theme transition theme-link"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/hamidrezafalahi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-theme transition theme-link"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute bg-[radial-gradient(circle,var(--primary-color)_0%,transparent_70%)] opacity-30 blur-3xl rounded-full w-64 sm:w-80 h-64 sm:h-80 -translate-x-4" />

          <div className="shadow-xl backdrop-blur-xl p-4 border border-primary-theme/15 rounded-3xl theme-card">
            <Image
              src="/images/perfect tail.png"
              alt={t('imageAlt')}
              width={420}
              height={420}
              priority
              className="rounded-2xl w-65 sm:w-[320px] lg:w-95 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}