import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          home: path.resolve(__dirname, 'home.html'),
          about: path.resolve(__dirname, 'about.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          gallery: path.resolve(__dirname, 'gallery.html'),
          jobs: path.resolve(__dirname, 'jobs.html'),
          videos: path.resolve(__dirname, 'videos.html'),
          comics: path.resolve(__dirname, 'comics.html'),
          quote: path.resolve(__dirname, 'quote.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          dreamfields: path.resolve(__dirname, 'dreamfields.html'),
          summerlyn: path.resolve(__dirname, 'summerlyn.html'),
          grandview: path.resolve(__dirname, 'grandview.html'),
          downtown: path.resolve(__dirname, 'downtown.html'),
          bradfordValley: path.resolve(__dirname, 'bradford-valley.html'),
          hollandMarsh: path.resolve(__dirname, 'holland-marsh.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
