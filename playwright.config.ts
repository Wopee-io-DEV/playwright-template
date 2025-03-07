import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/",
  testMatch: ["**/*.spec.ts"],
  snapshotPathTemplate: "baselines{/projectName}/{testFilePath}/{arg}{ext}",
  fullyParallel: true,
  timeout: 100000,
  reporter: "@wopee-io/wopee.pw/wopee-reporter",
  use: {
    trace: "on",
    video: "on",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chrome",
      use: {
        headless: true,
        viewport: { width: 1600, height: 1000 },
        channel: "chrome",
      },
    },
  ],
});
