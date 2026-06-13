"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { categories, projects, type Category } from "@/lib/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [active, setActive] = useState<"All" | Category>("All");

  const filtered = useMemo(
    () => (active === "All" ? rest : rest.filter((p) => p.category === active)),
    [active, rest],
  );

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="// featured"
          title="Featured work"
          subtitle="Some of the products and tools I’ve built."
        />
      </Reveal>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70} className="h-full">
            <ProjectCard project={p} variant="featured" />
          </Reveal>
        ))}
      </div>

      <div id="more" className="mt-20 sm:mt-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{"// more"}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">More projects</h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                    isActive
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-border text-muted hover:bg-subtle hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 50} className="h-full">
              <ProjectCard project={p} variant="compact" />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
