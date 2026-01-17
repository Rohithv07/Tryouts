import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  // Default: assumes we are developing locally
  let baseConfig = '/'

  // If we are building for production (npm run build)
  if (command !== 'serve') {
    // Check if we passed a specific base path (e.g. from Docker)
    // If not, default to '/Tryouts/' for GitHub Pages
    baseConfig = process.env.BASE_PATH || '/Tryouts/'
  }

  return {
    plugins: [react()],
    base: baseConfig,
  }
})