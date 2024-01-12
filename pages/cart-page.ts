import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorCart,variableCart } from '@interfaces/cartUI';
import { elementLocatorAccount,variableAccount } from '@interfaces/accountUI';
import randomstring from 'randomstring';
export class Cart extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async verifyAddressInCart() {
        await this.page.locator(elementLocatorCart.btnProceedToCheckout).click();
        this.logger.info("Click Proceed To Checkout");
        expect(await this.page.locator(elementLocatorCart.btnProceedToCheckout.replace('index','1')).textContent()==variableAccount.company);
        expect(await this.page.locator(elementLocatorCart.btnProceedToCheckout.replace('index','2')).textContent()==variableAccount.address);
        expect(await this.page.locator(elementLocatorCart.btnProceedToCheckout.replace('index','3')).textContent()==variableAccount.address2);
        this.logger.info("Verify that the delivery address is same address filled at the time registration of account");
        
    }
    
}