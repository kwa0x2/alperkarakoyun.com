"use client";

import { useEffect, useState } from "react";
import { Github } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, site } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-1.5 font-mono text-sm font-medium">
          <span className="text-accent">~/</span>
          <span>alper</span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-subtle hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
