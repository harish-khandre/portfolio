import Link from "next/link";
import { Tech } from "@/components/ui/highlight";

const projects = [
  {
    title: "MGNREGA RAG Analytics Platform",
    description: (
      <>
        AI-powered <Tech>RAG</Tech> over large-scale NREGA government datasets.
        Natural language querying across millions of records with dynamic graph
        generation and memory workflows.
      </>
    ),
    tags: ["Mastra.ai", "Claude API", "PostgreSQL"],
    github: "https://github.com/harish-khandre/MGNREGA-RAG",
    live: null,
    badge: null,
  },
  {
    title: "Agentic Research Pipeline",
    description: (
      <>
        Multi-source data aggregation with <Tech>Mastra.ai</Tech> agent
        workflows for large-scale document analysis. Integrated{" "}
        <Tech>Anthropic Message Batches</Tech> for structured output extraction.
        Built entirely with <Tech>Claude Code</Tech>.
      </>
    ),
    tags: ["Python", "Mastra.ai", "Anthropic Batches"],
    github: null,
    live: null,
    badge: "private",
  },
  {
    title: "ShelterSoul",
    description: (
      <>
        Full-stack platform connecting NGOs with mentally challenged homeless
        individuals. Built with <Tech>Next.js</Tech> App Router, file uploads
        via <Tech>AWS S3</Tech>, and transactional email through{" "}
        <Tech>Resend</Tech>.
      </>
    ),
    tags: ["Next.js", "AWS S3", "Resend"],
    github: "https://github.com/harish-khandre/sheltersoul",
    live: "https://www.sheltersoul.me/",
    badge: null,
  },
];

export function Projects() {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.title}>
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-sm font-medium text-fg">
              {project.title}
            </span>
            {project.badge && (
              <span className="font-mono text-[10px] text-muted/50 bg-fg/[0.05] px-1.5 py-0.5 rounded-[3px]">
                {project.badge}
              </span>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                live ↗
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-hover font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                github ↗
              </Link>
            )}
          </div>
          <p className="mt-1.5 font-sans text-sm leading-6 text-fg/60">
            {project.description}
          </p>
          <p className="mt-2 font-mono text-xs text-muted/60">
            {project.tags.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
}
