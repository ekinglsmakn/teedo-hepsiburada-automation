import { Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart() {
    const acceptButton = this.page.getByText("Kabul Et", { exact: true });

    if (await acceptButton.isVisible().catch(() => false)) {
      await acceptButton.click();
    }

    await this.page.waitForLoadState("domcontentloaded");

    const addToCartButton = this.page.locator('[data-test-id="addToCart"]');

    await addToCartButton.click();

    await this.page.waitForTimeout(3000);

    await this.page.getByText("Sepetim").click();
  }
}
