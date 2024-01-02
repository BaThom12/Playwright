import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorAuthen,variableAuthen } from '@interfaces/authenUI';
export class Authen extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async loginSuccess() {
        await this.page.getByRole('link', { name: elementLocatorAuthen.loginHyperlink }).click();
        this.logger.info('Click on Signup / Login button');
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.getByText(elementLocatorAuthen.loginTitle)).toBeVisible();
        this.logger.info('Verify Login to your account is visible');
        await this.page.locator(elementLocatorAuthen.email).fill(variableAuthen.email);
        this.logger.info('Enter correct email: '+variableAuthen.email);
        await this.page.getByPlaceholder(elementLocatorAuthen.password).fill(variableAuthen.password);
        this.logger.info('Enter correct password: '+variableAuthen.password);
        await this.page.getByRole('button', { name: elementLocatorAuthen.btnLogin }).click();
        this.logger.info('Click login button');
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.getByText(elementLocatorAuthen.hplLoggin)).toBeVisible();
        this.logger.info('Verify that Logged in as username is visible');
    }

    async loginFail() {
        await this.page.getByRole('link', { name: elementLocatorAuthen.loginHyperlink }).click();
        this.logger.info('Click on Signup / Login button');
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.getByText(elementLocatorAuthen.loginTitle)).toBeVisible();
        this.logger.info('Verify Login to your account is visible');
        await this.page.locator(elementLocatorAuthen.email).fill(variableAuthen.email+'1');
        this.logger.info('Enter correct email: '+variableAuthen.email+'1');
        await this.page.getByPlaceholder(elementLocatorAuthen.password).fill(variableAuthen.password+'1');
        this.logger.info('Enter correct password: '+variableAuthen.password+'1');
        await this.page.getByRole('button', { name: elementLocatorAuthen.btnLogin }).click();
        this.logger.info('Click login button');
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.getByText(elementLocatorAuthen.lblErrormessage)).toBeVisible();
        this.logger.info('Verify error Your email or password is incorrect! is visible');
    }

    async logout() {
        await this.page.getByRole('link', { name: elementLocatorAuthen.lblLogout }).click();
        this.logger.info("Click 'Logout' button");
        expect(await this.page.getByText(elementLocatorAuthen.loginTitle)).toBeVisible();
        this.logger.info('Verify that user is navigated to login page');
    }

    
   
}