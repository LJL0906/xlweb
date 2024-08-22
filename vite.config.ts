import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  server: {
    host: true,
    open: true,
    port: 9010, //启动端口
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
