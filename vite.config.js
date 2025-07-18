// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base : '/custom-light-garage-frontend/',  // percorso GitHub Pages
  plugins:[react()],

  build:{
    outDir:'docs',
    emptyOutDir:true,
    rollupOptions:{
      external:['react-is']   // <-- non includerla nel bundle prod
    }
  },

  // in dev Vite usa esbuild per pre-bundle: digli di saltarla
  optimizeDeps:{
    exclude:['react-is']
  }
})