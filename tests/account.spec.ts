import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Account } from '@pages/account-page';
import { elementLocatorAccount, variableAccount } from '@interfaces/accountUI';
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
    await allure.epic("Automation exercise");
    await allure.feature("Account");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
});


test('Delete Account', async ({ page }) => {
    await allure.story("Delete Account");
    const account = new Account(page);
    await account.enterSignupInfor(variableAccount.userName, variableAccount.email);
    await account.enterAccountInformation();
    await account.deleteAccount();
});
test('Register User', async ({ page }) => {
    await allure.story("Register User");
    const account = new Account(page);
    await account.enterSignupInfor(variableAccount.userName, variableAccount.email);
    await account.enterAccountInformation();
});

test('Register User with existing email', async ({ page }) => {
    await allure.story("Register User with existing email");
    const account = new Account(page);
    await account.enterExistingEmail(variableAccount.userName, variableAccount.email);
});



