export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <div className="mx-auto px-6 container">
        <h2 className="mb-12 font-bold text-4xl text-center">
          Featured Projects
        </h2>

        <div className="gap-8 grid lg:grid-cols-2">
          <ProjectCard
            title="Enterprise ERP"
            description="Dynamic forms, workflows, reporting, caching, permissions and enterprise-scale architecture."
          />

          <ProjectCard
            title="E-Commerce Platform"
            description="Next.js storefront with ASP.NET Core backend, DDD architecture and SEO optimization."
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group p-8 border rounded-3xl transition hover:-translate-y-2">
      <h3 className="font-bold text-2xl">{title}</h3>

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}