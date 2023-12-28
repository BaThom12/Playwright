import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
export class HomePage extends PageBase {

    //readonly searchInput: Locator;
    constructor(page: Page) {
        super(page);
       // this.searchInput = page.locator("input[name='q']");
    }
    async open() {
        await this.page.goto('https://automationexercise.com');
        this.logger.info('demo message');
    }

    async verifyTitle() {
        const title = await this.page.title();
        expect(title).toBe('Automation Exercise');
        this.logger.info('Verify that home page is visible successfully');
    }
   /* async search(text: string) {
        await this.searchInput.fill(text);
        await this.searchInput.press('Enter');
        this.logger.info('Search started');
    }*/
}