# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Harish Khandre's portfolio as a paco.me-inspired minimal single-column page with Syne/DM Mono/DM Sans fonts, warm dark palette, and a shadcn-style Radix Tabs switcher for experience/projects.

**Architecture:** Single-column vertical scroll in `app/page.tsx`, max-w-2xl centered. Header → Bio → WorkSection (Tabs) → Skills. New components replace all existing tab-demo machinery. Radix UI tabs replace the custom Framer Motion tab stack.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, @radix-ui/react-tabs, Google Fonts (Syne + DM Mono + DM Sans)

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Modify | `package.json` | Add @radix-ui/react-tabs |
| Modify | `app/layout.tsx` | Syne + DM Mono + DM Sans via next/font |
| Modify | `app/globals.css` | CSS vars for warm dark palette |
| Modify | `tailwind.config.ts` | Font families + CSS-var color tokens |
| Replace | `components/ui/tabs.tsx` | Radix Tabs with custom styling |
| Replace | `app/page.tsx` | New single-column layout shell |
| Create | `components/header.tsx` | Name, role, social links |
| Create | `components/bio.tsx` | About paragraph |
| Create | `components/work-section.tsx` | Tabs wrapper for experience + projects |
| Create | `components/experience.tsx` | Experience tab content |
| Replace | `components/projects.tsx` | Updated projects (MGNREGA, Agentic, ShelterSoul) |
| Create | `components/skills.tsx` | Skills inline list |
| Delete | `components/tabs-demo.tsx` | Replaced by page.tsx |
| Delete | `components/about-content.tsx` | Replaced by bio.tsx |
| Delete | `components/work-content.tsx` | Replaced by experience.tsx + projects.tsx |
| Delete | `components/contact-content.tsx` | Social links moved to header.tsx |
| Delete | `components/ui/animated-text.tsx` | No longer used |
| Delete | `hooks/screen-size.tsx` | No longer used |

---

### Task 1: Install dependency + configure fonts, CSS vars, Tailwind

**Files:**
- Modify: `package.json`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Install @radix-ui/react-tabs**

```bash
bun add @radix-ui/react-tabs
```

Expected: `@radix-ui/react-tabs` appears in `package.json` dependencies.

- [ ] **Step 2: Update `tailwind.config.ts`**

Replace entire file:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        divider: "rgb(var(--divider) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Update `app/globals.css`**

Replace entire file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: 12 10 9;
  --fg: 240 235 228;
  --muted: 107 101 96;
  --divider: 30 27 24;
  --surface: 22 19 16;
  --accent: 212 168 83;
}

* {
  box-sizing: border-box;
}

body {
  background-color: rgb(var(--bg));
  color: rgb(var(--fg));
}

