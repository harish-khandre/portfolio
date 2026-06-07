const items = [
  {
    num: "01",
    title: "National Investment Pipeline",
    label: "MORTH / NHIA",
    accent: null,
    desc: "Data sync and reporting workflows across 20M+ records shared with the Ministry of Statistics.",
  },
  {
    num: "02",
    title: "SSC Analytics Dashboard",
    label: null,
    accent: "67% perf ↑",
    desc: "API performance improvement via Redis caching, indexing, and aggregation optimization. Data migrations from 2M to 20M+ records.",
  },
  {
    num: "03",
    title: "Ministry of Social Justice",
    label: null,
    accent: null,
    desc: "RBAC and analytics reporting processing 12+ government scheme datasets to surface KPIs and operational reports.",
  },
];

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
        {items.map((item) => (
          <li key={item.num} className="flex gap-4">
            <span className="mt-0.5 shrink-0 font-mono text-xs text-muted/30">
              {item.num}
            </span>
            <div>
              <p className="font-sans text-sm font-medium text-fg">
                {item.title}
                {item.label && (
                  <span className="ml-2 font-mono text-xs font-normal text-muted">
                    {item.label}
                  </span>
                )}
                {item.accent && (
                  <span className="ml-2 font-mono text-xs font-normal text-accent/80">
                    {item.accent}
                  </span>
                )}
              </p>
              <p className="mt-1.5 font-sans text-sm leading-6 text-fg/60">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l border-divider pl-4">
        <p className="font-sans text-xs leading-6 text-fg/35">
          Physics Wallah (PMC) · Char Dham security audit · Payload CMS · SST ·
          TRPC
        </p>
      </div>
    </div>
  );
}
