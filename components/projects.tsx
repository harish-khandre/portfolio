import Link from "next/link";

const projects = [
  {
    title: "MGNREGA RAG Analytics Platform",
    description:
      "AI-powered RAG over large-scale NREGA government datasets. Natural language querying across millions of records with dynamic graph generation and memory workflows.",
    tags: ["Mastra.ai", "Claude API", "PostgreSQL"],
    link: null,
  },
  {
    title: "Agentic Research Pipeline",
    description:
      "Multi-source data aggregation with Mastra.ai agent workflows for large-scale document analysis. Integrated Claude API Anthropic Message Batches for structured output extraction. Built entirely with Claude Code.",
    tags: ["Python", "Mastra.ai", "Anthropic Batches"],
    link: null,
  },
  {
    title: "ShelterSoul",
    description:
      "Platform connecting NGOs with mentally challenged homeless individuals.",
    tags: ["Next.js", "AWS S3", "Resend"],
    link: "https://www.sheltersoul.me/",
  },
];

export function Projects() {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.title}>
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              {project.title} ↗
            </Link>
          ) : (
            <span className="font-sans text-sm font-medium text-fg">
              {project.title}
            </span>
          )}
          <p className="mt-1 font-sans text-sm text-fg/65">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
