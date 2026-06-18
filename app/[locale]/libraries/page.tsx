import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { libraries } from '@/contents/libraries/data';
import ScrollReveal from '@components/ui/ScrollReveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "fa" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "fa"
        ? "کتابخانه‌ها | حمیدرضا فلاحی"
        : "Libraries | Hamidreza Fallahi",
  };
}

export default async function LibrariesPage({
  params,
}: {
  params: Promise<{ locale: "fa" | "en" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "library" });

  return (
    <main className="w-full">
      <section className="relative overflow-hidden section-padding">
        <div className="relative section-container">
          <ScrollReveal>
            <header className="mb-14">
              <h1 className="font-extrabold text-primary-theme text-4xl md:text-5xl">
                {locale === "fa" ? "کتابخانه‌ها" : "Libraries"}
              </h1>
              <p className="mt-5 max-w-2xl text-muted leading-relaxed">
                {locale === "fa"
                  ? "پکیج‌ها و ابزارهای متن‌باز ساخته شده توسط من"
                  : "Open source packages and tools I have built and published"}
              </p>
            </header>
          </ScrollReveal>

          <div className="gap-6 grid md:grid-cols-2">
            {libraries.map((lib, index) => (
              <ScrollReveal key={lib.slug} delay={index * 0.12} direction="up">
                <Link href={`/${locale}/libraries/${lib.slug}`}>
                  <article className="p-8 rounded-3xl h-full transition hover:-translate-y-2 theme-card">
                    <h2 className="font-bold text-theme text-2xl">
                      {t(lib.name)}
                    </h2>
                    <p className="mt-4 text-muted leading-7">
                      {t(lib.description)}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {lib.tech.map((item) => (
                        <span
                          key={item}
                          className="bg-primary-theme/10 px-3 py-1 rounded-full text-primary-theme text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}