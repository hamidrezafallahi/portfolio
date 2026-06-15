import { notFound } from 'next/navigation';

import { libraries } from '@/contents/libraries/data';
import MediaGallery from '@components/ui/MediaGallery';
import ScrollReveal from '@components/ui/ScrollReveal';

function getLibrary(slug: string) {
  return libraries.find((x) => x.slug === slug);
}

export default async function LibraryPage({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: "fa" | "en";
  }>;
}) {
  const { slug, locale } = await params;

  const library = getLibrary(slug);

  if (!library) notFound();

  return (
    <main className="w-full">
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <h1
              className="
font-extrabold
text-primary-theme
text-4xl
md:text-6xl
"
            >
              {library.name[locale]}
            </h1>

            <p
              className="
mt-6
text-muted
max-w-3xl
text-lg
leading-8
"
            >
              {library.description[locale]}
            </p>
          </ScrollReveal>

          {library.media && (
            <ScrollReveal delay={0.2}>
              <MediaGallery media={library.media} locale={locale} />
            </ScrollReveal>
          )}

          <section
            className="
theme-card
rounded-3xl
p-8
mt-12
"
          >
            <h2 className="font-bold text-theme text-2xl">
              {locale === "fa" ? "ویژگی‌ها" : "Features"}
            </h2>

            <div className="space-y-4 mt-6">
              {library.features.map((item, index) => (
                <p key={index} className="text-muted">
                  ✓ {item[locale]}
                </p>
              ))}
            </div>
          </section>

          <section
            className="
theme-card
rounded-3xl
p-8
mt-8
"
          >
            <h2 className="font-bold text-theme text-2xl">Usage</h2>

            <p className="mt-4 text-muted">{library.usageExample[locale]}</p>
          </section>

          <section
            className="
flex
gap-4
mt-10
"
          >
            {library.github && (
              <a
                href={library.github}
                target="_blank"
                className="px-5 py-3 rounded-xl theme-card"
              >
                Github
              </a>
            )}

            {library.npm && (
              <a
                href={library.npm}
                target="_blank"
                className="px-5 py-3 rounded-xl theme-card"
              >
                NPM
              </a>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
