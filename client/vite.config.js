import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect deployment environment
const isGitHubPages = process.env.GITHUB_ACTIONS || false;
const isVercel = process.env.VERCEL || false;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/Shree-Jagannatha/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
})
