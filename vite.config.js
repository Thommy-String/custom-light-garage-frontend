// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({

  base: '/custom-light-garage-frontend/',
  build: {
   
    outDir: 'docs',
    emptyOutDir: true
  },
  plugins: [react()],
})