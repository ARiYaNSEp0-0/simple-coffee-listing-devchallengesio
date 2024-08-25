import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  base: "",
  root: "src",
  server: {
    open: true,
    watch: {},
    host: true,
  },
  build: {
    outDir: "../",
  },
});
