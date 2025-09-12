import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages under username.github.io, base can be '/'.
  // For project pages (repo != username.github.io), set base to '/<repo>/' after pushing.
  base: '/',
  build: { outDir: 'docs' }
})
