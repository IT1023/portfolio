import { mergeConfig } from "vitest/config";
import defaultConfig from "./vite.config";

export default mergeConfig(defaultConfig, {
  test: {
    environment: "jsdom",
    setupFiles: "./frontend/__tests__/setup.ts",
  },
});
