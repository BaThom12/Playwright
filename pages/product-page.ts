import { expect, Locator, Page } from '@playwright/test';
import { PageBase } from '@pages/page-base';
import { elementLocatorProduct, variableProduct, arrSearchProduct } from '@interfaces/productUI';
import { elementLocatorCart, variableCart } from '@interfaces/cartUI';
import { allure } from "allure-playwright";
export class Product extends PageBase {

    constructor(page: Page) {
        super(page);
    }
    async navigateAllProduct() {
        await this.page.locator(elementLocatorProduct.hplProduct).click();
        this.logger.info("Click on 'Products' button");
        await allure.logStep("Click on 'Products' button");
        await this.page.waitForLoadState('domcontentloaded');
        expect(await this.page.url() == variableProduct.urlProduct);
        this.logger.info("Verify user is navigated to ALL PRODUCTS page successfully");
        await allure.logStep("Verify user is navigated to ALL PRODUCTS page successfully");
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
            let productName = await this.page.locator(elementLocatorProduct.searchProductName.replace('1', (i + 1).toString())).textContent();
            this.logger.info("productName: " + productName);
            this.logger.info("productName of array: " + arrSearchProduct[i]);
            if (productName == arrSearchProduct[i]) {
                count += 1;
            }

        }
        if (count == arrSearchProduct.length) {
            this.logger.info("Verify all the products related to search are visible");
        } else {
            this.logger.info("Wrong search result: " + count);
        }
    }
    async addProductInCart() {
        const nameProduct1 = await this.page.locator(elementLocatorProduct.txtFirstProductName.replace('text', 'p')).first().textContent();
        const priceProduct1 = await this.page.locator(elementLocatorProduct.txtFirstProductName.replace('text', 'h2')).first().textContent();
        const nameProduct2 = await this.page.locator(elementLocatorProduct.txtSecondProductName.replace('text', 'p')).first().textContent();
        const priceProduct2 = await this.page.locator(elementLocatorProduct.txtSecondProductName.replace('text', 'h2')).first().textContent();
        await this.page.locator(elementLocatorProduct.hplProduct).click();
        this.logger.info("Click 'Products' button");
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.locator(elementLocatorProduct.product).hover();
        await this.page.locator(elementLocatorProduct.btnAddToCart).click();
        this.logger.info("Hover over first product and click 'Add to cart'");
        await this.page.getByText(elementLocatorProduct.btnContinueShopping).click();
        this.logger.info("Click 'Continue Shopping' button");
        await this.page.locator(elementLocatorProduct.product.replace('2', '3')).hover();
        await this.page.locator(elementLocatorProduct.btnAddToCart.replace('2', '4')).click();
        this.logger.info("Hover over second product and click 'Add to cart'");
        await this.page.locator(elementLocatorProduct.btnCViewCart).click();
        this.logger.info("Click 'View Cart' button");
        const nameProduct1InCart = await this.page.locator(elementLocatorCart.nameProduct).textContent();
        const priceProduct1InCart = await this.page.locator(elementLocatorCart.priceProduct).textContent();
        const totalPriceProduct1InCart = await this.page.locator(elementLocatorCart.totalPriceProduct).textContent();
        const nameProduct2InCart = await this.page.locator(elementLocatorCart.nameProduct.replace('1', '2')).textContent();
        const priceProduct2InCart = await this.page.locator(elementLocatorCart.priceProduct.replace('1', '2')).textContent();
        const totalPriceProduct2InCart = await this.page.locator(elementLocatorCart.totalPriceProduct.replace('1', '2')).textContent();
        const quantityProduct1 = await this.page.locator(elementLocatorCart.quantityProduct).textContent();
        const quantityProduct2 = await this.page.locator(elementLocatorCart.quantityProduct.replace('1', '2')).textContent();
        expect(nameProduct1 == nameProduct1InCart);
        expect(nameProduct2 == nameProduct2InCart);
        this.logger.info("Verify both products are added to Cart");
        expect(priceProduct1 == priceProduct1InCart);
        expect(priceProduct2 == priceProduct2InCart);
        expect(quantityProduct1 == '1');
        expect(quantityProduct2 == '1');
        expect(priceProduct1 == totalPriceProduct1InCart);
        expect(priceProduct2 == totalPriceProduct2InCart);
        this.logger.info("Verify their prices, quantity and total price");

    }
    async verifyQuantityProductInCart() {
        await this.page.locator(elementLocatorProduct.btnViewProduct).click();
        this.logger.info("Click 'View Product' for any product on home page");
        expect(this.page.url() == variableProduct.urlProductDetail);
        this.logger.info("Verify product detail is opened");
        await this.page.locator(elementLocatorProduct.txtQuantity).fill('4');
        this.logger.info(" Increase quantity to 4");
        await this.page.locator(elementLocatorProduct.btnAddToCartInDetail).click();
        this.logger.info("Click 'Add to cart' button");
        await this.page.locator(elementLocatorCart.btnViewCart).click();
        this.logger.info("Click 'View Cart' button");
        const nameProduct1InCart = await this.page.locator(elementLocatorCart.nameProduct).textContent();
        const quantityProduct1 = await this.page.locator(elementLocatorCart.quantityProduct).first().textContent();
        expect(nameProduct1InCart == variableProduct.lblNameProduct1);
        expect(quantityProduct1 == '4');
        this.logger.info(" Verify that product is displayed in cart page with exact quantity");
    }
    async removeProductInCart() {
        await this.page.locator(elementLocatorCart.btnRemove).click();
        await this.page.locator(elementLocatorCart.btnRemove).click();
        expect(await this.page.locator(elementLocatorCart.lblEmpty).textContent() == variableCart.lblEmpty);
        this.logger.info("Verify that product is removed from the cart");
    }
    async viewCategoryProduct() {
        expect(await this.page.locator(elementLocatorProduct.lblCategory).textContent() == variableProduct.lblCategory);
        this.logger.info("Verify that categories are visible on left side bar");
        await this.page.locator(elementLocatorProduct.lblCategoryWomen).click();
        this.logger.info("Click on 'Women' category");
        await this.page.locator(elementLocatorProduct.lblCategoryDress).click();
        this.logger.info("Click on any category link under 'Women' category, Tops");
        expect(await this.page.url() == variableProduct.urlCategory);
        expect(await this.page.getByText(variableProduct.lblTopProduct));
        this.logger.info("Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'");
        await this.page.locator(elementLocatorProduct.lblCategoryWomen.replace('Women', 'Men')).click();
        this.logger.info("Click on 'Men' category");
        await this.page.locator(elementLocatorProduct.lblCategoryDress.replace('2', '3')).click();
        this.logger.info("Click on any category link under 'Men' category, Tshirts");
        expect(await this.page.url() == variableProduct.urlTshirt);
        this.logger.info("Verify that user is navigated to that category page");
    }
    async viewBranchProduct() {
        await this.page.locator(elementLocatorProduct.hplProduct).click();
        this.logger.info("Click 'Products' button");
        expect(await this.page.locator(elementLocatorProduct.lblCategory.replace('left-sidebar', 'brands_products')).textContent() == variableProduct.lblBranch);
        this.logger.info("Verify that Brands are visible on left side bar");
        await this.page.locator(elementLocatorProduct.lblCategoryWomen.replace('#Women', '/brand_products/Babyhug')).click();
        this.logger.info("Click on Babyhug brand");
        expect(await this.page.url() == variableProduct.urlBranchBabyhug);
        expect(await this.page.locator(elementLocatorProduct.lblBranchBabyhug).textContent() == variableProduct.lblBranchBabyhug);
        this.logger.info("Verify that user is navigated to brand page and brand products are displayed");
        await this.page.locator(elementLocatorProduct.lblCategoryWomen.replace('#Women', '/brand_products/H&M')).click();
        this.logger.info("Click on H&M brand");
        expect(await this.page.url() == variableProduct.urlBranchHM);
        expect(await this.page.locator(elementLocatorProduct.lblBranchBabyhug).textContent() == variableProduct.lblBranchHM);
        this.logger.info("Verify that user is navigated to that brand page and can see products");

    }
    async addSearchProductToCart() {
        const arrNameSearchProduct: any = [];
        for (let i = 1; i < 10; i++) {
            let productName = await this.page.locator(elementLocatorProduct.searchProductName.replace('1', i.toString())).textContent();
            this.logger.info("productName: " + productName);
            arrNameSearchProduct.push(productName);
        }

        for (let i = 1; i < 10; i++) {
            await this.page.locator(elementLocatorProduct.areaSearchProduct.replace('index', (i+1).toString())).hover();
            await this.page.locator(elementLocatorProduct.btnAddToCartSearchProduct.replace('index', i.toString())).click();
            await this.page.locator(elementLocatorProduct.btnContinueShopping).click();
        }
        await this.page.locator(elementLocatorProduct.hplProduct.replace('products','view_cart')).first().click();
        let count = 0;
        const arrNameSearchProductInCart: any = [];
        for (let i = 1; i < 10; i++) {
            let productNameCart = await this.page.locator(elementLocatorCart.nameSearchProduct.replace('index', i.toString())).textContent();
            arrNameSearchProductInCart.push(productNameCart)
        }
        for (let i = 1; i < 10; i++) {
            if(arrNameSearchProduct[i]==arrNameSearchProductInCart[i]){
                count +=1;
            }
        }
        this.logger.info("count: "+count);
        if(count == arrNameSearchProduct.length){
            this.logger.info("verify that products are visible in cart");
        }
        await this.page.locator(elementLocatorProduct.hplProduct.replace('products','login')).first().click();
        this.logger.info("Click 'Signup / Login' button");
        await this.page.locator(elementLocatorProduct.hplProduct.replace('products','view_cart')).first().click();
        this.logger.info("Again, go to Cart page");
        let countAfter = 0;
        for (let i = 1; i < 10; i++) {
            if(arrNameSearchProduct[i]==arrNameSearchProductInCart[i]){
                countAfter +=1;
            }
        }
        this.logger.info("countAfter: "+countAfter);
        if(countAfter == arrNameSearchProduct.length){
            this.logger.info("Verify that those products are visible in cart after login as well");
        }
    }
    async reviewProduct() {
        await this.page.locator(elementLocatorProduct.hplProduct.replace('products','product_details/1')).first().click();
        this.logger.info("Click on 'View Product' button");
        const lblReview = await this.page.locator(elementLocatorProduct.hplProduct.replace('/products','#reviews')).textContent();
        expect(lblReview == variableProduct.lblReview);
        this.logger.info("Verify 'Write Your Review' is visible");
        await this.page.locator(elementLocatorProduct.txtNameReviewer).fill(variableProduct.NameReviewer);
        await this.page.locator(elementLocatorProduct.txtEmailReviewer).fill(variableProduct.EmailReviewer);
        await this.page.locator(elementLocatorProduct.tarContentReview).fill(variableProduct.ContentReview);
        this.logger.info("Enter name, email and review");
        await this.page.locator(elementLocatorProduct.btnReview).first().click();
        this.logger.info("Click 'Submit' button");
        expect(await this.page.getByText(variableProduct.messageReviewSuccessfull)).toBeVisible();
        this.logger.info("Verify success message 'Thank you for your review.'");  
    }
    async addToCartRecommendedProduct() {
        expect(await this.page.getByText(elementLocatorProduct.lblRecommended)).toBeVisible();
        this.logger.info("Verify 'RECOMMENDED ITEMS' are visible");
        await this.page.locator(elementLocatorProduct.btnAddToCartRecommended).click();
        this.logger.info("Click on 'Add To Cart' on Recommended product");
        await this.page.locator(elementLocatorProduct.btnCViewCart).click();
        this.logger.info("Click on 'View Cart' button");
        expect(await this.page.getByText(variableProduct.lblNameProduct1)).toBeVisible();
        this.logger.info("Verify that product is displayed in cart page");  
    }
}
