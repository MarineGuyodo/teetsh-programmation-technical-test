import { test, expect } from "@playwright/test";

import { FR_THEMES } from "../src/enums/themes";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Layout", () => {
  test("has header container", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
  });

  test("has main container", async ({ page }) => {
    await expect(page.locator("main")).toBeVisible();
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Teetsh/);
    await expect(page.getByRole("heading", { name: "Teetsh" })).toBeVisible();
  });

  test("has mode toggle", async ({ page }) => {
    const trigger = await page.getByTestId("mode-toggle__trigger");
    const content = await page.getByTestId("mode-toggle__content");
    const checkToggleVisibility = async (
      text: string,
      mustBeVisible: boolean = true
    ) => {
      await expect(page.getByText(text))[
        mustBeVisible ? "toBeVisible" : "toBeHidden"
      ]();
    };

    // Dropdown should not be visible at first
    await expect(trigger).toBeVisible();
    await expect(content).not.toBeVisible();

    // Dropdown should open on trigger click
    await expect(trigger).toBeVisible();
    await expect(content).not.toBeVisible();
    await trigger.click();

    await expect(content).toBeVisible();
    await checkToggleVisibility(FR_THEMES.light);
    await checkToggleVisibility(FR_THEMES.dark);
    await checkToggleVisibility(FR_THEMES.system);

    // TEST: Dropdown should not be visible when clicked again
    await content.click();
    await expect(content).not.toBeVisible();
    await checkToggleVisibility(FR_THEMES.light, false);
    await checkToggleVisibility(FR_THEMES.dark, false);
    await checkToggleVisibility(FR_THEMES.system, false);
  });

  test("can switch theme", async ({ page }) => {
    const trigger = await page.getByTestId("mode-toggle__trigger");
    const dark = await page.getByText(FR_THEMES.dark);
    const light = await page.getByText(FR_THEMES.light);
    const body = await page.locator("css=html");
    const title = await page.getByRole("heading", { name: /Teetsh/ });

    // Initialization with dark theme
    await trigger.click();
    await expect(dark).toBeVisible();
    await dark.click();
    await expect(body).toHaveClass("dark");
    await expect(title).toHaveCSS("color", "rgb(250, 250, 250)");

    // Switching to light theme
    await trigger.click();
    await expect(light).toBeVisible();
    await light.click();
    await expect(body).not.toHaveClass("dark");
    await expect(title).toHaveCSS("color", "rgb(10, 10, 10)");

    // Should still be light theme after refresh
    await page.reload();
    await expect(body).not.toHaveClass("dark");
    await expect(title).toHaveCSS("color", "rgb(10, 10, 10)");
  });
});
