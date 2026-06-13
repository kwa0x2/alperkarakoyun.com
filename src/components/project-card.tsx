import { ArrowUpRight, Github, Globe, Linkedin, Lock } from "@/components/icons";
import type { Project } from "@/lib/projects";
import { StarBadge, TechTag } from "@/components/ui";

function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      Live
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="-mx-2.5 flex flex-wrap items-center gap-0.5">
      {project.links.map((link) => {
        const isGithub = link.href.includes("github.com");
        const isLinkedin = link.href.includes("linkedin.com");
        const isLive = link.label === "Live";
        const Icon = isLive ? Globe : isLinkedin ? Linkedin : isGithub ? Github : ArrowUpRight;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-subtle ${
              isLive ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {link.label}
          </a>
        );
      })}
      {project.privateSource ? (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm text-faint">
          <Lock className="h-3.5 w-3.5" />
          Private source
        </span>
      ) : null}
    </div>
  );
}

export function ProjectCard({
  project,
  variant = "compact",
}: {
  project: Project;
  variant?: "featured" | "compact";
}) {
  if (variant === "featured") {
    return (
      <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border-strong sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.status === "live" ? <LiveDot /> : null}
            {project.stars ? <StarBadge count={project.stars} /> : null}
          </div>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
        <p className="mt-1 font-mono text-sm text-accent">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.highlights ? (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="border-t border-border pt-4">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-strong">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium tracking-tight">{project.title}</h3>
        <div className="flex shrink-0 items-center gap-2">
          {project.status === "live" ? (
            <span className="h-1.5 w-1.5 rounded-full bg-accent" title="Live" />
          ) : null}
          {project.stars ? <StarBadge count={project.stars} /> : null}
        </div>
      </div>

      <p className="mt-1 font-mono text-xs text-accent">{project.tagline}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
        {project.stack.length > 4 ? (
          <span className="px-1 py-0.5 font-mono text-[11px] leading-5 text-faint">
            +{project.stack.length - 4}
          </span>
        ) : null}
      </div>

      <div className="mt-auto pt-5">
        <div className="border-t border-border pt-3">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
