// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
// import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default {
	plugins: [vue()],
	resolve: {
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
}
