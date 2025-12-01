import { defineConfig } from "@playwright/test";

const baseURL =
  process.env.PLAYWRIGHT_BASE_URL ??
  process.env.NEXTAUTH_URL ??
  "http://localhost:3000";

const webServerUrl =
  process.env.PLAYWRIGHT_WEB_SERVER_URL ??
  baseURL.replace("localhost", "127.0.0.1");

export default defineConfig({
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,
  },
  webServer: {
    command: process.env.CI ? "npm run start" : "npm run dev",
    url: webServerUrl,
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },
});
