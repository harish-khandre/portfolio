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
