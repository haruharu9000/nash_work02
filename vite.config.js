import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
})
