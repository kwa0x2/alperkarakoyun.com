import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <Reveal>
        <SectionHeading eyebrow="// about" title="About me" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {site.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <dl className="space-y-4 rounded-xl border border-border bg-card p-5 text-sm">
            {site.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
