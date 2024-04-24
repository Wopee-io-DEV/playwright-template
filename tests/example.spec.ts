import { Wopee } from '@wopee-io/wopee.pw';
import { test } from '@playwright/test';

test.describe('test', () => {
  let wopee: Wopee;
  test.beforeAll(async () => {
    wopee = new Wopee();
    await wopee.startSuite(`test-${Math.floor(Math.random() * 1000) + 1}`);
  });

  test('trackImage', async ({ page }) => {
    await wopee.startScenario('trackImage');

    await page.goto('https://playwright.dev/');

    const screenshot = await page.screenshot({ type: 'png' });
    const imageBase64 = screenshot.toString('base64');
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    await wopee.trackImage(`image-${randomNumber}`, imageBase64);

    await wopee.stopScenario();
  });

  test('trackFullPageScreenshot', async ({ page }) => {
    await wopee.startScenario('trackFullPageScreenshot');

    await page.goto('https://playwright.dev/');

    const randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    await wopee.trackFullPageScreenshot(page, `image-${randomNumber}`);

    await wopee.stopScenario();
  });
});