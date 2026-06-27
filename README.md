# Zundal — Digital Aurora

Personal blog & portfolio of **Jeongsik An (Zundal)**. An immersive, 3D-driven
single page with a multilingual (한국어 · English · 日本語 · 中文) interface.

🌐 **Live:** https://zundal.github.io/digimom/

## Stack

- **Vite + React + TypeScript**
- **Three.js** via `@react-three/fiber` + `@react-three/drei` — custom shader
  "aurora orb" (simplex-noise displacement + fresnel rim) and a starfield
- **Tailwind CSS v4** for layout, custom CSS for the signature visuals
- **react-i18next** for 4-language internationalization (browser-detected,
  remembered in `localStorage`)
- **Framer Motion** for scroll-reveal and entrance choreography
- **GitHub Pages** deployment via GitHub Actions

## Develop

This project uses **[Bun](https://bun.sh)** as the package manager and runner.

```bash
bun install
bun run dev       # http://localhost:5173
bun run build     # type-check + production build to dist/
bun run preview   # preview the production build
bun run test:e2e  # Playwright e2e (desktop + mobile)
```

## Make it yours

Everything personal lives in **`src/config/site.ts`** — handle, email, social
links, projects, and the post list. Localized copy (UI strings, project
descriptions, blog post bodies) lives in **`src/i18n/locales/{ko,en,ja,zh}.ts`**.

To add a blog post: add an entry to `POSTS` in `site.ts`, then add a matching
`posts.<id>` block (title / excerpt / body) to each locale file.

## Deploy

The site is a static build hosted on **GitHub Pages** (`gh-pages` branch).
To publish the latest version:

```bash
bun run deploy   # builds, then pushes dist/ to the gh-pages branch
```

Pages is configured to serve from `gh-pages` → `/`. Live at the URL above.

---

Built with React · Three.js by Jeongsik An.
