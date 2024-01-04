import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorProduct,variableProduct,arrSearchProduct } from '@interfaces/productUI';
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
        
    }
    async verifySearchProduct() {
        const arrNameSearchProduct: string[] = [];
        let count = 0;
        for (let i = 0; i < arrSearchProduct.length; i++) {
            let productName = this.page.locator(elementLocatorProduct.searchProductName.replace('1',(i+1).toString())).toString();
            this.logger.info("productName: "+productName);
            this.logger.info("productName of array: "+arrSearchProduct[i]);
             if(productName.toLowerCase()==arrSearchProduct[i].toLowerCase()){
                count += 1;
             }
                     
          }
          if(count==arrSearchProduct.length){
            this.logger.info("Verify all the products related to search are visible");
          }else{
            this.logger.info("Wrong search result: "+count);
          }
    }
   
}



