import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorCart, variableCart } from '@interfaces/cartUI';
import { elementLocatorAccount, variableAccount } from '@interfaces/accountUI';
import randomstring from 'randomstring';
import fs from 'fs';
export class Cart extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async verifyAddressInCart() {
        await this.page.locator(elementLocatorCart.btnProceedToCheckout).click();
        this.logger.info("Click Proceed To Checkout");
        await this.verifyAddress();

    }
    async prepareCheckout() {
        await this.clickProceedToCheckout();
        await this.page.locator(elementLocatorCart.hplSinUpFromCart).click();
        this.logger.info("Click 'Register / Login' button");

    }
    async clickCart() {
        await this.page.locator(elementLocatorCart.nameProduct.replace('product_details/1', 'view_cart')).first().click();
        this.logger.info("Click 'Cart' button");
        await this.clickProceedToCheckout();
        await this.verifyAddress();


    }
    async clickProceedToCheckout() {
        await this.page.locator(elementLocatorCart.btnProceedToCheckout).click();
        this.logger.info("Click Proceed To Checkout");


    }
    async verifyAddress() {
        expect(await this.page.locator(elementLocatorCart.lblDeliveryAddress.replace('index', '1')).textContent() == variableAccount.company);
        expect(await this.page.locator(elementLocatorCart.lblDeliveryAddress.replace('index', '2')).textContent() == variableAccount.address);
        expect(await this.page.locator(elementLocatorCart.lblDeliveryAddress.replace('index', '3')).textContent() == variableAccount.address2);
        this.logger.info("Verify that the delivery address is same address filled at the time registration of account");
        expect(await this.page.locator(elementLocatorCart.lblBillingAddress.replace('index', '4')).textContent() == variableAccount.company);
        expect(await this.page.locator(elementLocatorCart.lblBillingAddress.replace('index', '5')).textContent() == variableAccount.address);
        expect(await this.page.locator(elementLocatorCart.lblBillingAddress.replace('index', '6')).textContent() == variableAccount.address2);
        this.logger.info("Verify that the billing address is same address filled at the time registration of account");
    }

    async checkout(type: string) {
        await this.page.locator(elementLocatorCart.tarComment).fill('Comment');
        this.logger.info("Enter description in comment text area");
        await this.page.locator(elementLocatorCart.btnPlaceHolder).click();
        this.logger.info(" click 'Place Order'");
        await this.enterPaymentDetail();
        // await this.page.locator(elementLocatorCart.txtNameOnCard).fill(variableCart.nameOnCard);
        // await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'card_number')).fill(variableCart.numberOnCard);
        // await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'cvc')).fill(variableCart.Cvc);
        // await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'expiry_month')).fill(variableCart.expireMonth);
        // await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'expiry_year')).fill(variableCart.expireYear);
        // this.logger.info("Enter payment details: Name on Card, Card Number, CVC, Expiration date");
        // await this.page.locator(elementLocatorCart.btnConfirm).click();
        // this.logger.info("Click 'Pay and Confirm Order' button");
        // await this.page.waitForTimeout(3000);
        // expect(await this.page.locator(elementLocatorCart.lblMessageSuccess).textContent() == variableCart.messageSuccess);
        // this.logger.info("Verify success message 'Your order has been placed successfully!'");
        if (type == 'download invoice') {
            await this.page.getByText(elementLocatorCart.btnDownloadInvoice).click();
            this.logger.info("Click 'Download Invoice' button");
            if (fs.existsSync("C://Users//ancoi//Downloads//invoice.txt")) {
                this.logger.info("Download Invoice success");
            } else {
                this.logger.info("Download Invoice unsuccess");
            }
            await this.page.locator(elementLocatorCart.btnContinue).click();
            this.logger.info("Click 'Continue' button");
        }
    }
    async enterPaymentDetail() {
        await this.page.locator(elementLocatorCart.txtNameOnCard).fill(variableCart.nameOnCard);
        await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'card_number')).fill(variableCart.numberOnCard);
        await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'cvc')).fill(variableCart.Cvc);
        await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'expiry_month')).fill(variableCart.expireMonth);
        await this.page.locator(elementLocatorCart.txtNameOnCard.replace('name_on_card', 'expiry_year')).fill(variableCart.expireYear);
        this.logger.info("Enter payment details: Name on Card, Card Number, CVC, Expiration date");
        await this.page.locator(elementLocatorCart.btnConfirm).click();
        this.logger.info("Click 'Pay and Confirm Order' button");
        await this.page.waitForTimeout(3000);
        expect(await this.page.locator(elementLocatorCart.lblMessageSuccess).textContent() == variableCart.messageSuccess);
        this.logger.info("Verify success message 'Your order has been placed successfully!'");
    }

}