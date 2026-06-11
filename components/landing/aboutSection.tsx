import { getTranslations } from 'next-intl/server';

import ScrollReveal from '@components/ui/ScrollReveal';

export default async function AboutSection(props: { locale: string }) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "About",
  });

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="items-start gap-10 grid lg:grid-cols-[1fr_1.2fr]">
          {/* Left side title */}

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

          {/* Right side content */}

          <ScrollReveal delay={0.15}>
            <div className="space-y-6 text-theme text-sm sm:text-base leading-8">
              <p className="opacity-90">{t("paragraph1")}</p>

              <p className="opacity-90">{t("paragraph2")}</p>

              <p className="opacity-90">{t("paragraph3")}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
