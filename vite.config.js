import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      name: 'VueModelsCreator',
      fileName: 'vue-models-creator',
    },
    copyPublicDir: false,
  },
  plugins: [
    vue(),
  ],
});
