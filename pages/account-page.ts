import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorAccount,variableAccount } from '@interfaces/accountUI';
import randomstring from 'randomstring';
export class Account extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async enterSignupInfor(name: string, email: string) {
        await this.page.getByRole('link', { name: elementLocatorAccount.singupHyperlink }).click();
        this.logger.info('Click on Signup / Login button');
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.page.getByText(elementLocatorAccount.singupTitle)).toBeVisible();
        this.logger.info('Verify New User Signup! is visible');
        await this.page.getByPlaceholder(elementLocatorAccount.lblName).fill(name);
        this.logger.info('Enter name: '+name);
        await this.page.locator(elementLocatorAccount.txtEmailAddress).fill(email);
        this.logger.info('Enter email: '+email);
        await this.page.getByRole('button', { name: elementLocatorAccount.lblSignup }).click();
        this.logger.info('Click on Signup button');
        expect(await this.page.getByText(variableAccount.titleAccountInformation) !== undefined ).toBeTruthy();
        this.logger.info('Verify that ENTER ACCOUNT INFORMATION is visible');
        
    }
    async enterAccountInformation() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.getByLabel(elementLocatorAccount.lblGender).click();
        await this.page.getByLabel(elementLocatorAccount.lblPassword).fill(variableAccount.password);
        this.logger.info('Enter Password: '+variableAccount.password);
        await this.page.locator(elementLocatorAccount.sltDay).selectOption(variableAccount.opDay);
        await this.page.locator(elementLocatorAccount.sltMonth).selectOption(variableAccount.opMonth);
        await this.page.locator(elementLocatorAccount.sltYear).selectOption(variableAccount.opYear);
        this.logger.info('Enter Password: '+variableAccount.opDay+'/'+variableAccount.opMonth+'/'+variableAccount.opYear);
        await this.page.getByLabel(elementLocatorAccount.cbxNewsletter).check();
        this.logger.info('Select checkbox Sign up for our newsletter!');
        await this.page.getByLabel(elementLocatorAccount.cbxOption).check();
        this.logger.info('Select checkbox Receive special offers from our partners!');
        await this.page.getByLabel(elementLocatorAccount.lblFirstname).fill(variableAccount.firstName);
        this.logger.info('Enter First name: '+variableAccount.firstName);
        await this.page.getByLabel(elementLocatorAccount.lblLastname).fill(variableAccount.lastName);
        this.logger.info('Enter Last name: '+variableAccount.lastName);
        await this.page.getByLabel(elementLocatorAccount.lblCompany, { exact: true }).fill(variableAccount.company);
        this.logger.info('Enter Company: '+variableAccount.company);
        await this.page.getByLabel(elementLocatorAccount.lblAddress).fill(variableAccount.address);
        await this.page.getByLabel(elementLocatorAccount.lblAddress2).fill(variableAccount.address2);
        await this.page.getByLabel(elementLocatorAccount.lblCountry).selectOption(variableAccount.opCountry);
        await this.page.getByLabel(elementLocatorAccount.lblState).fill(variableAccount.state);
        await this.page.getByLabel(elementLocatorAccount.lblCity).fill(variableAccount.opCity);
        await this.page.locator(elementLocatorAccount.lblZipcode).fill(variableAccount.zipcode);
        await this.page.getByLabel(elementLocatorAccount.lblMobile).fill(variableAccount.mobilePhone);
        this.logger.info('Enter Address');
        await this.page.getByRole('button', { name: elementLocatorAccount.btnCreateAccount }).click();
        this.logger.info('Click Create Account button');
        expect(await this.page.getByText(variableAccount.titleCreateAccount)).toBeVisible();
        await this.page.getByRole('link', { name: elementLocatorAccount.btnContinue }).click();
        this.logger.info('Click Continue button');
        expect(await this.page.getByText(elementLocatorAccount.hplLoggin)).toBeVisible();
        expect(await this.page.getByText(variableAccount.userName)).toBeVisible();
        this.logger.info('Verify that Logged in as username is visible');
    }
    async deleteAccount() {
        await this.page.getByText(elementLocatorAccount.hplDeleteAccount).click();
        this.logger.info('Click Delete Account button');
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.page.getByText(variableAccount.titleDeleteAccount)).toBeVisible();
        await this.page.getByRole('link', { name: elementLocatorAccount.btnContinue }).click();
        this.logger.info('Click Continue button');
        
    }
    async enterExistingEmail(name: string, email: string) {
        await this.page.getByRole('link', { name: elementLocatorAccount.singupHyperlink }).click();
        this.logger.info('Click on Signup / Login button');
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.page.getByText(elementLocatorAccount.singupTitle)).toBeVisible();
        this.logger.info('Verify New User Signup! is visible');
        await this.page.getByPlaceholder(elementLocatorAccount.lblName).fill(name);
        this.logger.info('Enter name: '+name);
        await this.page.locator(elementLocatorAccount.txtEmailAddress).fill(email);
        this.logger.info('Enter email: '+email);
        await this.page.getByRole('button', { name: elementLocatorAccount.lblSignup }).click();
        this.logger.info('Click on Signup button');
        expect(await this.page.getByText(elementLocatorAccount.lblErrorSignup)).toBeVisible();
        this.logger.info("Verify error 'Email Address already exist!' is visible");
        
    }
}