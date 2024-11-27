import { test, expect } from "@playwright/test";

const baseUrl = "https://dronjo.wopee.io";
// const baseUrl = "https://dronjo.wopee.io/gallery.html";

test("Dronjo home page - visual test", async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page).toHaveScreenshot();
});
