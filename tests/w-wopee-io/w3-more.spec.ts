import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

let wopee: Wopee;
const baseUrl = "https://dronjo.wopee.io/gallery.html";

test.describe("Example w. Wopee.io", () => {
  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`test-${Math.floor(Math.random() * 1000) + 1}`);
  });

  test("Gallery", async ({ page }, testInfo) => {
    await wopee.startScenario(testInfo.title);
    await page.goto(baseUrl);

    await wopee.trackFullPage({
      stepName: testInfo.title,
      page,
      // Other available params
      comment: "This is a test: https://wopee.io/ ",
      customTags: "prio-1",
      // pixelToPixelDiffTolerance: 100,
      // viewport: "1920x1080",
    });

    await wopee.stopScenario();
  });
});
