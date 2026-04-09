# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16.2.3** (App Router) — see `node_modules/next/dist/docs/` before writing any Next.js code
- **React 19**, **TypeScript**, **Tailwind CSS v4**
- **shadcn/ui** + Radix UI primitives
- **Geist** (sans) / **Geist Mono** fonts via `next/font/google`
- **gray-matter** + **next-mdx-remote** for MDX content
- Deployed on **Vercel**

## Architecture

This is a freelance portfolio site.

**Pages (implemented)**:
- `/` — Home: Hero + Works preview + Zenn RSS + CTA
- `/works` — Works list (MDX-driven)
- `/works/[slug]` — Works detail (MDX)
- `/about` — About
- `/blog` — Blog (Zenn RSS)
- `/contact` — Contact form
- `/privacy` — Privacy policy

**Shared components**: `app/components/header.tsx`, `app/components/footer.tsx`

**Content management**: Works case studies live in `content/works/` as individual MDX files with frontmatter:
```
---
title: ...
area: 航空・電力
phase: 要件定義〜運用
period: 2025.05〜現在
---
```
Body uses Before→Action→After structure. Current files: `cloud-infra-migration.mdx`, `manufacturing-dx-requirements.mdx`, `strapi-cms-replace.mdx`

**API routes**: `app/api/contact/` — Contact form → Notion DB integration

**Zenn RSS**: Fetched at build time from `https://zenn.dev/[username]/feed` with ISR `revalidate: 3600`.

**OGP/Metadata**: Managed via Next.js Metadata API per page.

## Design System

Full spec in `docs/design.md`. Key rules:

- **Colors**: Only shadcn/ui semantic tokens (`background`, `foreground`, `card`, `muted-foreground`, `border`, `foreground/5`, `foreground/10`). No hardcoded hex/oklch except blur decoration gradients. No accent colors — sole exception is `bg-green-500` for the Available badge pulse dot.
- **Fonts**: Geist only. Weights: `font-medium` (500), `font-semibold` (600), `font-bold` (700) — never `font-normal` (400) for headings.
- **Layout**: `max-w-6xl mx-auto px-6 lg:px-8`, sections `py-24 lg:py-32`.
- **Borders/radius**: Cards `border border-foreground/5`, hover `hover:border-foreground/10`. Cards `rounded-lg`, buttons `rounded-full`. No `rounded-2xl` or larger on cards.
- **Shadows**: Static `shadow-sm` max; hover `hover:shadow-lg` on cards only. Never `shadow-md` or above at rest.
- **Animation**: Always `duration-300`. Card hover → shadow + border change. Works title hover → `translate-x-1`. Zenn emoji hover → `scale-110`.
- **Background decoration**: Hero section only — two blur circles. No other full-screen blur decorations.
