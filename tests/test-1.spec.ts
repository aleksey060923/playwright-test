import { test, expect } from "@playwright/test";

test.describe("тесты главной страницы", () => {
  test("проверка отображение формы авторизации", async ({ page }) => {
    await page.goto("https://lk.synaptik.ru/login");
    await expect(page.getByRole("textbox", { name: "Логин *" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Пароль *" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Забыли пароль?" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Войти" })).toBeVisible();
  });

  test("проверка названия элементов формы авторизации", async ({ page }) => {
    await page.goto("https://lk.synaptik.ru/login");

    await expect(page.locator("form")).toContainText("Логин");
    await expect(page.locator("form")).toContainText("Пароль");
    await expect(
      page.getByRole("link", { name: "Забыли пароль?" })
    ).toBeVisible();
    await expect(page.getByRole("button")).toContainText("Войти");
  });

  test("проверка атрибута хруф у забыли пароль", async ({ page }) => {
    await page.goto("https://lk.synaptik.ru/login");

    await expect(
      page.getByRole("link", { name: "Забыли пароль?" })
    ).toHaveAttribute("href", "https://t.me/maximzemtsov");
  });
});
