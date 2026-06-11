import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { ProjectCardMotion } from '@components/ui/ProjectCardMotion';
import StaggerContainer from '@components/ui/StaggerContainer';

const projects = [
  { key: "erp" },
  { key: "ecommerce" },
  { key: "designSystem" },
];

export default async function FeaturedProjectsSection(props: {
  locale: string;
}) {
  const { locale } = props;

  const t = await getTranslations({
    locale,
    namespace: "Projects",
  });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-primary-theme text-sm uppercase tracking-wide">
            {t("badge")}
          </p>

          <h2 className="mt-3 font-bold text-theme text-3xl sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-muted text-sm sm:text-base leading-7">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <StaggerContainer>
          <div className="gap-6 grid lg:grid-cols-3 mt-12">
            {projects.map((project) => (
              <ProjectCardMotion key={project.key}>
                <article
                  className="group flex flex-col hover:shadow-xl p-8 rounded-3xl h-full transition hover:-translate-y-1 theme-card"
                >
                  <h3 className="font-bold text-theme text-xl">
                    {t(`${project.key}.title`)}
                  </h3>

                  <p className="flex-1 mt-4 text-muted text-sm leading-7">
                    {t(`${project.key}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {t(`${project.key}.tags`)
                      .split(",")
                      .map((tag: string) => (
                        <span key={tag} className="text-xs theme-badge">
                          {tag.trim()}
                        </span>
                      ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-8 font-medium text-primary-theme text-sm transition group-hover:translate-x-1"
                  >
                    {t("viewDetails")}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </ProjectCardMotion>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