::selection {
  background-color: rgb(var(--accent));
  color: rgb(var(--bg));
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
```

- [ ] **Step 4: Update `app/layout.tsx`**

Replace entire file:

```tsx
import type { Metadata } from "next";
import { Syne, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Harish Khandre",
  description: "Full Stack Engineer building enterprise and government platforms.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Start dev server and verify fonts load**

```bash
bun dev
```

Open `http://localhost:3000`. The page should render without errors. Font loading is confirmed when body text appears (even if layout is still old). Check browser devtools Network tab — Syne, DM_Mono, DM_Sans should all load.

- [ ] **Step 6: Commit**

```bash
git add package.json bun.lock app/layout.tsx app/globals.css tailwind.config.ts
git commit -m "feat: add radix-tabs, configure Syne/DM Mono/DM Sans fonts and warm dark palette"
```

---

### Task 2: New Tabs UI component (Radix-based)

**Files:**
- Replace: `components/ui/tabs.tsx`

- [ ] **Step 1: Replace `components/ui/tabs.tsx`**

```tsx
"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/utils/cn";

export const Tabs = RadixTabs.Root;

export const TabsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.List>) => (
  <RadixTabs.List
    className={cn(
      "flex w-full justify-between rounded-lg bg-surface p-1",
      className,
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>) => (
  <RadixTabs.Trigger
    className={cn(
      "flex-1 rounded-md px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted",
      "transition-colors data-[state=active]:bg-divider data-[state=active]:text-fg",
      className,
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.Content>) => (
  <RadixTabs.Content
    className={cn("mt-6 focus-visible:outline-none", className)}
    {...props}
  />
);
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
bunx tsc --noEmit
```

Expected: no errors related to the new tabs component.

- [ ] **Step 3: Commit**

```bash
git add components/ui/tabs.tsx
git commit -m "feat: replace custom framer-motion tabs with radix-based shadcn tabs"
```

---

### Task 3: Header component

**Files:**
- Create: `components/header.tsx`

- [ ] **Step 1: Create `components/header.tsx`**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Header() {
  return (
    <header>
      <motion.h1
        className="font-display text-3xl font-extrabold text-accent"
        {...fadeUp(0)}
      >
        Harish Khandre
      </motion.h1>
      <motion.p
        className="mt-1 font-sans text-sm text-muted"
        {...fadeUp(0.1)}
      >
        Full Stack Engineer at Pordios Labs
      </motion.p>
      <motion.div
        className="mt-4 flex gap-5 font-mono text-xs text-muted"
        {...fadeUp(0.2)}
      >
        <Link
          href="https://github.com/harish-khandre"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          github
        </Link>
        <Link
          href="https://www.linkedin.com/in/harish-khandre/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-fg"
        >
          linkedin
        </Link>
        <Link
          href="mailto:1.harishkhandre@gmail.com"
          className="transition-colors hover:text-fg"
        >
          email
        </Link>
      </motion.div>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/header.tsx
git commit -m "feat: add header component with Syne name, muted role, text social links"
```

---

### Task 4: Bio component

**Files:**
- Create: `components/bio.tsx`

- [ ] **Step 1: Create `components/bio.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";

export default function Bio() {
  return (
    <motion.p
      className="font-sans text-sm leading-relaxed text-fg/75"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      Full Stack Engineer with 2 years shipping enterprise and government
      platforms handling 20M+ records. TypeScript, React, and NestJS —
      hands-on with Claude API and AI agent workflows using Mastra.ai.
    </motion.p>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/bio.tsx
git commit -m "feat: add bio component with updated professional summary"
```

---

### Task 5: Experience component

**Files:**
- Create: `components/experience.tsx`

- [ ] **Step 1: Create `components/experience.tsx`**

```tsx
export default function Experience() {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Pordios Labs
        </span>
        <span className="font-mono text-xs text-muted">Aug 2024 – Present</span>
      </div>
      <p className="font-sans text-xs text-muted">
        Full Stack Developer · Dehradun, Uttarakhand
      </p>
      <ul className="mt-5 space-y-5">
        <li>
          <p className="font-sans text-sm font-medium text-fg">
            National Investment Pipeline (MORTH/NHIA)
          </p>
          <p className="mt-1 font-sans text-sm text-fg/65">
            Data sync and reporting workflows across 20M+ records shared with
            the Ministry of Statistics.
          </p>
        </li>
        <li>
          <p className="font-sans text-sm font-medium text-fg">
            SSC Analytics Dashboard
          </p>
          <p className="mt-1 font-sans text-sm text-fg/65">
            67% API performance improvement via Redis caching, indexing, and
            aggregation optimization. Handled data migrations from 2M to 20M+
            records.
          </p>
        </li>
        <li>
          <p className="font-sans text-sm font-medium text-fg">
            Ministry of Social Justice and Empowerment
          </p>
          <p className="mt-1 font-sans text-sm text-fg/65">
            RBAC and analytics reporting processing 12+ government scheme
            datasets to surface KPIs and operational reports.
          </p>
        </li>
        <li>
          <p className="font-sans text-sm text-fg/55">
            Also: Physics Wallah (PMC) learning platform · Char Dham security
            audit · CMS platforms with Payload CMS, SST, TRPC
          </p>
        </li>
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/experience.tsx
git commit -m "feat: add experience component with Pordios Labs work history"
```

---

### Task 6: Projects component

**Files:**
- Replace: `components/projects.tsx`

- [ ] **Step 1: Replace `components/projects.tsx`**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/projects.tsx
git commit -m "feat: update projects with MGNREGA RAG, Agentic Pipeline, ShelterSoul"
```

---

### Task 7: Skills component

**Files:**
- Create: `components/skills.tsx`

- [ ] **Step 1: Create `components/skills.tsx`**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/skills.tsx
git commit -m "feat: add skills section with current tech stack"
```

---

### Task 8: WorkSection component (tabs wrapper)

**Files:**
- Create: `components/work-section.tsx`

- [ ] **Step 1: Create `components/work-section.tsx`**

```tsx
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Experience from "@/components/experience";
import { Projects } from "@/components/projects";

export default function WorkSection() {
  return (
    <section>
      <Tabs defaultValue="experience">
        <TabsList>
          <TabsTrigger value="experience">experience</TabsTrigger>
          <TabsTrigger value="projects">projects</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Experience />
        </TabsContent>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
      </Tabs>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/work-section.tsx
git commit -m "feat: add work-section component wrapping experience + projects in tabs"
```

---

### Task 9: Rewrite page.tsx and clean up old files

**Files:**
- Replace: `app/page.tsx`
- Delete: `components/tabs-demo.tsx`
- Delete: `components/about-content.tsx`
- Delete: `components/work-content.tsx`
- Delete: `components/contact-content.tsx`
- Delete: `components/ui/animated-text.tsx`
- Delete: `hooks/screen-size.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Delete old unused files**

```bash
rm components/tabs-demo.tsx
rm components/about-content.tsx
rm components/work-content.tsx
rm components/contact-content.tsx
rm components/ui/animated-text.tsx
rm hooks/screen-size.tsx
```

- [ ] **Step 3: Verify TypeScript passes cleanly**

```bash
bunx tsc --noEmit
```

Expected: 0 errors.

- [ ] **Step 4: Run dev server and do a visual check**

```bash
bun dev
```

Open `http://localhost:3000`. Check:
- [ ] Warm dark background (`#0c0a09`)
- [ ] "Harish Khandre" in amber Syne bold
- [ ] Role line in muted DM Sans
- [ ] `github · linkedin · email` as DM Mono text links
- [ ] Divider lines between sections
- [ ] `experience  projects` tab switcher — dark pill background, full-width, justify-between
- [ ] Clicking "projects" tab shows projects list, "experience" shows work history
- [ ] Skills render as flowing DM Mono text
- [ ] No TypeScript/console errors

- [ ] **Step 5: Commit everything**

```bash
git add app/page.tsx
git commit -m "feat: complete portfolio redesign — minimal single-column with Radix tabs"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Syne + DM Mono + DM Sans fonts — Tasks 1, 3, 4, 5, 6, 7
- ✅ Warm palette CSS vars — Task 1
- ✅ Radix tabs with dark surface bg, justify-between, DM Mono uppercase triggers — Tasks 2, 8
- ✅ Header: amber name, muted role, text social links — Task 3
- ✅ Bio paragraph — Task 4
- ✅ Experience: Pordios Labs with all bullet points — Task 5
- ✅ Projects: MGNREGA RAG, Agentic Pipeline, ShelterSoul — Task 6
- ✅ Skills inline list — Task 7
- ✅ Section dividers — Task 9
- ✅ Footer social links — Task 9
- ✅ Hero stagger animations (Framer Motion, delays 0/0.1/0.2/0.3) — Tasks 3, 4
- ✅ Old files deleted — Task 9

**No placeholders found.**

**Type consistency:** `Projects` is a named export (used as `{ Projects }` in work-section.tsx). All other components are default exports. Consistent across all tasks.
