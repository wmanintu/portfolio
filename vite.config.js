// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      vue: "@vue/compat",
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      },
    }),
  ],
};
