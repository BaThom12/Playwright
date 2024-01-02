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
        await this.page.on("dialog", async(alert) => {
            const text = alert.message();
            console.log(text);
            await alert.accept();
          //  await this.page.getByLabel('OK').click();
        
        })
       // await this.page.keyboard.press('Enter');
        // this.page.on('dialog', dialog => dialog.accept());
        // await this.page.getByRole('button').click();
        this.logger.info("Click OK button");
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.getByText(variableHomePage.messageSendSuccess)).toBeVisible();
        //expect(await this.page.locator(variableHomePage.messageSendSuccess)).toBeVisible();
        this.logger.info("Verify success message 'Success! Your details have been submitted successfully.' is visible");
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
        expect(await this.page.title()).toBe(variableHomePage.titleTestCase);
        this.logger.info('Verify user is navigated to test cases page successfully');
    }
    async delayBlocking(milliseconds: number){
        const timeInitial : Date = new Date();
        var timeNow : Date = new Date();
        for ( ; timeNow - timeInitial < milliseconds; ){
            timeNow = new Date();
        }
        console.log('Sleep done!');
    }
   
}



