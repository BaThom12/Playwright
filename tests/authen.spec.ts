import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Authen } from '@pages/authen-page';
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
    await allure.epic("Automation exercise");
    await allure.feature("Authen");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
});

test('Login User with correct email and password', async ({ page }) => {
    await allure.story("Login User with correct email and password");
    const authen = new Authen(page);
    await authen.loginSuccess();
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




