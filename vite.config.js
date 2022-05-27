import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import {
  presetUno,
  presetIcons,
  presetAttributify,
  transformerVariantGroup,
} from 'unocss'
import UnocssIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [ElementPlusResolver()] }),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
        // UnocssIcons({
        //   prefix: 'i-',
        //   extraProperties: {
        //     display: 'inline-block',
        //   },
        // }),
      ],
      transformers: [transformerVariantGroup()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
