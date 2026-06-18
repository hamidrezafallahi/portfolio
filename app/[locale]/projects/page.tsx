import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { projects } from '@/contents/projects/data';
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
        ? "پروژه‌ها | حمیدرضا فلاحی"
        : "Projects | Hamidreza Fallahi",
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{
    locale: "fa" | "en";
  }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({locale,namespace:"project"});

  return (
    <main className="w-full">
      <section className="relative overflow-hidden section-padding">
        <div className="relative section-container">
          <ScrollReveal>
            <header className="mb-14">
              <h1
                className="font-extrabold text-primary-theme text-4xl md:text-5xl"
              >
                {locale === "fa" ? "پروژه‌ها" : "Projects"}
              </h1>

              <p
                className="mt-5 max-w-2xl text-muted leading-relaxed"
              >
                {locale === "fa"
                  ? "نمونه‌ای از پروژه‌ها و تجربه‌های توسعه نرم‌افزاری"
                  : "Selected software projects and development experience"}
              </p>
            </header>
          </ScrollReveal>

          <div
            className="gap-6 grid md:grid-cols-2"
          >
            {projects.map((project, index) => {
              console.log(project)
              return (
              <ScrollReveal
                key={project.slug}
                delay={index * 0.12}
                direction="up"
              >
                <Link href={`/${locale}/projects/${project.slug}`}>
                  <article
                    className="p-8 rounded-3xl h-full transition hover:-translate-y-2 theme-card"
                  >
                    <h2
                      className="font-bold text-theme text-2xl"
                    >
                      {t(project.title)}
                    </h2>

                    <p
                      className="mt-4 text-muted leading-7"
                    >
                      {t(project.description)} 
                    </p>

                    <div
                      className="flex flex-wrap gap-2 mt-6"
                    >
                      {project.stack.map((item) => (
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
            )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
