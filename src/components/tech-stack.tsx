import { Reveal } from "@/components/reveal";
import { Section, SectionHeading, TechTag } from "@/components/ui";
import { techGroups } from "@/lib/site";

export function TechStack() {
  return (
    <Section id="stack" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="// stack"
          title="Tools I reach for"
          subtitle="The languages, frameworks and infrastructure behind the projects above."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 60} className="h-full">
            <div className="h-full rounded-xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechTag key={item}>{item}</TechTag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
