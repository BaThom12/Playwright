import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';

    test('Contact Us Form', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.verifyTitle();
        await homePage.sendContactUs();   
    });
    // test('Verify Test Cases Page', async ({ page }) => {
    //     const homePage = new HomePage(page);
    //     await homePage.open();
    //     await homePage.verifyTitle();
    //     await homePage.verifyTestCasePages();   
    // });
    test('Verify Subscription in home page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.verifyTitle();
        await homePage.verifySubscription('homepage');   
    });
    test('Verify Subscription in Cart page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.verifyTitle();
        await homePage.verifySubscription('cart');   
    });


