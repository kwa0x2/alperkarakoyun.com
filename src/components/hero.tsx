import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from "@/components/icons";
import { OpenCv } from "@/components/cv-modal";
import { Reveal } from "@/components/reveal";
import { site, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="hero-glow relative isolate overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 z-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">{site.name}</h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-3 font-mono text-base text-accent sm:text-lg">
            <span className="text-faint">{"> "}</span>
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              View projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <OpenCv className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-subtle">
              <FileText className="h-4 w-4" />
              CV
            </OpenCv>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-subtle"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-subtle"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 text-faint" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-14 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-5 py-4">
                <dt className="font-mono text-xs text-faint">{s.label}</dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
