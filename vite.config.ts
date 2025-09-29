import react from "@vitejs/plugin-react";
import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

const viteConfig = defineViteConfig({
  plugins: [react()],
  base: "/philosophers-visualizer-v2/",
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
