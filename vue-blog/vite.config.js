import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({mode})=>{
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd())
  const apiBaseUrl = env.VITE_API_URL
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalProperties: '@import "@/assets/styles/variables.scss";'
        }
      }
    },
    server:{
      proxy:{
        '/api/v1':{
          target: apiBaseUrl,
          changeOrigin: true
        }
      }
    }
  })
}
