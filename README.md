# alperkarakoyun.com

Personal portfolio & project showcase for **Alper Karakoyun** — a backend-focused
software developer (Go · TypeScript).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and
**next-themes**, with a clean, minimal dark-first design.

## Features

- Responsive, dark/light themable single-page layout
- Hero, featured work, filterable project grid, tech stack, about and contact sections
- Project data is curated in one place — `src/lib/projects.ts`
- SEO-ready: metadata, dynamic Open Graph image, `sitemap.xml`, `robots.txt`
- Self-contained inline SVG icons — no UI dependency beyond `next-themes`

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # eslint
```

## Editing content

Everything you'll usually want to change lives in two files:

| What                                  | Where                 |
| ------------------------------------- | --------------------- |
| Name, role, bio, socials, tech stack  | `src/lib/site.ts`     |
| Projects (title, stack, links, etc.)  | `src/lib/projects.ts` |

To **add a project**, append an entry to the `projects` array. Set `featured: true`
to show it as a large card up top; `status: "live"` adds the green "Live" indicator;
`privateSource: true` shows a "Private source" label for closed-source work.

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, theme provider, nav + footer
    page.tsx              # section composition
    opengraph-image.tsx   # generated social card
    icon.svg              # favicon (monogram)
    sitemap.ts / robots.ts
    globals.css           # Tailwind v4 theme tokens (light + dark)
  components/             # hero, projects, cards, nav, footer, icons, theme
  lib/                    # site + project data
```

## Deploying

The site is deployed on [Dokploy](https://dokploy.com) with the Nixpacks build type.
Next.js 16 needs Node 20.9 or newer, so `package.json` pins `engines.node` and
`.nvmrc` selects Node 22; without them Nixpacks falls back to an older Node and
`next build` fails.
