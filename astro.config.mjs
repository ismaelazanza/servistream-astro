import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://servistream.net',
  integrations: [
    tailwind(),
    sitemap({
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/admin') &&
        !page.includes('/private') &&
        !page.includes('/terminos'),
      serialize(item) {
        // Homepage
        if (item.url === 'https://servistream.net/') {
          return { ...item, changefreq: 'daily', priority: 1.0 };
        }
        // Páginas de servicio principales
        const highPriority = [
          '/hosting-linux/', '/hosting-cloud/', '/hosting-reseller/',
          '/tv-streaming/', '/centovacast/', '/sonicpanel/',
          '/server-azuracast/', '/reseller-radio/',
        ];
        if (highPriority.some(p => item.url.includes(p))) {
          return { ...item, changefreq: 'weekly', priority: 0.9 };
        }
        // Dominios, páginas web y landings geolocalizadas
        if (item.url.includes('/dominios/') || item.url.includes('/paginas-web/') ||
            item.url.includes('/hosting-quito/') || item.url.includes('/hosting-guayaquil/')) {
          return { ...item, changefreq: 'weekly', priority: 0.8 };
        }
        // Blog index
        if (item.url === 'https://servistream.net/blog/') {
          return { ...item, changefreq: 'weekly', priority: 0.7 };
        }
        // Artículos del blog
        if (item.url.includes('/blog/')) {
          return { ...item, changefreq: 'monthly', priority: 0.6 };
        }
        // FAQ, contacto, nosotros y testimonios
        if (item.url.includes('/preguntas-frecuentes/') || item.url.includes('/contacto/') ||
            item.url.includes('/testimonios/') || item.url.includes('/nosotros/')) {
          return { ...item, changefreq: 'monthly', priority: 0.5 };
        }
        return { ...item, changefreq: 'weekly', priority: 0.7 };
      },
    })
  ]
});