import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
    await allure.epic("Automation exercise");
    await allure.feature("Home");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
});

test('Contact Us Form', async ({ page }) => {
    await allure.story("Contact Us Form");
    const homePage = new HomePage(page);
    await homePage.sendContactUs();
});
test('Verify Test Cases Page', async ({ page }) => {
    await allure.story("Verify Test Cases Page");
    const homePage = new HomePage(page);
    await homePage.verifyTestCasePages();
});
test('Verify Subscription in home page', async ({ page }) => {
    await allure.story("Verify Subscription in home page");
    const homePage = new HomePage(page);
    await homePage.verifySubscription('homepage');
});
test('Verify Subscription in Cart page', async ({ page }) => {
    await allure.story("Verify Subscription in Cart page");
    const homePage = new HomePage(page);
    await homePage.verifySubscription('cart');
});


