import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const routes = ['/', '/about', '/services', '/solutions', '/approach', '/industries', '/contact']

function sitemapPlugin(): Plugin {
  let outDir = 'dist'
  let siteUrl = ''

  return {
    name: 'synerlogic-sitemap',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
      siteUrl = (config.env.VITE_SITE_URL ?? '').trim().replace(/\/$/, '')
    },
    closeBundle() {
      const urls = routes
        .map((path) => {
          const loc = siteUrl ? `${siteUrl}${path === '/' ? '/' : path}` : path
          return `  <url><loc>${loc}</loc></url>`
        })
        .join('\n')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      writeFileSync(resolve(outDir, 'sitemap.xml'), xml)

      const sitemapLine = siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : '\n'
      const robots = `User-agent: *\nAllow: /\n${sitemapLine}`
      writeFileSync(resolve(outDir, 'robots.txt'), robots)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemapPlugin()],
  build: {
    sourcemap: false,
  },
})
