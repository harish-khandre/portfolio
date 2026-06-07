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

      <ul className="mt-6 space-y-6">
        <li>
          <p className="font-sans text-sm font-medium text-fg">
            National Investment Pipeline
            <span className="ml-2 font-mono text-xs font-normal text-muted">
              MORTH / NHIA
            </span>
          </p>
          <p className="mt-1.5 font-sans text-sm leading-6 text-fg/60">
            Data sync and reporting workflows across 20M+ records shared with
            the Ministry of Statistics.
          </p>
        </li>
        <li>
          <p className="font-sans text-sm font-medium text-fg">
            SSC Analytics Dashboard
            <span className="ml-2 font-mono text-xs font-normal text-accent/80">
              67% perf ↑
            </span>
          </p>
          <p className="mt-1.5 font-sans text-sm leading-6 text-fg/60">
            API performance improvement via Redis caching, indexing, and
            aggregation optimization. Data migrations from 2M to 20M+ records.
          </p>
        </li>
        <li>
          <p className="font-sans text-sm font-medium text-fg">
            Ministry of Social Justice and Empowerment
          </p>
          <p className="mt-1.5 font-sans text-sm leading-6 text-fg/60">
            RBAC and analytics reporting processing 12+ government scheme
            datasets to surface KPIs and operational reports.
          </p>
        </li>
      </ul>

      <div className="mt-6 border-l border-divider pl-4">
        <p className="font-sans text-xs leading-6 text-fg/40">
          Physics Wallah (PMC) learning platform · Char Dham security audit ·
          CMS platforms with Payload CMS, SST, TRPC
        </p>
      </div>
    </div>
  );
}
