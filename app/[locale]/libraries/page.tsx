import type { Metadata } from 'next';
import Link from 'next/link';

import { libraries } from '@/contents/libraries/data';
import ScrollReveal from '@components/ui/ScrollReveal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: "fa" | "en";
  }>;
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
  params: Promise<{
    locale: "fa" | "en";
  }>;
}) {
  const { locale } = await params;

  return (
    <main className="w-full">
      <section className="relative overflow-hidden section-padding">
        <div className="relative section-container">
          <ScrollReveal>
            <h1
              className="
font-extrabold
text-primary-theme
text-4xl
md:text-5xl
"
            >
              {locale === "fa" ? "کتابخانه‌ها" : "Libraries"}
            </h1>

            <p className="mt-5 max-w-2xl text-muted">
              {locale === "fa"
                ? "پکیج‌ها و ابزارهای متن‌باز ساخته شده توسط من"
                : "Open source packages and tools created by me"}
            </p>
          </ScrollReveal>

          <div
            className="
grid
md:grid-cols-2
gap-6
mt-12
"
          >
            {libraries.map((lib, index) => (
              <ScrollReveal key={lib.slug} delay={index * 0.12}>
                <Link href={`/${locale}/libraries/${lib.slug}`}>
                  <article
                    className="
theme-card
rounded-3xl
p-8
hover:-translate-y-2
transition
h-full
"
                  >
                    <h2
                      className="
text-theme
text-2xl
font-bold
"
                    >
                      {lib.name[locale]}
                    </h2>

                    <p
                      className="
mt-4
text-muted
leading-7
"
                    >
                      {lib.description[locale]}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {lib.tech.map((t) => (
                        <span
                          key={t}
                          className="
px-3
py-1
rounded-full
text-primary-theme
bg-primary-theme/10
text-sm
"
                        >
                          {t}
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
