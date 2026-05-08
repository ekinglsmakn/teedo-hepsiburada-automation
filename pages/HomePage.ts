import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.hepsiburada.com/");
  }

  async openFirstProduct() {
    const page1Promise = this.page.waitForEvent("popup");

    await this.page
      .getByRole("link", {
        name: "Listene ekle: Altınmarka ALT211 Sütlü Damla Çikolata 1Kg",
      })
      .click();

    return await page1Promise;
  }
}
