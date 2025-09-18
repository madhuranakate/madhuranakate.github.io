import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths so GitHub Pages serves JS/CSS with correct MIME
  base: '',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
