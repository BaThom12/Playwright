import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Authen } from '@pages/authen-page';  

    test('Login User with correct email and password', async ({ page }) => {
        const homePage = new HomePage(page);
        const authen = new Authen(page);
        await homePage.open();
        await homePage.verifyTitle();
        await authen.loginSuccess();
    });
    test('Login User with incorrect email and password', async ({ page }) => {
        const homePage = new HomePage(page);
        const authen = new Authen(page);
        await homePage.open();
        await homePage.verifyTitle();
        await authen.loginFail();
    });

    test('Logout User', async ({ page }) => {
        const homePage = new HomePage(page);
        const authen = new Authen(page);
        await homePage.open();
        await homePage.verifyTitle();
        await authen.loginSuccess();
        await authen.logout;

    });
    

    

