import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHub = process.env.GITHUB_ACTIONS === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages, otherwise use root.
  base: isGitHub ? '/Shree-Jagannatha/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true,
  },
})
