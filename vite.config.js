import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1024, // Increase limit to 1MB (default is 500KB)
    outDir: "dist",
    assetsDir: "assets",
    manifest: true
  }
});
