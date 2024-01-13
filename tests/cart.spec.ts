import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';
import { Cart } from '@pages/cart-page';
import { Account } from '@pages/account-page';
import { Authen } from '@pages/authen-page';
import { Product } from '@pages/product-page';
import { allure } from "allure-playwright";
import { variableAccount } from '@interfaces/accountUI';

test.beforeEach(async ({ page }) => {
    await allure.epic("Automation exercise");
    await allure.feature("Cart");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.verifyTitle();
});

test('Verify address details in checkout page', async ({ page }) => {
    await allure.story("Verify address details in checkout page");
    const account = new Account(page);
    const product = new Product(page);
    const cart = new Cart(page);
    await account.enterSignupInfor(variableAccount.userName,variableAccount.email);
    await account.enterAccountInformation();
    await product.addProductInCart();
    await cart.verifyAddressInCart();
    await account.deleteAccount();
});
test('Download Invoice after purchase order', async ({ page }) => {
    await allure.story("Download Invoice after purchase order");
    const account = new Account(page);
    const product = new Product(page);
    const cart = new Cart(page);
    await product.addProductInCart();
    await cart.prepareCheckout();
    await account.enterSignupInfor(variableAccount.userName,variableAccount.email);
    await account.enterAccountInformation();
    await cart.clickCart();
    await cart.checkout('download invoice');
    await account.deleteAccount();
});

test('Place Order: Register while Checkout', async ({ page }) => {
    await allure.story("Place Order: Register while Checkout");
    const account = new Account(page);
    const product = new Product(page);
    const cart = new Cart(page);
    product.addProductInCart();
    await cart.prepareCheckout();
    await account.enterSignupInfor(variableAccount.userName,variableAccount.email);
    await account.enterAccountInformation();
    await cart.clickCart();
    await cart.checkout('default');
    await account.deleteAccount();
});
test('Place Order: Register before Checkout', async ({ page }) => {
    await allure.story("Place Order: Register before Checkout");
    const account = new Account(page);
    const product = new Product(page);
    const cart = new Cart(page);
    await account.enterSignupInfor(variableAccount.userName,variableAccount.email);
    await account.enterAccountInformation();
    await product.addProductInCart();
    await cart.clickProceedToCheckout();
    await cart.verifyAddress();
    await cart.checkout('default');
    await account.deleteAccount();
});
test('Place Order: Login before Checkout', async ({ page }) => {
    await allure.story("Place Order: Login before Checkout");
    const authen = new Authen(page);
    const account = new Account(page);
    const product = new Product(page);
    const cart = new Cart(page);
    await authen.loginSuccess();
    await product.addProductInCart();
    await cart.clickProceedToCheckout();
    await cart.verifyAddress();
    await cart.checkout('default');
    await account.deleteAccount();
});




