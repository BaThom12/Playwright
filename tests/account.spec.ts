import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Account } from '@pages/account-page';
import { elementLocatorAccount,variableAccount } from '@interfaces/accountUI';   

    test('Delete Account', async ({ page }) => {
        const homePage = new HomePage(page);
        const account = new Account(page);
        await homePage.open();
        await homePage.verifyTitle();
        await account.enterSignupInfor(variableAccount.userName,variableAccount.email);
        await account.enterAccountInformation();
        await account.deleteAccount();
    });
    test('Register User', async ({ page}) => {
        const homePage = new HomePage(page);
        const account = new Account(page);
        await homePage.open();
        await homePage.verifyTitle();
        await account.enterSignupInfor(variableAccount.userName,variableAccount.email);
        await account.enterAccountInformation();
    });

    test('Register User with existing email', async ({ page}) => {
        const homePage = new HomePage(page);
        const account = new Account(page);
        await homePage.open();
        await homePage.verifyTitle();
        await account.enterExistingEmail(variableAccount.userName,variableAccount.email);
    });

    

