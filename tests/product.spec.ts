import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Product } from '@pages/product-page';
import { allure } from "allure-playwright";


test.beforeEach(async ({ page }) => {
    await allure.epic("Automation exercise");
    await allure.feature("Product");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
});

// test('Verify All Products and product detail page', async ({ page }) => {
//     await allure.story("All Product");
//     const product = new Product(page);
//     await product.navigateAllProduct();
//     await product.viewDetailProduct();
// });
// test('Search Product', async ({ page }) => {
//     await allure.story("Search Product");
//     const product = new Product(page);
//     await product.navigateAllProduct();
//     await product.searchProduct();
//     await product.verifySearchProduct();
// });
// test('Add Products in Cart', async ({ page }) => {
//     await allure.story("Add Products");
//     const product = new Product(page);
//     await product.addProductInCart();
// });
// test('Verify Product quantity in Cart', async ({ page }) => {
//     await allure.story("Check quantity");
//     const product = new Product(page);
//     await product.verifyQuantityProductInCart();
// });
// test('Remove Products From Cart', async ({ page }) => {
//     await allure.story("Remove product");
//     const product = new Product(page);
//     await product.addProductInCart();
//     await product.removeProductInCart();
// });
test('View Category Products', async ({ page }) => {
    await allure.story("Category Products");
    const product = new Product(page);
    await product.viewCategoryProduct();
});


