import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Base path for GitHub Pages deployment
    // Must match your repository name
    base: '/tuyen-dung-mi-cay/',
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    animations: ['framer-motion'],
                    icons: ['lucide-react']
                }
            }
        }
    }
})

