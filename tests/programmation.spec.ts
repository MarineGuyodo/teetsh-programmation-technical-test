import { test, expect } from "@playwright/test";

import { FR_PROGRAMMATION_VIEWS as VIEWS } from "../src/enums/views";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Programmation page", () => {
  test("has data table", async ({ page }) => {
    const table = await page.getByTestId("programmation-table");
    await expect(table).toBeVisible();
  });

  test("has view toggle", async ({ page }) => {
    const toggle = await page.getByTestId("view-toggle");
    await expect(toggle).toBeVisible();
  });

  test("can switch view", async ({ page }) => {
    const toggle = await page.getByTestId("view-toggle");

    // Initial state
    await expect(toggle).toHaveText(VIEWS.PERIODE);
    await expect(toggle).toBeEnabled();

    // Switch to periode view
    await toggle.click();
    await expect(toggle).toHaveText(VIEWS.DOMAINE);
    await expect(toggle).toBeEnabled();

    // Switch back to domaine view
    await toggle.click();
    await expect(toggle).toHaveText(VIEWS.PERIODE);
    await expect(toggle).toBeEnabled();
  });
});

test.describe("Domaine view", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByTestId("view-toggle").click();
  });

  test("has 6 columns", async ({ page }) => {
    const columns = await page.getByTestId("column-header");
    await expect(columns).toHaveCount(6);
  });

  test("has 4 rows", async ({ page }) => {
    const rows = await page.getByTestId("data-row");
    await expect(rows).toHaveCount(4);
  });

  test("has 24 items", async ({ page }) => {
    const items = await page.getByTestId("data-cell");
    await expect(items).toHaveCount(24);
  });

  test("has correct headers", async ({ page }) => {
    const headers = [VIEWS.DOMAINE, ...periodes];

    for (const header of await page.getByTestId("column-header").all()) {
      await expect(header).toHaveText(headers[0]);
      headers.shift();
    }
  });

  test("has correct rows titles", async ({ page }) => {
    const titles = [...domaines];

    for (const row of await page.getByTestId("data-row").all()) {
      await expect(row.getByTestId("data-cell").first()).toHaveText(titles[0]);
      titles.shift();
    }
  });
});

test.describe("Periode view", () => {
  test("has 5 columns", async ({ page }) => {
    const columns = await page.getByTestId("column-header");
    await expect(columns).toHaveCount(5);
  });

  test("has 5 rows", async ({ page }) => {
    const rows = await page.getByTestId("data-row");
    await expect(rows).toHaveCount(5);
  });

  test("has 25 items", async ({ page }) => {
    const items = await page.getByTestId("data-cell");
    await expect(items).toHaveCount(25);
  });

  test("has correct headers", async ({ page }) => {
    const headers = [VIEWS.PERIODE, ...domaines];

    for (const header of await page.getByTestId("column-header").all()) {
      await expect(header).toHaveText(headers[0]);
      headers.shift();
    }
  });

  test("has correct rows titles", async ({ page }) => {
    const titles = [...periodes];

    for (const row of await page.getByTestId("data-row").all()) {
      await expect(row.getByTestId("data-cell").first()).toHaveText(titles[0]);
      titles.shift();
    }
  });
});

// FIXTURES

const domaines = [
  "Nombres",
  "Calculs",
  "Espace et géométrie",
  "Grandeurs et mesures"
];

const periodes = [
  "Période 1",
  "Période 2",
  "Période 3",
  "Période 4",
  "Période 5"
];
