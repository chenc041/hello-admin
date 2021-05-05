import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { Proxy } from './src/configs/proxy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  base: '/',
  build: {
    rollupOptions: {},
    emptyOutDir: true,
    outDir: '../server/app/public',
  },
  server: {
    proxy: Proxy,
  },
});
