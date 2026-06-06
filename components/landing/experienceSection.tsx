export default function ExperienceSection() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-950 py-28">
      <div className="mx-auto px-6 container">
        <div className="gap-8 grid md:grid-cols-3">
          <StatCard
            title="2.5+"
            subtitle="Years Experience"
          />

          <StatCard
            title="ERP"
            subtitle="Enterprise Resource Planning"
          />

          <StatCard
            title="Full Stack"
            subtitle="Next.js + ASP.NET Core"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white dark:bg-black p-8 border rounded-3xl text-center">
      <div className="font-bold text-5xl">{title}</div>

      <div className="mt-4 text-zinc-500">{subtitle}</div>
    </div>
  );
}