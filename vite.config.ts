import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
//@ts-ignore
import viteCompression from "vite-plugin-compression";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

      // global imports to register
      imports: [
        // 插件预设支持导入的api
        "vue",
        "vue-router",
        "pinia",
        // 自定义导入的api
      ],

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },

      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "./auto-imports.d.ts",
    }),
    // 自动引入组件
    Components({
      resolvers: [
        AntDesignVueResolver({
          // 参数配置可参考：https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/antdv.ts
          // 自动引入 ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
          resolveIcons: true,
        }),
      ],
    }),
    //windIcss
    WindiCSS(),
  ],
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/mian.scss";',
      },
    },
  },
  //启动服务配置
  server: {
    host: "0.0.0.0",
    port: 8000,
    open: false,
    https: false,
    proxy: {},
  },
  // 生产环境打包配置
  build: {
    target: "es2015",
    cssTarget: "chrome80",
    // minify: 'terser',
    /**
     * 当 minify=“minify:'terser'” 解开注释
     * Uncomment when minify="minify:'terser'"
     */
    // terserOptions: {
    //   compress: {
    //     keep_infinity: true,
    //     drop_console: VITE_DROP_CONSOLE,
    //   },
    // },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
