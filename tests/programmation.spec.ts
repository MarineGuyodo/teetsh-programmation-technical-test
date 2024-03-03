import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Programmation page", () => {
  test("has data table", async ({ page }) => {
    const table = await page.getByTestId("data-table");
    await expect(table).toBeVisible();
  });
});

test.describe("Domaine view", () => {
  test("has 5 columns", async ({ page }) => {
    const columns = await page.getByTestId("column-header");
    await expect(columns).toHaveCount(5);
  });

  test("has 4 rows", async ({ page }) => {
    const rows = await page.getByTestId("data-row");
    await expect(rows).toHaveCount(4);
  });

  test("has 24 items", async ({ page }) => {
    const items = await page.getByTestId("data-cell");
    await expect(items).toHaveCount(24);
  });
});
