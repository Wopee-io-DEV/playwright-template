import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

test.describe("Complex Example", () => {
  let wopee: Wopee;

  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`Complex Example ${new Date().toISOString().substring(0, 16)}`);
  });

  test.afterEach(async () => {
    await wopee.stopScenario();
  });

  test("trackFullPage", async ({ page }, testInfo) => {
    await page.goto("https://playwright.dev/");

    await wopee.trackFullPage({
      comment: "See the Repo tab above for more details about implementation.",
      customTags: "complex",
      page: page,
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: testInfo.title,
      stepName: "fullpage",
      viewport: "viewport",
    });
  });

  test("trackElement", async ({ page }, testInfo) => {
    await page.goto("https://playwright.dev/");

    await wopee.trackElement({
      comment: "See the Repo tab above for more details about implementation.",
      customTags: "complex",
      locator: page.locator('//a[@class="getStarted_Sjon"]'),
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: testInfo.title,
      stepName: "element",
      viewport: "viewport",
    });
  });

  test("trackImage", async ({ page }, testInfo) => {
    await page.goto("https://playwright.dev/");

    const screenshot = await page.screenshot({ type: "png" });
    await wopee.trackImage({
      comment: "See the Repo tab above for more details about implementation.",
      customTags: "complex",
      imageBase64: screenshot.toString("base64"),
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: testInfo.title,
      stepName: "image",
      viewport: "viewport",
    });
  });

});
