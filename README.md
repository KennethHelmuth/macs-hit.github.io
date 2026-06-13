# MACS-HIT

Independent threat intelligence research platform operated by Kenneth Helmuth.

**Live:** https://kennethhelmuth.github.io/macs-hit.github.io

---

## Stack

- Next.js (App Router, static export)
- Tailwind CSS
- TypeScript
- MDX (for reports and dossier entries when added)

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. Note: because `basePath` is set to
`/macs-hit.github.io`, all routes in the browser will be under that path.
Navigate to `http://localhost:3000/macs-hit.github.io`.

## Build

```bash
npm run build
```

Output goes to `./out/`. This is what gets deployed.

## Deploy

Push to `main`. GitHub Actions handles the rest.

In the repository settings, set **Pages > Source** to **GitHub Actions**.

## Adding content

### Reports

Create `content/reports/your-slug.mdx` with frontmatter:

```mdx
---
title: "Report title"
date: "YYYY-MM-DD"
tlp: "WHITE"
tags: ["tag1", "tag2"]
summary: "One sentence summary."
---

Report body here.
```

Then update `app/reports/page.tsx` to read and render the files using `gray-matter`
and `next-mdx-remote`.

### Dossier entries

Same pattern under `content/dossier/`. Update `app/dossier/page.tsx` to consume them.

---

All content is for educational and defensive purposes only.
