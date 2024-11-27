import { Wopee } from "@wopee-io/wopee.pw";
import { test } from "@playwright/test";

let wopee: Wopee;
const baseUrl = "https://dronjo.wopee.io";

test.describe("Example w. Wopee.io", () => {
  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`First demo test suite`);
  });

  test("Home", async ({ page }, testInfo) => {
    await wopee.startScenario(testInfo.title);

    await page.goto(baseUrl);
    await wopee.trackFullPage({ stepName: "Home page", page });

    await wopee.stopScenario();
  });
});
