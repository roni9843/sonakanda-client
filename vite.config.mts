import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration for React + SWC + GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/sonakanda-client/', // GitHub repo name, important for GH Pages
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
});
