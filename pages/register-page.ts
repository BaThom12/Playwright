import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import randomstring from 'randomstring';
export class Register extends PageBase {

    //readonly searchInput: Locator;
    constructor(page: Page) {
        super(page);
    }
    async enterSignupInfor(name: string, email: string) {
        await this.page.getByRole('link', { name: ' Signup / Login' }).click();
        this.logger.info('Click on Signup / Login button');
        const heading = await this.page.getByText('New User Signup!');
        expect(heading).toBeVisible();
        this.logger.info('Verify New User Signup! is visible');
        await this.page.getByPlaceholder('Name').fill(name);
        this.logger.info('Enter name');
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        this.logger.info('Enter email');
        await this.page.getByRole('button', { name: 'Signup' }).click();
        this.logger.info('Click on Signup button');
        const headingAccount = await this.page.getByText('Enter Account Information');
        expect(headingAccount !== undefined ).toBeTruthy();
        this.logger.info('Verify that ENTER ACCOUNT INFORMATION is visible');
        
    }
    async enterAccountInformation() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.getByLabel('Mrs.').click();
       // await this.page.locator("//label[@for='id_gender2']/div").click();
        await this.page.getByLabel('Password *').fill('Acb@123');
        this.logger.info('Enter Password');
        await this.page.locator('#days').selectOption('11');
        await this.page.locator('#months').selectOption('3');
        await this.page.locator('#years').selectOption('1991');
        this.logger.info('Enter Password');
        await this.page.getByLabel('Sign up for our newsletter!').check();
        this.logger.info('Select checkbox Sign up for our newsletter!');
        await this.page.getByLabel('Receive special offers from').check();
        this.logger.info('Select checkbox Receive special offers from our partners!');
        await this.page.getByLabel('First name *').fill('An');
        this.logger.info('Enter First name');
        await this.page.getByLabel('Last name *').fill('Nguyen');
        this.logger.info('Enter Last name');
        await this.page.getByLabel('Company', { exact: true }).fill('VMO company');
        this.logger.info('Enter Company');
        await this.page.getByLabel('Address * (Street address, P.').fill('Duy Tan');
        await this.page.getByLabel('Address 2').fill('Cau Giay');
        await this.page.getByLabel('Country *').selectOption('Canada');
        await this.page.getByLabel('State *').fill('British Columbia');
        await this.page.getByLabel('City *').fill('washington');
        await this.page.locator('#zipcode').fill('205000');
        await this.page.getByLabel('Mobile Number *').fill('02458713690');
        this.logger.info('Enter Address');
        await this.page.getByRole('button', { name: 'Create Account' }).click();
        this.logger.info('Click Create Account button');
        const heading1 = await this.page.getByText('ACCOUNT CREATED!');
        expect(heading1).toBeVisible();
        await this.page.getByRole('link', { name: 'Continue' }).click();
        this.logger.info('Click Continue button');
        const lbl = await this.page.getByText('Logged in as');
        expect(lbl).toBeVisible();
        const lblUser = await this.page.getByText('Nguyen');
        expect(lblUser).toBeVisible();
        this.logger.info('Verify that Logged in as username is visible');
    }
    async deleteAccount() {
        await this.page.getByText('Delete Account').click();
        this.logger.info('Click Delete Account button');
        //const lblUser = await this.page.getByText('Nguyen An');
        expect(await this.page.getByText('Account Deleted!')).toBeVisible();
        await this.page.getByRole('link', { name: 'Continue' }).click();
        this.logger.info('Click Continue button');
        
    }
    /* async search(text: string) {
         await this.searchInput.fill(text);
         await this.searchInput.press('Enter');
         this.logger.info('Search started');
     }*/
}