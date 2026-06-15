import { notFound } from 'next/navigation';

import { projects } from '@/contents/projects/data';
import MediaGallery from '@components/ui/MediaGallery';
import ScrollReveal from '@components/ui/ScrollReveal';

function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: "fa" | "en";
  }>;
}) {
  const { slug, locale } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

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
md:text-6xl
"
            >
              {project.title[locale]}
            </h1>

            <p
              className="
mt-6
max-w-3xl
text-muted
text-lg
leading-8
"
            >
              {project.description[locale]}
            </p>
          </ScrollReveal>

          {project.media && (
            <ScrollReveal delay={0.2}>
              <div
                className="
mt-12
overflow-hidden
theme-card
rounded-3xl
"
              >
                <MediaGallery
 media={project.media}
 locale={locale}
/>
              </div>
            </ScrollReveal>
          )}

          <div className="gap-8 grid md:grid-cols-2 mt-16">
            <ScrollReveal>
              <div className="p-8 rounded-3xl theme-card">
                <h2 className="font-bold text-theme text-2xl">Problem</h2>

                <p className="mt-4 text-muted leading-8">
                  {project.problem[locale]}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-3xl theme-card">
                <h2 className="font-bold text-theme text-2xl">Solution</h2>

                <p className="mt-4 text-muted leading-8">
                  {project.solution[locale]}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <section className="mt-12 p-8 rounded-3xl theme-card">
            <h2 className="font-bold text-theme text-2xl">Stack</h2>

            <div className="flex flex-wrap gap-3 mt-5">
              {project.stack.map((x) => (
                <span
                  key={x}
                  className="
border
px-4
py-2
rounded-full
text-primary-theme
"
                >
                  {x}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
