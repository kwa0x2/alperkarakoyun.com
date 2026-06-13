import { Star } from "@/components/icons";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted">{subtitle}</p> : null}
    </div>
  );
}

export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-subtle px-2 py-0.5 font-mono text-[11px] leading-5 text-muted">
      {children}
    </span>
  );
}

export function StarBadge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted">
      <Star className="h-3 w-3 text-amber-400" />
      {count}
    </span>
  );
}
