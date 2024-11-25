import { test, expect } from "@playwright/test";

test.skip("Basic navigation", async ({ page }) => {
  await page.goto("https://gitlab.com/");
  await page
    .locator(".navigation-bottom-right")
    .getByRole("link", { name: " Get free trial " })
    .click();
  // await page.locator('[data-testid="new-user-first-name-field"]').fill("Jhoni");
  // await page.locator('[data-testid="new-user-last-name-field"]').fill("Snowi");
  await page.getByTestId("new-user-first-name-field").fill("Jhonny");
  await page.getByTestId("new-user-last-name-field").fill("Snowii");
  await expect(page.getByTestId("new-user-first-name-field")).toBeEditable();
  await expect(page.getByTestId("new-user-last-name-field")).toBeEditable();
});
