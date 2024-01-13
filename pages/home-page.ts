import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorHomePage,variableHomePage } from '@interfaces/homepageUI';

export class HomePage extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async open() {
        await this.page.goto(elementLocatorHomePage.url);
        this.logger.info('Navigate to url http://automationexercise.com');
    }

    async verifyTitle() {
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.page.title()).toBe(variableHomePage.title);
        this.logger.info('Verify that home page is visible successfully');
    }
    async sendContactUs() {
        await this.page.getByRole('link', { name: elementLocatorHomePage.hplContactUs }).click();
        this.logger.info("Click on 'Contact Us' button");
        expect(await this.page.getByText(variableHomePage.titleContactUs)).toBeVisible();
        await this.page.getByPlaceholder(elementLocatorHomePage.txtName).fill(variableHomePage.name);
        this.logger.info("Enter name: "+variableHomePage.name);
        await this.page.locator(elementLocatorHomePage.txtEmail).fill(variableHomePage.email);
        this.logger.info("Enter mail: "+variableHomePage.email);
        await this.page.getByPlaceholder(elementLocatorHomePage.txtSubject).fill(variableHomePage.subject);
        this.logger.info("Enter subject: "+variableHomePage.subject);
        await this.page.getByPlaceholder(elementLocatorHomePage.txtMessage).fill(variableHomePage.message);
        this.logger.info("Enter your message: "+variableHomePage.message);
        const[uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click("input[type='file']")
        ])
        uploadFiles.setFiles(["uploadFiles/image_demo.png"]);
        await this.page.locator(elementLocatorHomePage.btnSubmit ).click();
        this.logger.info("Click 'Submit' button");
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.on("dialog", async dialog=> {
            await dialog.accept();
            await this.page.getByRole('button').nth(0).click();
          //  await this.page.getByLabel('OK').click();
        
        })
       // await this.page.keyboard.press('Enter');
        // this.page.on('dialog', dialog => dialog.accept());
        // await this.page.getByRole('button').click();
        this.logger.info("Click OK button");
        expect(await this.page.getByText(variableHomePage.messageSendSuccess)).toBeVisible();
        this.logger.info("Verify success message 'Success! Your details have been submitted successfully.' is visible");
        // const messageSuccess = await this.page.getByText(variableHomePage.messageSendSuccess).to();
        // if (messageSuccess == variableHomePage.messageSendSuccess){
        // this.logger.info("Verify success message 'Success! Your details have been submitted successfully.' is visible");
        // }else{
        // this.logger.info("Verify success message 'Success! Your details have been submitted successfully.' is invisible");    
        // }
         await this.page.getByRole('link', { name: elementLocatorHomePage.btnHome }).click();
         this.logger.info("Click 'Home' button");
         expect(await this.page.title()).toBe(variableHomePage.title);
        this.logger.info('Verify that landed to home page successfully');
    }
    async verifyTestCasePages() {
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.locator(elementLocatorHomePage.hplTestCase).click();
       // await this.page.getByRole('link', { name: elementLocatorHomePage.hplTestCase }).click()
        this.logger.info("Click on 'Test Cases' button");
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.page.url() ==variableHomePage.urlTestCase);
        this.logger.info('Verify user is navigated to test cases page successfully');
    }
    async verifySubscription(page:string) {
        if(page=='cart'){
            await this.page.locator(elementLocatorHomePage.btnSubscription).click();
            this.logger.info("Click 'Cart' button");
        }
        expect(await this.page.getByText(variableHomePage.titleSubscription)).toBeVisible();
        this.logger.info("Verify text 'SUBSCRIPTION'");
        await this.page.locator(elementLocatorHomePage.txtSubscription).fill(variableHomePage.email);
        await this.page.locator(elementLocatorHomePage.btnSubscription).click();
        this.logger.info("Enter email address in input and click arrow button");
        const message = await this.page.locator(elementLocatorHomePage.messageSendSubscriptionSuccess).textContent();
        expect(message==variableHomePage.messageSendSubscriptionSuccess);
        this.logger.info(" Verify success message 'You have been successfully subscribed!' is visible");
    }
    async verifyScrollUp() {
        const subscription = await this.page.locator(elementLocatorHomePage.lblSubscription).textContent();
        expect(subscription==variableHomePage.lblSubscription);
        this.logger.info(" Verify 'SUBSCRIPTION' is visible");
        await this.page.locator(elementLocatorHomePage.lblSubscription).click();
        await this.page.locator(elementLocatorHomePage.btnScrollUp).click();
        this.logger.info("Click on arrow at bottom right side to move upward");
        const header = await this.page.locator(elementLocatorHomePage.lblHeader).first().textContent();
        expect(subscription==variableHomePage.lblHeader);
        this.logger.info(" Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen");

        }
    async verifyScrollUpWithoutArrow() {
        const subscription = await this.page.locator(elementLocatorHomePage.lblSubscription).textContent();
        expect(subscription==variableHomePage.lblSubscription);
        this.logger.info(" Verify 'SUBSCRIPTION' is visible");
        await this.page.locator(elementLocatorHomePage.lblSubscription).click();
        await this.page.locator(elementLocatorHomePage.lblFeatureItem).first().click();
        this.logger.info("Scroll up page to top");
        const header = await this.page.locator(elementLocatorHomePage.lblHeader).first().textContent();
        expect(subscription==variableHomePage.lblHeader);
        this.logger.info(" Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen");

        }
    
   
}



