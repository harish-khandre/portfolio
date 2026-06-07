const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Zustand",
      "TanStack Query",
      "TRPC",
      "Tailwind",
      "ShadcnUI",
    ],
  },
  {
    label: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "Hono",
      "Express",
      "Prisma",
      "Drizzle",
      "Python",
      "WebSockets",
    ],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "AI & Infra",
    skills: [
      "Mastra.ai",
      "Claude API",
      "Docker",
      "AWS",
      "SST",
      "GitHub Actions",
      "Claude Code",
    ],
  },
];

export default function Skills() {
  return (
    <section>
      <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted/60">
        Skills
      </p>
      <div className="space-y-3.5">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex gap-6">
            <span className="w-20 shrink-0 pt-px font-mono text-xs text-muted/40">
              {group.label}
            </span>
            <p className="font-mono text-xs leading-5 text-fg/55">
              {group.skills.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
