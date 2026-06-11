import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import ScrollReveal from '@components/ui/ScrollReveal';

export default async function OpenSourceSection(props: { locale: string }) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "OpenSource",
  });

  return (
    <section id="opensource" className="bg-surface section-padding">
      <div className="section-container">
        <div className="lg:items-center gap-8 grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left title */}

          <ScrollReveal>
            <div>
              <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
                {t("badge")}
              </p>

              <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl leading-tight">
                {t("title")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Card */}

          <ScrollReveal delay={0.15}>
            <article
              className="relative hover:shadow-xl p-8 rounded-3xl overflow-hidden transition hover:-translate-y-1 theme-card"
            >
              {/* subtle glow background */}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle,var(--primary-color)_0%,transparent_70%)] opacity-10"
              />

              {/* content */}

              <div className="relative">
                <h3 className="font-bold text-theme text-2xl">
                  {t("project.title")}
                </h3>

                <p className="mt-4 text-muted text-sm sm:text-base leading-7">
                  {t("project.description")}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {t("project.tags")
                    .split(",")
                    .map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs hover:scale-105 transition theme-badge"
                      >
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
                    {t("project.button")}
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
