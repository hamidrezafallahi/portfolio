export default function TechStackSection() {
  const techs = [
    "Next.js",
    "React",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "Tailwind",
    "PWA",
    "Firebase",
    "ASP.NET Core",
    "DDD",
    "MediatR",
    "Entity Framework",
  ];

  return (
    <section className="py-28">
      <div className="mx-auto px-6 container">
        <h2 className="mb-12 font-bold text-4xl text-center">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 border rounded-xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}