import { test, expect } from "@playwright/test";

enum VIEWS {
  "DOMAINE" = "Par domaine",
  "PERIODE" = "Par période",
  "DOMAINE_ORIGIN" = "Domaine",
  "PERIODE_ORIGIN" = "Période"
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Programmation page", () => {
  test("has data table", async ({ page }) => {
    const table = await page.getByTestId("data-table");
    await expect(table).toBeVisible();
  });

  test("has view toggle", async ({ page }) => {
    const toggle = await page.getByTestId("view-toggle");
    await expect(toggle).toBeVisible();
  });

  test("can switch view", async ({ page }) => {
    const originHeader = await page.getByTestId("origin-header");
    const toggle = await page.getByTestId("view-toggle");

    // Initial state
    await expect(originHeader).toHaveText(VIEWS.DOMAINE_ORIGIN);
    await expect(toggle).toHaveText(VIEWS.PERIODE);
    await expect(toggle).toBeEnabled();

    // Switch to periode view
    await toggle.click();
    await expect(originHeader).toHaveText(VIEWS.PERIODE_ORIGIN);
    await expect(toggle).toHaveText(VIEWS.DOMAINE);
    await expect(toggle).toBeEnabled();

    // Switch back to domaine view
    await toggle.click();
    await expect(originHeader).toHaveText(VIEWS.DOMAINE_ORIGIN);
    await expect(toggle).toHaveText(VIEWS.PERIODE);
    await expect(toggle).toBeEnabled();
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

test.describe("Periode view", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByTestId("view-toggle").click();
  });

  test("has 4 columns", async ({ page }) => {
    const columns = await page.getByTestId("column-header");
    await expect(columns).toHaveCount(4);
  });

  test("has 5 rows", async ({ page }) => {
    const rows = await page.getByTestId("data-row");
    await expect(rows).toHaveCount(5);
  });

  test("has 25 items", async ({ page }) => {
    const items = await page.getByTestId("data-cell");
    await expect(items).toHaveCount(25);
  });
});
