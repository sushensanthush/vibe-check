import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'VibeCheck',
      fileName: (format) => `vibe-check.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
          VibeCheck: 'VibeCheck'
        }
      }
    }
  },
  plugins: [dts({ insertTypesEntry: true })]
});