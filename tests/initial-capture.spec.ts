import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

test.describe("Initial Capture", () => {
  let wopee: Wopee;

  test.beforeAll(async () => {
    if (!process.env.WOPEE_PROJECT_URL) {
      throw new Error('WOPEE_PROJECT_URL environment variable must be set');
    }
    wopee = new Wopee();
    await wopee.startSuite(`Initial Capture ${new Date().toISOString().substring(0, 16)}`);
  });

  test.beforeEach(async ({}, testInfo) => {
    await wopee.startScenario(test.info().title, testInfo);
  });

  test.afterEach(async () => {
    await wopee.stopScenario();
  });

  
  test("Home Page", async ({ page }) => {
    await page.goto(process.env.WOPEE_PROJECT_URL || "https://dronjo.wopee.io");

    await wopee.trackFullPage({ stepName: "Check Full Page", page});
  });

});
