"use client";

import Header from "@/components/header";
import Bio from "@/components/bio";
import WorkSection from "@/components/work-section";
import Skills from "@/components/skills";

const Divider = () => <div className="my-10 border-t border-divider" />;

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Header />
        <Divider />
        <Bio />
        <Divider />
        <WorkSection />
        <Divider />
        <Skills />
        <Divider />
        <footer className="flex gap-5 font-mono text-xs text-muted">
          <a
            href="https://github.com/harish-khandre"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/harish-khandre/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            linkedin
          </a>
          <a
            href="mailto:1.harishkhandre@gmail.com"
            className="transition-colors hover:text-fg"
          >
            email
          </a>
        </footer>
      </div>
    </main>
  );
}
