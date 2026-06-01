import { defineConfig } from 'vite'
import { resolve } from 'path'
import compression from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string): string | undefined {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function responsiveImageGenerator() {
  return {
    name: 'responsive-image-generator',
    closeBundle: {
      sequential: true,
      order: 'post' as const,
      handler: async () => {
        const distDir = resolve(__dirname, 'dist')
        const sizes = [
          { suffix: '_400', width: 400 },
          { suffix: '_800', width: 800 },
          { suffix: '_1200', width: 1200 },
        ]
        async function processDir(dir: string) {
          const entries = fs.readdirSync(dir, { withFileTypes: true })
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name)
            if (entry.isDirectory()) {
              await processDir(fullPath)
            } else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) {
              const ext = path.extname(entry.name)
              const name = path.basename(entry.name, ext)
              if (/_\d{3,4}$/.test(name)) continue
              for (const { suffix, width } of sizes) {
                const outPath = path.join(dir, name + suffix + ext)
                if (fs.existsSync(outPath)) continue
                try {
                  const info = await sharp(fullPath)
                    .resize(width, undefined, { fit: 'inside', withoutEnlargement: true })
                    .toFile(outPath)
                  console.log(`  [responsive] ${entry.name} → ${name}${suffix}${ext} (${info.size / 1024}KB)`)
                } catch { }
              }
            }
          }
        }
        console.log('\n[responsive-image] Generating responsive variants...')
        await processDir(distDir)
        console.log('[responsive-image] Done\n')
      },
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [
    ViteImageOptimizer({
      webp: { quality: 50 },
      png: { quality: 65 },
      jpeg: { quality: 50 },
      jpg: { quality: 50 },
      avif: { quality: 50 },
    }),
    tailwindcss(),
    figmaAssetResolver(),
    react(),
    responsiveImageGenerator(),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/motion')) return 'vendor-motion'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
