import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so assets load reliably on Pages
export default defineConfig({
  plugins: [react()],
  base: '',
  build: { outDir: 'docs' }
})
