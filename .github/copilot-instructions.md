## Repository overview
- Purpose: A small portfolio site (Next.js14 + TypeScript + Tailwind) showcasing three case studies and a clean design system.
- Layout: App Router under `/app`; reusable UI lives in `/components`; project metadata in `/lib/projects.ts`; global styles in `app/globals.css`.

## Big-picture architecture
- App Router pages live under `/app/*`. Each route is a server component by default; add `'use client'` at top of files that require interactivity (e.g., `components/Button.tsx`, `components/Navbar.tsx`).
- UI composition: `app/layout.tsx` wraps every page and mounts `Navbar` + `Footer`.
- Case studies use `components/CaseStudyLayout.tsx` (desktop sticky mini-nav + anchors). Add new case pages under `/app/work/<slug>/page.tsx` and reference metadata from `/lib/projects.ts`.

## Key files to know
- `app/layout.tsx` — global layout, imports `app/globals.css` and mounts `Navbar` / `Footer`.
- `app/globals.css` — design tokens and the shiny gold gradient (`--gold-gradient`) plus bubbly background helpers.
- `tailwind.config.js` — extends `navy` colors; update content globs for new folders.
- `components/` — small, focused components: `Button.tsx` (supports `variant="gold" | "outline"`), `Card.tsx` (project card), `CaseStudyLayout.tsx` (sticky TOC), `Chip.tsx`.
- `lib/projects.ts` — single source of truth for project metadata (slug, title, subtitle, tags, tools). To add a new project: add an entry and create `/app/work/<slug>/page.tsx` that uses that slug.

## Styling & design notes (project-specific)
- Palette: dark navy background (`--color-navy` / `--color-navy-surface`) and off-white cards (`--color-offwhite`). See `app/globals.css` for variables.
- Shiny gold: `--gold-gradient` is used by the `.btn-gold` utility. Apply `className="btn-gold"` or `variant="gold"` on `Button` to get the metallic gradient + hover sheen.
- Bubbly aesthetic: use large radius classes (e.g., `rounded-2xl`, `rounded-3xl`), pill buttons, and the `.bubbles` container for blurred circles (provided helpers exist in `globals.css`). Put decorative elements behind content only.
- Accessibility: prefer semantic headings (H1–H3). Focus styles are implemented in `globals.css`; interactive components should support keyboard focus and `aria-*` where appropriate.

## Patterns & conventions
- Components are small and single-purpose. Prefer composition over prop-heavy components. Example: `Card` accepts a `project` shape and renders tags and a link.
- Data-driven pages: read the project metadata from `lib/projects.ts` and map to cards or to case pages. Example: `app/page.tsx` maps `projects` to `Card`.
- Client/server boundary: keep heavy interactivity in client components (`'use client'`). Route files remain server components unless interactivity is needed.
- Animations: subtle transitions only (background-position sheen, small translateY). Avoid auto-play or large motion.

## How to run (developer workflow)
- Install and run locally:

  ```bash
  npm install
  npm run dev
  ```

- Build for production:

  ```bash
  npm run build
  npm start
  ```

- Add new projects:
  1. Add entry to `/lib/projects.ts` (set `slug`, `title`, `tags`, `role`, `timeline`, `tools`).
  2. Create `/app/work/<slug>/page.tsx` using the CaseStudy template structure (sections: Overview, Problem, Context & Constraints, Research/Insights, Exploration, System & Flows, Final Design, Tradeoffs, Results).

## Where to add assets
- Put static images in `/public/images/<slug>/...` and reference them with `/images/<slug>/<name>.png`.

## Quick examples
- Add a gold button:
  - `<Button href="/work" variant="gold">View Work</Button>`
- Render project cards on the Work page (already implemented): `projects.map(p => <Card key={p.slug} project={{slug:p.slug,title:p.title,subtitle:p.subtitle,tags:p.tags}}/>)`

## Things to avoid
- Don’t add heavy animations or auto-playing media.
- Don’t hardcode project content in pages — prefer `/lib/projects.ts` for metadata.

If anything is unclear (e.g., how you want images organized, or additional tag filters), tell me which area to expand and I’ll update this file.  