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

// import {
//   importDirectory,
//   runSVGO,
//   deOptimisePaths,
// } from '@iconify/tools'

// import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

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
          scale: 1.5,
          warn: true,
          // collections: {
          //   weather: async () => {
          //     // 加载icon
          //     const iconSet = await importDirectory('src/assets/icons/weather')
          //     await iconSet.forEach(async (name) => {
          //       const svg = iconSet.toSVG(name)
          //       await runSVGO(svg)
          //       await deOptimisePaths(svg)
          //       iconSet.fromSVG(name, svg)
          //     })
          //     return iconSet.export()
          //   },
          //   weather: FileSystemIconLoader('./src/assets/icons/weather', svg => svg.replace(/#fff/, 'currentColor')),
          // },
        }),
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
