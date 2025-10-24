import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/sum-flow-mpa/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "src/views/login/login.html"),
        dashboard: resolve(__dirname, "src/views/dashboard/dashboard.html"),
        summary: resolve(__dirname, "src/views/summary/summary.html"),
        error: resolve(__dirname, "src/views/error/error.html"),
      },
    },
  },
});
