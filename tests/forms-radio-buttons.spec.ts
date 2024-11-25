import { test, expect } from "@playwright/test";
test.beforeEach("open home page", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");
});

test("Check adding 1 item to todo list", async ({ page }) => {
  const newTodo = page.getByPlaceholder("What needs to be done?");
  await newTodo.fill("item1");
  await newTodo.press("Enter");
  await expect(page.getByTestId("todo-count")).toHaveText("1 item left");
});

test("Check completing 1 item from todo list", async ({ page }) => {
  const newTodo = page.getByPlaceholder("What needs to be done?");
  await newTodo.fill("item1");
  await newTodo.press("Enter");
  await newTodo.fill("item2");
  await newTodo.press("Enter");
  const firstToDo = page.getByTestId("todo-item").nth(0);
  const secondToDo = page.getByTestId("todo-item").nth(1);
  await firstToDo.getByRole("checkbox").check();
  await expect(secondToDo).not.toHaveClass("completed");
  await expect(firstToDo).toHaveClass("completed");
  await expect(page.getByTestId("todo-count")).toHaveText("1 item left");
});
