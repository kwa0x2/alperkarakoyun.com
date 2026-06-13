import { ArrowUpRight, FileText, Github, Linkedin, Mail, Phone } from "@/components/icons";
import { OpenCv } from "@/components/cv-modal";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

export function Contact() {
  const telHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <Section id="contact" className="border-t border-border">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{"// contact"}</p>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-4xl">
            Let’s build something solid.
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            I’m open to full-stack and backend roles, freelance work and interesting side projects.
            Email is usually the fastest way to reach me.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-subtle"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-subtle"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-faint" />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm sm:flex-row sm:gap-8">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-faint" />
              {site.email}
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-faint" />
              {site.phone}
            </a>
            <OpenCv className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground">
              <FileText className="h-4 w-4 text-faint" />
              View CV
            </OpenCv>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
