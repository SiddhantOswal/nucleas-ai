import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from 'vite-imagetools';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    imagetools(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false, // keep original files
    }),
  ].filter(Boolean),
  build: {
    minify: 'esbuild',
    sourcemap: false,
    treeshake: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // You can add more libraries here to split large vendor chunks for better caching and performance
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('react-router-dom')) return 'react-router-dom';
            if (id.includes('lucide-react')) return 'lucide-react';
            if (id.includes('react-helmet-async')) return 'react-helmet-async';
            if (id.includes('@tanstack/react-query')) return 'react-query';
            if (id.includes('recharts')) return 'recharts';
            if (id.includes('three')) return 'three';
            if (id.includes('@radix-ui')) return 'radix-ui';
            if (id.includes('d3')) return 'd3';
            if (id.includes('lodash')) return 'lodash';
            return 'vendor';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
