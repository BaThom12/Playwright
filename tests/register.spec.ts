import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Register } from '@pages/register-page';


    test('Register User', async ({ page }) => {
        const homePage = new HomePage(page);
        const register = new Register(page);
        await homePage.open();
        await homePage.verifyTitle();
        await register.enterSignupInfor('Nguyen A','feutrabiteju-9668@yopmail.com');
        await register.enterAccountInformation();
       // await homePage.verifyTitle();
    });

    test('Delete Account', async ({ page }) => {
        const homePage = new HomePage(page);
        const register = new Register(page);
        await homePage.open();
        await homePage.verifyTitle();
        await register.enterSignupInfor('Nguyen B','frofrarauyeullo-3406@yopmail.com');
        await register.enterAccountInformation();
        await register.deleteAccount();
    });

    

