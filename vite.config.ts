import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";
import federation from "@originjs/vite-plugin-federation";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    eslintPlugin(),
    federation({
      name: "teste",
      filename: "remoteEntry.js",
      exposes: {
        "./BasicButton": "./src/stories/BasicButton.vue",
      },
      shared: ["vue"],
    }),
    copy({
      targets: [
        {
          src: "dist/assets",
          dest: "public",
        },
      ],
      hook: "writeBundle", // notice here
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/boot.scss" as *;`,
      },
    },
  },
  server: { port: 8080 },
  build: {
    polyfillModulePreload: false,
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
