import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Cart } from '@pages/cart-page';
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
    await allure.epic("Automation exercise");
    await allure.feature("Cart");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
});

test('Verify address details in checkout page', async ({ page }) => {
    await allure.story("Verify address details in checkout page");
    const cart = new Cart(page);
    await cart.verifyAddressInCart();
});
test('Login User with incorrect email and password', async ({ page }) => {
    await allure.story("Login User with incorrect email and password");
    const authen = new Authen(page);
    await authen.loginFail();
});

test('Logout User', async ({ page }) => {
    await allure.story("Logout User");
    const authen = new Authen(page);
    await authen.loginSuccess();
    await authen.logout;

});




