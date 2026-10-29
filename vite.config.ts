import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static build -> `dist/`. No backend or paid service required.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  build: {
    // Keep small images (e.g. the nav mark) as files, not base64, for caching.
    assetsInlineLimit: 0,
  },
})
