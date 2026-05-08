import { test } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

test("Guest user should add product to cart without login", async ({
  page,
}) => {
  const homePage = new HomePage(page);

  await homePage.navigate();

  const productPageTab = await homePage.openFirstProduct();

  const productPage = new ProductPage(productPageTab);

  await productPage.addProductToCart();

  const cartPage = new CartPage(productPageTab);

  await cartPage.verifyProductInCart();
});
