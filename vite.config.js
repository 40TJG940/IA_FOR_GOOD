import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hackathon-ia-for-good/', // ⚠️ REMPLACEZ par le nom de votre repo
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },
  server: {
    open: true,
    host: true,
  },
});