import { test, expect } from "@playwright/test";

// Annotate entire file as serial.
test.describe.configure({ mode: "serial" });

const baseUrl = "http://localhost:3000";

test.describe("Home Page Crud Operations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  let todoTitle = `Test Todo`;
  let todoBody = "This is an E2E test todo.";

  test("should create a new todo", async ({ page }) => {
    await page.getByPlaceholder("Title").fill(todoTitle);
    await page.getByPlaceholder("Body").fill(todoBody);
    await page.getByRole("checkbox", { name: "Completed" }).uncheck();
    await page.getByRole("button", { name: "Add Todo" }).click();

    await expect(page.getByRole("heading", { name: todoTitle })).toBeVisible();
    await expect(page.getByText(todoBody)).toBeVisible();
  });

  test("should toggle todo completion", async ({ page }) => {
    const todoDiv = page.locator('[data-testid="todos"]').filter({
      has: page.getByRole("heading", { name: todoTitle }),
    });
    const todoCheckbox = todoDiv.getByRole("checkbox");

    await expect(todoCheckbox).not.toBeChecked();

    await todoCheckbox.click();
    await expect(todoCheckbox).toBeChecked();

    const titleText = todoDiv.getByRole("heading", { name: todoTitle });
    await expect(titleText).toHaveClass(/line-through/);

    await todoCheckbox.click();
    await expect(todoCheckbox).not.toBeChecked();
    await expect(titleText).not.toHaveClass(/line-through/);
  });

  test("should delete todo", async ({ page }) => {
    const todoDiv = page.locator('[data-testid="todos"]').filter({
      has: page.getByRole("heading", { name: todoTitle }),
    });

    const deleteButton = todoDiv.getByRole("button");

    await deleteButton.click();

    // Wait for todo div to disappear
    await expect(todoDiv).toHaveCount(0);

    // Optional: ensure the text is gone
    await expect(page.getByRole("heading", { name: todoTitle })).toHaveCount(0);
    await expect(page.getByText(todoBody)).toHaveCount(0);
  });
});
