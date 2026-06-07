import { Metric, Tech } from '@/components/ui/highlight'

const items = [
  {
    title: 'National Investment Pipeline',
    label: 'MORTH / NHIA',
    accent: null,
    desc: (
      <>
        Built data ingestion and reporting pipelines for India's National
        Investment Pipeline platform — syncing project data across{' '}
        <Metric>20M+ records</Metric> in coordination with the Ministry of
        Statistics. Developed <Tech>React</Tech> dashboards for project
        tracking and <Tech>NestJS</Tech> APIs for real-time data access
        across government stakeholders.
      </>
    ),
    tech: 'TypeScript · React · NestJS · PostgreSQL',
  },
  {
    title: 'SSC Analytics Dashboard',
    label: null,
    accent: '67% perf ↑',
    desc: (
      <>
        Diagnosed and resolved critical performance bottlenecks across a
        high-traffic analytics dashboard. Introduced <Tech>Redis</Tech>{' '}
        caching layers, rewrote slow aggregation queries, and restructured
        database indexes — achieving a <Metric>67% reduction</Metric> in
        API response times. Oversaw data migration from{' '}
        <Metric>2M to 20M+ records</Metric> with zero downtime.
      </>
    ),
    tech: 'TypeScript · NestJS · Redis · PostgreSQL',
  },
  {
    title: 'Ministry of Social Justice',
    label: null,
    accent: null,
    desc: (
      <>
        Designed and implemented role-based access control across a
        multi-tenant government analytics system covering{' '}
        <Metric>18+ social welfare schemes</Metric>. Built reporting
        pipelines to aggregate scheme-level KPIs and operational metrics
        for ministry officials, with configurable{' '}
        <Tech>RBAC</Tech> policies per department.
      </>
    ),
    tech: 'TypeScript · React · NestJS · PostgreSQL',
  },
]

export default function Experience() {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-fg/80">
          Pordios Labs
        </span>
        <span className="font-mono text-xs text-muted">Aug 2024 – Present</span>
      </div>
      <p className="mt-1 font-mono text-xs text-muted">
        Full Stack Developer · Dehradun, Uttarakhand
      </p>

      <ul className="mt-6 space-y-8">
        {items.map((item) => (
          <li key={item.title}>
            <p className="font-sans text-sm font-medium text-fg">
              {item.title}
              {item.label && (
                <span className="ml-2 font-mono text-xs font-normal text-muted">
                  {item.label}
                </span>
              )}
              {item.accent && (
                <span className="ml-2 font-mono text-xs font-normal text-brand/80">
                  {item.accent}
                </span>
              )}
            </p>
            <p className="mt-2 font-sans text-sm leading-7 text-fg/60">
              {item.desc}
            </p>
            <p className="mt-2 font-mono text-xs text-muted/60">
              {item.tech}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l border-divider pl-4">
        <p className="font-sans text-xs leading-6 text-fg/35">
          Physics Wallah (PMC) · Char Dham security audit · Payload CMS ·
          SST · TRPC
        </p>
      </div>
    </div>
  )
}
