import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import ScrollReveal from '@components/ui/ScrollReveal';

export default async function ContactSection(props: { locale: string }) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "Contact",
  });

  return (
    <section id="contact" className="bg-surface section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative hover:shadow-xl mx-auto p-8 sm:p-12 max-w-3xl overflow-hidden text-center transition hover:-translate-y-1 theme-card">
            {/* subtle glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,var(--primary-color)_0%,transparent_70%)] opacity-10" />

            <div className="relative">
              <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
                {t("badge")}
              </p>

              <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl md:text-5xl leading-tight">
                {t("title")}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-muted text-sm sm:text-base leading-8">
                {t("description")}
              </p>

              {/* CTA buttons */}

              <div className="flex sm:flex-row flex-col sm:flex-wrap justify-center gap-4 mt-10">
                <Link
                  href="mailto:hamidreza.lipar@gmail.com"
                  className="px-8 py-3.5 w-full sm:w-auto text-base theme-button-primary"
                  aria-label="Send email to Hamidreza Falahi"
                >
                  {t("email")}
                </Link>

                <Link
                  href="https://t.me/hamidrezafalahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Hamidreza Falahi on Telegram"
                  className="px-8 py-3.5 w-full sm:w-auto text-base transition hover:-translate-y-0.5 theme-button-secondary"
                >
                  {t("telegram")}
                </Link>

                <Link
                  href="https://www.linkedin.com/in/hamidreza-falahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Hamidreza Falahi on LinkedIn"
                  className="px-8 py-3.5 w-full sm:w-auto text-base transition hover:-translate-y-0.5 theme-button-secondary"
                >
                  {t("linkedin")}
                </Link>

                <Link
                  href="https://github.com/hamidrezafalahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hamidreza Falahi on GitHub"
                  className="px-8 py-3.5 w-full sm:w-auto text-base transition hover:-translate-y-0.5 theme-button-secondary"
                >
                  {t("github")}
                </Link>

                <Link
                  href="https://www.npmjs.com/~hamidrezafalahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hamidreza Falahi on npm"
                  className="px-8 py-3.5 w-full sm:w-auto text-base transition hover:-translate-y-0.5 theme-button-secondary"
                >
                  {t("npm")}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
