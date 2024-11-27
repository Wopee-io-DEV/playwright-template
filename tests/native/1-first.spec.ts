import { test, expect } from "@playwright/test";

const baseUrl = "https://dronjo.wopee.io";

test("Dronjo home page - visual test", async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page).toHaveScreenshot();
});
