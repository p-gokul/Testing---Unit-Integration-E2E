import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:3000";

test.describe("Home Page Form Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test("should have correct metadata and elements", async ({ page }) => {
    await expect(page).toHaveTitle("Todo");
    await expect(page.getByRole("heading", { name: "Todo App" })).toBeVisible();
  });

  test("should have form elements", async ({ page }) => {
    await expect(page.getByPlaceholder("Title")).toBeVisible();
    await expect(page.getByPlaceholder("Body")).toBeVisible();

    const checkbox = page.getByRole("checkbox", { name: "Completed" });
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked(); // ✅ initially unchecked

    await checkbox.check();
    await expect(checkbox).toBeChecked(); // ✅ ensure it’s checked

    await expect(page.getByRole("button", { name: "Add Todo" })).toBeVisible();
  });
});
