# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ServiStream is a marketing/landing site for a web hosting and streaming services company based in Ecuador. It is a fully static site (no backend) built with Astro, Tailwind CSS, and Alpine.js.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static output to ./dist/
npm run preview   # Preview production build locally
npm start         # Serve dist/ with the `serve` package
```

No linting or test scripts are configured.

## Architecture

### Stack
- **Astro 5** — static site generator, file-based routing in `src/pages/`
- **Tailwind CSS 3** — utility-first styling; custom config in `tailwind.config.mjs`
- **Alpine.js** — lightweight interactivity (dropdowns, accordions, mobile menus) added via `@astrojs/alpinejs`
- **Sass** — available for scoped `<style lang="scss">` blocks inside `.astro` files
- **@astrojs/sitemap** — auto-generates `sitemap.xml` at build time; admin/private pages are filtered out

### Key Conventions

**Layout**: All pages use `src/layouts/Layout.astro`, which accepts `title`, `description`, `keywords`, `image`, `canonical`, and `noindex` props. The layout handles all `<head>` SEO meta tags, OG tags, font preloads, and the `<slot />` for page content.

**Components**: Components are co-located by service/section under `src/components/`. Subdirectories map to site sections:
- `index/` — homepage-specific sections
- `hosting_linux/`, `hosting_cloud/`, `hosting_reseller/` — hosting service pages
- `centovacast/`, `server_azuracast/`, `resellerradio/`, `tv_streaming/` — streaming service pages
- `dominios/`, `paginasweb/` — domains and web design pages
- `preguntas_frecuentes/` — FAQ page
- Root-level components (`Menu.astro`, `MenuBlack.astro`, `MobilMenu.astro`, `Footer.astro`, `FooterOscuro.astro`, `Top.astro`) are shared across pages

**Navigation**: There are two menu variants — `Menu.astro` (white/light) and `MenuBlack.astro` (dark). Mobile navigation is handled separately by `MobilMenu.astro`. Pages import whichever variant matches their hero design.

**Buttons**: Reusable button components (`BotonUno` through `BotonSeisBlack`) represent different visual styles. Pricing card components accept props directly for plan name, price, and feature list items.

**Pricing cards**: Props-driven (no CMS). To update pricing or features, edit the component call-site in the page file (e.g., `src/pages/hosting-linux.astro`) and pass new prop values.

### Custom Tailwind Theme

Defined in `tailwind.config.mjs`:
- **Colors**: `principal` (#00b285), `principalDegra` (#159159), `oscuro` (#0e141b), `morado` (#1e1b3d)
- **Fonts**: `font-girol` (Girol), `font-gilroy` implied by preloaded Gilroy woff2 files in `/public/fonts/`
- **Animation**: `animate-infinite-scroll` for the logo scroll marquee

### Static Assets
- Images: `/public/img/` — use `.avif` or `.webp` for performance-sensitive images
- Fonts: `/public/fonts/` (Gilroy-Regular.woff2, Gilroy-Semibold.woff2 are preloaded)
- A `manifest.json` and `robots.txt` are in `/public/`

### Site Configuration
- Production URL: `https://servistream.net`
- Language: Spanish (`lang="es"`, content throughout in Spanish)
- The sitemap integration filters out `/admin` and `/private` routes automatically
