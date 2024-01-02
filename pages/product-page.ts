import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorProduct,variableProduct } from '@interfaces/productUI';
export class Product extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async navigateAllProduct() {
       // await this.page.getByRole('link', { name: elementLocatorProduct.hplProduct }).click();
        await this.page.getByText('Products').click();
        this.logger.info("Click on 'Products' button");
        expect(await this.page.title()).toBe(variableProduct.titleAllProduct);
        this.logger.info("Verify user is navigated to ALL PRODUCTS page successfully");
        expect(await this.page.getByText(variableProduct.lblAllProduct)).toBeVisible();
        this.logger.info("The products list is visible");
        

    }

    async viewDetailProduct() {
        await this.page.locator(elementLocatorProduct.btnViewProduct1).click();
        this.logger.info("Click on 'View Product' of first product");
        expect(await this.page.getByText(variableProduct.lblNameProduct1)).toBeVisible();
        expect(await this.page.getByText(variableProduct.lblCategoryProduct1)).toBeVisible();
        expect(await this.page.getByText(variableProduct.lblPriceProduct1)).toBeVisible();
        expect(await this.page.getByText(variableProduct.lblAvailabilityProduct1)).toBeVisible();
        expect(await this.page.getByText(variableProduct.lblConditionProduct1)).toBeVisible();
        expect(await this.page.getByText(variableProduct.lblBrandProduct1)).toBeVisible();
        this.logger.info("Verify that detail detail is visible: product name, category, price, availability, condition, brand");
    }
    async searchProduct() {
        await this.page.getByPlaceholder(variableProduct.phdSearch).fill(variableProduct.keySearch);
        await this.page.locator(elementLocatorProduct.btnSearch).click();
        this.logger.info("Enter product name in search input and click search button");
        expect(await this.page.getByText(variableProduct.searchTitle)).toBeVisible();
        this.logger.info("Verify 'SEARCHED PRODUCTS' is visible");
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
        this.page.on("dialog", async(alert) => {
            await alert.accept("OK");
        })
        this.logger.info("Click OK button");
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.getByText(variableHomePage.messageSendSuccess)).toBeVisible();
       // expect(await this.page.locator(variableHomePage.messageSendSuccess)).toBeVisible();
       setTimeout(() => {
        this.logger.info("Wait for verify");
    }, 3000);
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
   
}



