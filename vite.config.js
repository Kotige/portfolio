import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cases } from './src/data/cases.js'
import { SITE_URL } from './src/site.js'

// Gera sitemap.xml e robots.txt no build, a partir da lista de cases:
// um case novo entra no sitemap sozinho, e os "em breve" ficam de fora.
function seoArquivos() {
  return {
    name: 'seo-arquivos',
    generateBundle() {
      const caminhos = [
        '/',
        ...cases.filter((c) => c.status !== 'em-breve').map((c) => `/cases/${c.slug}`),
      ]
      const urls = caminhos.map((c) => `  <url><loc>${SITE_URL}${c}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoArquivos()],
})
