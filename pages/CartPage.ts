import { expect, Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductInCart() {
    await expect(this.page.locator("body")).not.toContainText(
      "Sepetin şu an boş",
    );
    await expect(this.page.locator("body")).toContainText("Altınmarka");
    await expect(this.page.locator("body")).toContainText("TL");
  }
}
