---
name: portfolio-redesign-2026
description: Complete redesign of Harish Khandre's portfolio — paco.me-inspired minimal single-column with shadcn Tabs for experience/projects switching
metadata:
  type: project
---

# Portfolio Redesign — Design Spec

**Date:** 2026-06-07  
**Goal:** Rebuild the portfolio to match Harish's current resume (2yr enterprise, AI agents) and present it with a distinctive, non-generic minimal aesthetic.

---

## 1. Layout

Single-column vertical scroll. Max-width ~640px, centered with `mx-auto px-6`. No sticky nav. No fixed-height containers. Full-height sections that grow with content.

```
Header (name + role + social links)
─────────────────────────────────────
Bio paragraph
─────────────────────────────────────
shadcn Tabs: [experience] [projects]   ← full-width dark pill
─────────────────────────────────────
[tab content]
─────────────────────────────────────
Skills
─────────────────────────────────────
Footer (social links)
```

Mobile: single column throughout, tabs spread full-width, projects stack.

---

## 2. Typography & Colors

**Fonts (Google Fonts, added via `next/font`):**
- `Syne` (400, 700, 800) — used for name heading only
- `DM Mono` (400, 500) — section labels, dates, tech tags, tab triggers
- `DM Sans` (400, 500) — body text, descriptions

**Color palette (CSS variables in `globals.css`):**
```css
--bg:        #0c0a09   /* warm near-black */
--fg:        #f0ebe4   /* warm off-white */
--muted:     #6b6560   /* secondary text, dates */
--border:    #1e1b18   /* dividers */
--tab-bg:    #161310   /* tab list background */
--accent:    #d4a853   /* amber — name only, sparingly */
```

**Scale:**
- Name: `text-3xl` Syne 800 — amber colored
- Role: `text-base` DM Sans muted
- Section labels: `text-xs` DM Mono uppercase tracking-widest, muted
- Body: `text-sm` DM Sans, line-height relaxed
- Dates/tags: `text-xs` DM Mono, muted

---

## 3. Sections & Content

### Header
```
Harish Khandre                    ← Syne 800, amber
Full Stack Engineer at Pordios Labs  ← DM Sans, muted

github  linkedin  email           ← DM Mono xs, text links, hover → fg
```

### Bio
```
Full Stack Engineer with 2 years shipping enterprise and government 
platforms handling 20M+ records. TypeScript, React, and NestJS — 
hands-on with Claude API and AI agent workflows using Mastra.ai.
```

### Experience tab content
```
PORDIOS LABS                                     AUG 2024 – PRESENT
Full Stack Developer · Dehradun, Uttarakhand

National Investment Pipeline (MORTH/NHIA)
Data sync and reporting across 20M+ records shared with Ministry of Statistics.

SSC Analytics Dashboard
67% API performance improvement via Redis caching, indexing, aggregation.
Handled migrations from 2M to 20M+ records.

Ministry of Social Justice and Empowerment
RBAC and analytics reporting across 12+ government scheme datasets.

Also: Physics Wallah (PMC) learning platform · Char Dham security audit
· CMS platforms with Payload CMS, SST, TRPC
```

### Projects tab content
```
MGNREGA RAG Analytics Platform
AI-powered RAG over large-scale NREGA government datasets.
Mastra.ai · Claude API · PostgreSQL
Natural language querying · dynamic graph generation · memory workflows

Agentic Research Pipeline
Multi-source data aggregation with Mastra.ai agent workflows.
Python · Mastra.ai · Anthropic Message Batches
Built entirely with Claude Code.

ShelterSoul ↗  (link to sheltersoul.me)
Platform connecting NGOs with mentally challenged homeless individuals.
Next.js · AWS S3 · Resend
```

### Skills
```
TypeScript  React  Next.js  NestJS  Node.js  Python
PostgreSQL  MongoDB  Redis  Prisma  Drizzle
TanStack Query  TRPC  Zustand  Tailwind  ShadcnUI
Mastra.ai  Claude API  Docker  AWS  SST  GitHub Actions
```

---

## 4. shadcn Tabs Component

Install `@radix-ui/react-tabs`. Replace `components/ui/tabs.tsx` with a restyled shadcn-style implementation.

**Visual spec:**
- `TabsList`: `bg-[#161310] rounded-lg p-1 flex w-full justify-between`
- `TabsTrigger`: `flex-1 text-center font-mono text-xs uppercase tracking-widest py-2 px-4 rounded-md text-[#6b6560] transition-colors data-[state=active]:bg-[#1e1b18] data-[state=active]:text-[#f0ebe4]`
- No border, no shadow, no pill outline — just the dark bg and active state lightening

---

## 5. Animations

- Hero fade-in on mount: name + role + bio each with staggered `opacity: 0 → 1` via Framer Motion (delays: 0, 0.15, 0.3s)
- Tab content: `AnimatePresence` with simple `opacity` fade (0.15s) — no 3D, no scale, no stacking
- Nothing else animated

---

## 6. Files Changed

| File | Action |
|---|---|
| `app/layout.tsx` | New fonts: Syne, DM Mono, DM Sans |
| `app/globals.css` | CSS variables, remove old styles |
| `app/page.tsx` | New single-column layout shell |
| `tailwind.config.ts` | Add font families + colors |
| `components/ui/tabs.tsx` | Replace with shadcn Radix tabs |
| `components/about-content.tsx` | Updated bio |
| `components/work-content.tsx` | New experience section |
| `components/projects.tsx` | Updated projects (MGNREGA, Agentic, ShelterSoul) |
| `components/contact-content.tsx` | Simplified text links |
| `components/skills.tsx` | New skills section |
| `components/tabs-demo.tsx` | Replaced by new page.tsx structure |
| `package.json` | Add `@radix-ui/react-tabs` |
