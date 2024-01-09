import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorProduct,variableProduct,arrSearchProduct } from '@interfaces/productUI';
import { elementLocatorCart,variableCart } from '@interfaces/cartUI';
export class Product extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async navigateAllProduct() {
        await this.page.locator(elementLocatorProduct.hplProduct).click();
        this.logger.info("Click on 'Products' button");
        await this.page.waitForLoadState('domcontentloaded');
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
            let productName = await this.page.locator(elementLocatorProduct.searchProductName.replace('1',(i+1).toString())).textContent();
            this.logger.info("productName: "+productName);
            this.logger.info("productName of array: "+arrSearchProduct[i]);
             if(productName==arrSearchProduct[i]){
                count += 1;
             }
                     
          }
          if(count==arrSearchProduct.length){
            this.logger.info("Verify all the products related to search are visible");
          }else{
            this.logger.info("Wrong search result: "+count);
          }
    }
    async addProductInCart() {
        const nameProduct1 = await this.page.locator(elementLocatorProduct.txtFirstProductName.replace('text','p')).first().textContent();
        const priceProduct1 = await this.page.locator(elementLocatorProduct.txtFirstProductName.replace('text','h2')).first().textContent();
        const nameProduct2 = await this.page.locator(elementLocatorProduct.txtSecondProductName.replace('text','p')).first().textContent();
        const priceProduct2 = await this.page.locator(elementLocatorProduct.txtSecondProductName.replace('text','h2')).first().textContent();
        const nameProduct1InCart = await this.page.locator(elementLocatorCart.nameProduct).textContent();
        const priceProduct1InCart = await this.page.locator(elementLocatorCart.priceProduct).textContent();
        const totalPriceProduct1InCart = await this.page.locator(elementLocatorCart.totalPriceProduct).textContent();
        const nameProduct2InCart = await this.page.locator(elementLocatorCart.nameProduct.replace('1','2')).textContent();
        const priceProduct2InCart = await this.page.locator(elementLocatorCart.priceProduct.replace('1','2')).textContent();
        const totalPriceProduct2InCart = await this.page.locator(elementLocatorCart.totalPriceProduct.replace('1','2')).textContent();
        const quantityProduct1 = await this.page.locator(elementLocatorCart.quantityProduct).textContent();
        const quantityProduct2 = await this.page.locator(elementLocatorCart.quantityProduct.replace('1','2')).textContent();
    
        await this.page.locator(elementLocatorProduct.hplProduct).click();
        this.logger.info("Click 'Products' button");
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.locator(elementLocatorProduct.product).hover();
        await this.page.locator(elementLocatorProduct.btnAddToCart).click();
        this.logger.info("Hover over first product and click 'Add to cart'");
        await this.page.getByText(elementLocatorProduct.btnContinueShopping).click();
        this.logger.info("Click 'Continue Shopping' button");
        await this.page.locator(elementLocatorProduct.product.replace('2','3')).hover();
        await this.page.locator(elementLocatorProduct.btnAddToCart.replace('2','4')).click();
        this.logger.info("Hover over second product and click 'Add to cart'");
        await this.page.locator(elementLocatorProduct.btnCViewCart).click();
        this.logger.info("Click 'View Cart' button");

        expect(nameProduct1==nameProduct1InCart);
        expect(nameProduct2==nameProduct2InCart);
        this.logger.info("Verify both products are added to Cart");
        expect(priceProduct1==priceProduct1InCart);
        expect(priceProduct2==priceProduct2InCart);
        expect(quantityProduct1=='1');
        expect(quantityProduct2=='1');
        expect(priceProduct1==totalPriceProduct1InCart);
        expect(priceProduct2==totalPriceProduct2InCart);
        this.logger.info("Verify their prices, quantity and total price");
        
    }
   
}



