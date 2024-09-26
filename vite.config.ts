import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { join } from "path";

const srcRoot = join(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  root: srcRoot,
  base: "/react-deploy/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcRoot,
    },
  },
  build: {
    outDir: join(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
