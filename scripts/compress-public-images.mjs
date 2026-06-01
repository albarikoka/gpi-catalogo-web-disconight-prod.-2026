import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(__dirname, '../public')

async function compressDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await compressDir(fullPath)
    } else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) {
      const stat = fs.statSync(fullPath)
      if (stat.size > 50 * 1024) {
        const ext = path.extname(entry.name).toLowerCase()
        const tmpPath = fullPath + '.tmp'
        try {
          let pipeline = sharp(fullPath)
          if (ext === '.webp') pipeline = pipeline.webp({ quality: 50 })
          else if (ext === '.png') pipeline = pipeline.png({ quality: 65 })
          else pipeline = pipeline.jpeg({ quality: 50 })
          await pipeline.toFile(tmpPath)
          fs.renameSync(tmpPath, fullPath)
          const newStat = fs.statSync(fullPath)
          console.log(`${fullPath.replace(publicDir, 'public')}: ${(stat.size / 1024).toFixed(0)}KB -> ${(newStat.size / 1024).toFixed(0)}KB`)
        } catch {
          try { fs.unlinkSync(tmpPath) } catch {}
        }
      }
    }
  }
}

console.log('Compressing images in public/...')
compressDir(publicDir).then(() => console.log('Done!'))
