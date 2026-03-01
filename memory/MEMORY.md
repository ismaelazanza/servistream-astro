# ServiStream Project Memory

## Project Type
Static Astro 5 site for ServiStream — a web hosting & streaming services company in Ecuador.

## Key Paths
- Pages: `src/pages/` (file-based routing)
- Shared layout: `src/layouts/Layout.astro` (handles all SEO head tags)
- Components by section: `src/components/<section>/`
- Static assets: `public/img/`, `public/fonts/`
- Tailwind config: `tailwind.config.mjs`
- Astro config: `astro.config.mjs` (site = https://servistream.net)

## SEO
- Auditoría completa realizada el 2026-03-01. Ver `memory/seo-fixes.md` para el tracking de cambios.
- Quick wins aplicados: favicon (→ faviconcolor.png), robots.txt, Schema.org, meta tags 9 páginas, Acordion.astro `<head>` inválido.
- Pendiente semana 2: schemas por página, H-tags, enlazado interno, sitemap prioridades.
- NOTA: el teléfono en Schema.org quedó sin número real — pendiente que el cliente lo confirme.

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — static build to dist/
- No test or lint scripts

## Key Conventions
- All pages use Layout.astro with SEO props (title, description, keywords, image, canonical, noindex)
- Two menu variants: Menu.astro (light) and MenuBlack.astro (dark); MobilMenu.astro for mobile
- Button variants: BotonUno–BotonSeisBlack components
- Pricing is hardcoded via component props — no CMS
- Custom Tailwind colors: principal (#00b285), principalDegra (#159159), oscuro (#0e141b), morado (#1e1b3d)
- Language: Spanish throughout
