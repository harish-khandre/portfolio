"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Bio from "@/components/bio";
import WorkSection from "@/components/work-section";
import Skills from "@/components/skills";

const Divider = () => <div className="my-12 border-t border-divider" />;

const socialLinks = [
  {
    label: "github",
    href: "https://github.com/harish-khandre",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/harish-khandre/",
    external: true,
  },
  { label: "email", href: "mailto:1.harishkhandre@gmail.com", external: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <div className="mx-auto max-w-[640px] px-4 py-20 sm:px-6">
        <Header />

        <motion.nav
          aria-label="Social links"
          className="mt-5 flex items-center gap-1 font-mono text-xs text-muted"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        >
          {socialLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-1">
              {i > 0 && <span className="select-none opacity-30">·</span>}
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="underline-hover transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </motion.nav>

        <Divider />
        <Bio />
        <Divider />
        <WorkSection />
        <Divider />
        <Skills />

        <div className="mt-16 space-y-4">
          <div className="rounded-md border border-divider p-5 text-center">
            <p className="mb-2 font-sans text-sm text-fg/45">
              Want to build something together?
            </p>
            <Link
              href="mailto:1.harishkhandre@gmail.com"
              className="font-mono text-sm text-accent transition-colors hover:text-accent/70"
            >
              1.harishkhandre@gmail.com →
            </Link>
          </div>
          <div className="flex items-center justify-between font-mono text-xs text-muted/60">
            <span>Harish Khandre</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
