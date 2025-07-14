
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  
  root: 'frontend',
 
  base: '/custom-light-garage/',
  build: {
  
    outDir: '../docs',
  
    emptyOutDir: true
  },
  plugins: [react()],
})