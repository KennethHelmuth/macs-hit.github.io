# MACS-HIT — Cyber Threat Intelligence Platform

> Open-source CTI research by Kenneth Helmuth · [macs-hit.github.io](https://macs-hit.github.io)

A professional threat intelligence platform tracking APT groups, malware campaigns, and adversarial infrastructure.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with static export
- **Styling**: Tailwind CSS v4 + custom design system
- **Content**: MDX for reports and dossier posts
- **Deploy**: GitHub Pages via GitHub Actions

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, stats, recent reports feed |
| Reports | `/reports` | MDX-powered intelligence reports |
| Dossier | `/dossier` | Threat actor investigation profiles |
| Tools | `/tools` | Curated CTI analyst toolkit |
| About | `/about` | Kenneth Helmuth bio & contact |

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to GitHub Pages

### One-time Setup

1. Create repo named `macs-hit.github.io` on GitHub
2. Push this codebase to `main` branch
3. In repo **Settings → Pages**: set Source to **GitHub Actions**

### Auto Deploy

Every push to `main` triggers the `.github/workflows/deploy.yml` workflow:

```
push to main → npm ci → next build (static export → ./out) → deploy to GitHub Pages
```

### Manual Deploy

```bash
npm run build   # generates ./out/
# Then push ./out to gh-pages branch, or let GitHub Actions handle it
```

## Adding New Reports

Create a new directory under `app/reports/[slug]/page.tsx` using the existing Lazarus report as a template.

Key elements to include:
- Breadcrumb navigation
- Severity badge + TLP classification
- `mdx-content` class on the article body
- Metadata sidebar (threat actor, confidence, IOC count)

## Adding New Dossier Entries

Add actor objects to the `actors` array in `app/dossier/page.tsx`, then create a detail page at `app/dossier/[actor-id]/page.tsx`.

## Classification Guide

| TLP | Color | Usage |
|-----|-------|-------|
| TLP:WHITE | White | Freely shareable, no restrictions |
| TLP:GREEN | Green | Community shareable |
| TLP:AMBER | Amber | Limited distribution |
| TLP:RED | Red | Recipient only |

## License

Content: © Kenneth Helmuth — All intelligence for educational and defensive purposes only.  
Code: MIT
