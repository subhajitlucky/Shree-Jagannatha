import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine if building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages, otherwise use root.
  base: isGitHubPages ? '/Shree-Jagannatha/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    // port: 3000,
    open: true,
  },
})
