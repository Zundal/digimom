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

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Make it yours

Everything personal lives in **`src/config/site.ts`** — handle, email, social
links, projects, and the post list. Localized copy (UI strings, project
descriptions, blog post bodies) lives in **`src/i18n/locales/{ko,en,ja,zh}.ts`**.

To add a blog post: add an entry to `POSTS` in `site.ts`, then add a matching
`posts.<id>` block (title / excerpt / body) to each locale file.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. In the repo settings, set **Settings → Pages →
Source → GitHub Actions** once.

---

Built with React · Three.js by Jeongsik An.
