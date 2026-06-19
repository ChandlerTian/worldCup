// Post-build: Remove type="module" and crossorigin from dist/index.html
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = resolve(__dirname, '../dist/index.html')

let html = readFileSync(htmlPath, 'utf-8')
html = html.replace(/type="module"\s*/g, '')
html = html.replace(/\s*crossorigin/g, '')
writeFileSync(htmlPath, html)
console.log('✓ postbuild: patched dist/index.html for file:// compatibility')
