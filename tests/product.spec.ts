import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Product } from '@pages/product-page';

    // test('Verify All Products and product detail page', async ({ page }) => {
    //     const homePage = new HomePage(page);
    //     const product = new Product(page);
    //     await homePage.open();
    //     await homePage.verifyTitle();
    //     await product.navigateAllProduct();   
    //     await product.viewDetailProduct();   
    // });
    test('Search Product', async ({ page }) => {
        const homePage = new HomePage(page);
        const product = new Product(page);
        await homePage.open();
        await homePage.verifyTitle();
        await product.navigateAllProduct();  
        await product.searchProduct();  
        await product.verifySearchProduct();  
    });


