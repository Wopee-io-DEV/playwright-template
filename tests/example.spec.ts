import { Wopee } from '@wopee-io/wopee.pw';
import { test } from '@playwright/test';

test.describe('test', () => {
  let wopee: Wopee;
  test.beforeAll(async () => {
    wopee = new Wopee();    
    
    const now = new Date();
    const date = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
    await wopee.startSuite(`test-${date}`);
  });

  test.afterEach(async () => {
    await wopee.stopScenario();
  });

  test('trackImage', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const screenshot = await page.screenshot({ type: 'png' });
    const imageBase64 = screenshot.toString('base64');
    
    await wopee.trackImage({
      browser: 'browser',
      comment: 'comment',
      customTags: 'customTags',
      device: 'device',
      imageBase64: imageBase64,
      os: 'os',
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: 'trackImageWithoutStartScenario',
      stepName: 'image-trackImage',
      viewport: 'viewport',
    });
  });

  test('trackFullPageScreenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await wopee.trackFullPage({
      browser: 'browser',
      comment: 'comment',
      customTags: 'customTags',
      device: 'device',
      os: 'os',
      page: page,
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: 'trackFullPageScreenshotWithoutStartScenario',
      stepName: 'image-trackFullPageScreenshot',
      viewport: 'viewport',
    });
  });

  test('trackElement', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const element = page.locator('//a[@class="getStarted_Sjon"]');

    await wopee.trackElement({
      browser: 'browser',
      comment: 'comment',
      customTags: 'customTags',
      device: 'device',
      locator: element,
      os: 'os',
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: 'trackElementWithoutStartScenario',
      stepName: 'element',
      viewport: 'viewport',
    });
  });

  test('trackViewport', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const element = page.locator('//a[@class="getStarted_Sjon"]');

    await wopee.trackElement({
      browser: 'browser',
      comment: 'comment',
      customTags: 'customTags',
      device: 'device',
      locator: element,
      os: 'os',
      pixelToPixelDiffTolerance: 1.0,
      scenarioName: 'trackViewportWithoutStartScenario',
      stepName: 'viewport',
      viewport: 'viewport',
    });
  });
});