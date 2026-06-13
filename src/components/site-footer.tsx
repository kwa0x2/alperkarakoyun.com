import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-faint">
          © {year} {site.name}
        </p>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>
        <a
          href={site.company.url}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-faint transition-colors hover:text-foreground"
        >
          {site.company.name} · CRO {site.company.cro}
        </a>
      </div>
    </footer>
  );
}
