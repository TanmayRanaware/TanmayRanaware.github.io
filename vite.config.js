import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use *relative* asset paths so CSS/JS load no matter what
export default defineConfig({
  plugins: [react()],
  base: '',                 // << was '/' — change to ''
  build: { outDir: 'docs' } // GitHub Pages serves from /docs
})
