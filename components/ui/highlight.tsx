// Inline highlight primitives for recruiter/developer scanning

export const Metric = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-accent">{children}</span>
);

export const Tech = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-fg/90">{children}</span>
);
