# SEO Fixes — ServiStream.net
Registro de cambios aplicados según auditoría SEO (2026-03-01).

---

## QUICK WINS (0-7 días)

| # | Problema | Archivo(s) | Estado | Fecha |
|---|---------|-----------|--------|-------|
| 1 | Favicon inexistente — `favicon.png` eliminado del repo | `public/`, `src/layouts/Layout.astro`, `public/manifest.json` | ✅ Aplicado | 2026-03-01 |
| 2 | OG Image homepage posiblemente inexistente | `src/pages/index.astro` | ⏳ Pendiente verificación manual |  |
| 3 | robots.txt con Sitemap redundante (sitemap-0.xml) | `public/robots.txt` | ✅ Aplicado | 2026-03-01 |
| 4 | Google Search Console — enviar sitemap-index.xml | GSC (acción manual) | ⏳ Pendiente acción manual |  |
| 5a | Meta titles genéricos en 9 páginas | `src/pages/*.astro` | ✅ Aplicado | 2026-03-01 |
| 5b | Meta descriptions faltantes en 9 páginas | `src/pages/*.astro` | ✅ Aplicado | 2026-03-01 |
| 6 | Schema.org: teléfono falso, logo inexistente, dirección genérica | `src/layouts/Layout.astro` | ✅ Aplicado | 2026-03-01 |
| 7 | `<head>` inválido en Acordion.astro (doble carga FontAwesome) | `src/components/hosting_linux/Acordion.astro` | ✅ Aplicado | 2026-03-01 |

---

## SEMANA 2-4

| # | Problema | Archivo(s) | Estado | Fecha |
|---|---------|-----------|--------|-------|
| 8 | Añadir prop `schema` al Layout.astro para schemas por página | `src/layouts/Layout.astro` | ✅ Aplicado | 2026-03-01 |
| 9 | FAQPage schema en preguntas-frecuentes.astro | `src/pages/preguntas-frecuentes.astro` | ✅ Aplicado | 2026-03-01 |
| 10 | Service + Offer schema en páginas de hosting | `src/pages/hosting-*.astro` + streaming | ✅ Aplicado | 2026-03-01 |
| 11 | WebSite schema con SearchAction en homepage | `src/pages/index.astro` | ✅ Aplicado | 2026-03-01 |
| 12 | Prioridades diferenciadas en sitemap | `astro.config.mjs` | ✅ Aplicado | 2026-03-01 |
| 13 | Corregir jerarquía H-tags (H5 → p, H2 → H1 en FAQ, alts descriptivos) | `src/pages/hosting-linux.astro`, `preguntas-frecuentes.astro` | ✅ Aplicado | 2026-03-01 |
| 14 | BreadcrumbList schema + visual en páginas internas | `src/components/Breadcrumb.astro` + 8 páginas | ✅ Aplicado | 2026-03-01 |
| 15 | Enlazado interno contextual en todas las páginas | múltiples | ✅ Aplicado | 2026-03-01 |
| 16 | Google Business Profile | Acción externa | ⏳ Pendiente |  |

---

## MES 2

| # | Problema | Archivo(s) | Estado | Fecha |
|---|---------|-----------|--------|-------|
| 17 | Crear sección /blog/ con colección de contenido Astro | `src/content.config.ts`, `src/pages/blog/` | ✅ Aplicado | 2026-03-01 |
| 18 | Publicar 4 artículos del calendario editorial | `src/content/blog/*.md` (4 artículos) | ✅ Aplicado | 2026-03-01 |
| 19 | Landing pages geolocalizadas (/hosting-quito/, /hosting-guayaquil/) | `src/pages/hosting-quito.astro`, `hosting-guayaquil.astro` | ✅ Aplicado | 2026-03-01 |
| 20 | Mejorar página de contacto (WhatsApp CTA + LocalBusiness schema) | `src/pages/contacto.astro` | ✅ Aplicado | 2026-03-01 |
| 21 | Reducir Google Fonts (3 → 1 petición; eliminar Manrope no usado) | `src/layouts/Layout.astro` | ✅ Aplicado | 2026-03-01 |
| 22 | Eliminar `background-attachment: fixed` en mobile (9 páginas) | múltiples `src/pages/*.astro` | ✅ Aplicado | 2026-03-01 |
| 23 | Implementar hreflang es-EC, es, x-default | `src/layouts/Layout.astro` | ✅ Aplicado | 2026-03-01 |
| 24 | Campaña de reseñas en Google | Acción externa | ⏳ Pendiente |  |

---

## MES 3

| # | Problema | Estado | Fecha |
|---|---------|--------|-------|
| 25 | Publicar 4 artículos adicionales del blog | ✅ Aplicado | 2026-03-01 |
| 26 | Outreach para 10 backlinks (directorios + medios ecuatorianos) | ⏳ Pendiente (acción externa) |  |
| 27 | Chat en vivo (Tawk.to o Crisp) | ✅ Placeholder listo en Layout.astro | 2026-03-01 |
| 28 | CTAs diferenciados por plan de precios | ✅ Aplicado | 2026-03-01 |
| 29 | Página de casos de éxito / testimoniales con Schema Review | ✅ Aplicado | 2026-03-01 |
| 30 | Sección "Sobre nosotros" con historia y equipo (E-E-A-T) | ✅ Aplicado | 2026-03-01 |

---

## Notas técnicas
- Sitemap URL correcta: `https://servistream.net/sitemap-index.xml`
- Favicon activo: `faviconcolor.png` (el original favicon.png fue eliminado del repo)
- GA4: código presente en Layout.astro pero comentado — pendiente activar con ID real
- Schema.org logo: usar `/img/LOGO-SERVISTREAM-NUEVO4.svg`
- Teléfono real del Schema.org: pendiente confirmación del cliente
- `ExternalScript` component (`src/components/ExternalScript.astro`): carga `/scripts/accordionfaq.js`. Usado en: `hosting_linux/Acordion.astro`, `hosting_reseller/Acordion.astro`, `preguntas_frecuentes/AcordionWebHosting.astro`, `preguntas-frecuentes.astro`. No eliminar.
- Bug encontrado: en páginas con `---` de cierre antes de `const serviceSchema`, el schema queda fuera del frontmatter → error de build. Verificar siempre que `const` esté dentro del frontmatter (entre `---` y `---`).
- Blog: Content Layer API en `src/content.config.ts` (Astro 5). Artículos en `src/content/blog/*.md`. Páginas en `src/pages/blog/index.astro` y `src/pages/blog/[slug].astro`. 8 artículos publicados.
- Landing pages geo: `/hosting-quito/` y `/hosting-guayaquil/` con schema Service + areaServed City.
- Fix #27: Script de Tawk.to añadido como comentario en Layout.astro (línea ~204). Activar reemplazando TAWK_PROPERTY_ID y TAWK_WIDGET_ID y descomentando el bloque.
- Fix #28: CTA WhatsApp secundario añadido en `cardPlanesHosting.astro`, `PlanesHostingCloud.astro`, `CardPreciosCentova.astro`. Usa prop `plan`/`title` en el mensaje de WA.
- Fix #29: `/testimonios/` con 6 reseñas, Review schema (AggregateRating 5.0, 6 reviews), estadísticas de clientes.
- Fix #30: `/nosotros/` con historia (timeline 2018-2024), valores, E-E-A-T, Organization schema, estadísticas.
- astro.config.mjs: testimonios y nosotros añadidos al sitemap con priority 0.5 / monthly.
