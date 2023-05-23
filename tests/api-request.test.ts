import { expect, test } from "@playwright/test";

const pokemonName = "pikachu";

test("CSR (Client-side Rendering)", async ({ page }) => {
  await page.goto("/csr");

  await expect(page.getByAltText(pokemonName)).toBeVisible();
  await expect(page.getByText(pokemonName)).toBeVisible();
});

test("SSR (Server-side Rendering)", async ({ page }) => {
  await page.goto("/ssr");

  await expect(page.getByAltText(pokemonName)).toBeVisible();
  await expect(page.getByText(pokemonName)).toBeVisible();
});

test("SSG (Static-site Generation)", async ({ page }) => {
  await page.goto("/ssg");

  await expect(page.getByAltText(pokemonName)).toBeVisible();
  await expect(page.getByText(pokemonName)).toBeVisible();
});
