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
    <section className="space-y-4">
      {skillGroups.map((group) => (
        <div key={group.label} className="flex gap-6">
          <span className="w-20 shrink-0 font-mono text-xs text-muted/50 pt-px">
            {group.label}
          </span>
          <p className="font-mono text-xs leading-5 text-fg/50">
            {group.skills.join(" · ")}
          </p>
        </div>
      ))}
    </section>
  );
}
