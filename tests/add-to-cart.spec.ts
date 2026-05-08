import { test, expect } from "@playwright/test";

test("Guest user should add product to cart without login", async ({
  page,
}) => {
  await page.goto("https://www.hepsiburada.com/");
  const page1Promise = page.waitForEvent("popup");
  await page
    .getByRole("link", {
      name: "Listene ekle: Altınmarka ALT211 Sütlü Damla Çikolata 1Kg",
    })
    .click();
  const page1 = await page1Promise;
  await page1.getByText("Kabul Et", { exact: true }).click();
  await page1.locator('[data-test-id="addToCart"]').click();
  await page1.waitForTimeout(3000);
  await page1.getByText("Sepetim").click();
  await expect(page1.locator("body")).toContainText("Altınmarka");
  await expect(page1.locator("body")).toContainText("TL");
});
