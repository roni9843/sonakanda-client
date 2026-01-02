import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration for React + SWC
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
});
