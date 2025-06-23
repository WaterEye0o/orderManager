import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    jsxInject: `import { h } from 'omi'`
  },
  resolve: {
    alias: {
      // "omi": resolve("./src/omi/index.ts"),
      '@': resolve('./src/')
    }
  },
  server: {
    cors:true,
    proxy: {
      '/ierp/kapi': {
        target: 'http://116.228.31.185:8025/',
        changeOrigin: true,
      },
    }
  }
})
