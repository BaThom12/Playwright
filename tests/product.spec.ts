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
// test('View Category Products', async ({ page }) => {
//     await allure.story("Category Products");
//     const product = new Product(page);
//     await product.viewCategoryProduct();
// });
// test('View & Cart Brand Products', async ({ page }) => {
//     await allure.story("Branch Products");
//     const product = new Product(page);
//     await product.viewBranchProduct();
// });
// test('Search Products and Verify Cart After Login', async ({ page }) => {
//     await allure.story("Search Products and Verify Cart After Login");
//     const product = new Product(page);
//     await product.navigateAllProduct();
//     await product.searchProduct();
//     await product.verifySearchProduct();
//     await product.addSearchProductToCart();
// });
// test('Add review on product', async ({ page }) => {
//     await allure.story("Add review on product");
//     const product = new Product(page);
//     await product.navigateAllProduct();
//     await product.reviewProduct();
// });
test('Add to cart from Recommended items', async ({ page }) => {
    await allure.story("Add to cart from Recommended items");
    const product = new Product(page);
    await product.addToCartRecommendedProduct();
});


