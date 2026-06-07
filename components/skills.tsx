const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Prisma",
  "Drizzle",
  "TanStack Query",
  "TRPC",
  "Zustand",
  "Tailwind",
  "ShadcnUI",
  "Mastra.ai",
  "Claude API",
  "Docker",
  "AWS",
  "SST",
  "GitHub Actions",
];

export default function Skills() {
  return (
    <section>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Skills
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {skills.map((skill) => (
          <span key={skill} className="font-mono text-xs text-fg/55">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
