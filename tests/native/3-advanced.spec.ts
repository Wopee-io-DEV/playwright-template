import { test, expect } from "@playwright/test";

const baseUrl = "https://dronjo.wopee.io/gallery.html";

test("Dronjo gallery page - visual test", async ({ page }) => {
  await page.goto(baseUrl);

  await expect(page).toHaveScreenshot(
    "advanced.png", // set `Snapshot` name
    {
      // Takes a screenshot of the full scrollable page, instead of the currently visible viewport.
      // Default: false.
      //   fullPage: true,

      // Locators that should be masked when the screenshot is taken.
      mask: [page.locator("#ytplayer"), page.locator(".gallery")],

      // An acceptable ratio of pixels that are different to the total amount of pixels, between 0 and 1.
      // Default is configurable with TestConfig.expect. Unset by default.
      maxDiffPixelRatio: 0.01,

      // An acceptable amount of pixels that could be different.
      // Default is configurable with TestConfig.expect. Unset by default.
      maxDiffPixels: 1,

      // Time to retry the assertion for in milliseconds.
      //   Defaults to timeout in TestConfig.expect.
      timeout: 1000,
    }
  );
});

//
// More params - see below
//

//
// ignore area
//
//   clip: { x: 0, y: 0, width: 100, height: 100 },

//
// set `animations` to "disabled" (default) or "allowed"
//
//   animations: "disabled",

//
// set `caret` to "hide" (default) or "initial"
//
//   caret: "hide",

//
// The color of the overlay box for masked elements, in CSS color format. Default: #FF00FF (pink).
//
//   maskColor: "#FF0000",

//
// Hides default white background and allows capturing screenshots with transparency.
// Not applicable to jpeg images. Default: false.
//
//   omitBackground: true,

//
// When set to "css", screenshot will have a single pixel per each css pixel on the page.
// For high-dpi devices, this will keep screenshots small.
// Using "device" option will produce a single pixel per each device pixel, so screenshots of high-dpi devices
// will be twice as large or even larger.
// Default: "css".
//
//   scale: "css",

//
// File name containing the stylesheet to apply while making the screenshot.
// This is where you can hide dynamic elements, make elements invisible or change their properties to help you
// creating repeatable screenshots.
// This stylesheet pierces the Shadow DOM and applies to the inner frames.
//
//   stylePath: "path/to/stylesheet.css",

//
// An acceptable perceived color difference in the YIQ color space between the same pixel in compared images,
// between zero (strict) and one (lax), default is configurable with TestConfig.expect. Defaults to 0.2.
//
//   threshold: 0.2,

//
//
// Usefull links:
//
// - toHaveScreenshot(name) API https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
// - Caret explanation https://developer.mozilla.org/en-US/docs/Glossary/Caret, https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
