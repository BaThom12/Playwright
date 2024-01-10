export const elementLocatorProduct = {
hplProduct : '//a[@href="/products"]',
btnViewProduct1 : "//a[@href='/product_details/1']",
btnSearch : "#submit_search",
searchProductName : '(//div[@class="productinfo text-center"]/p)[1]',
product : '(//div[@class="col-sm-4"])[2]',
product2 : '(//div[@class="product-overlay"])[2]',
//btnAddToCart : '(//div[@class="product-overlay"]//a[@data-product-id="1"])[1]',
btnAddToCart : '(//a[contains(text(),"Add to cart")])[2]',
btnContinueShopping : 'Continue Shopping',
btnCViewCart : '//div[@id="cartModal"]//p//a[@href="/view_cart"]',
txtFirstProductName : '//a[@data-product-id="1"]/../text',
txtSecondProductName : '//a[@data-product-id="2"]/../text',
btnViewProduct : '//a[@href="/product_details/1"]',
txtQuantity : '#quantity',
btnAddToCartInDetail : '//button[@class="btn btn-default cart"]',
lblCategory : '//div[@class="left-sidebar"]/h2',
lblCategoryWomen : '//a[@href="#Women"]',
lblCategoryDress : '//a[@href="/category_products/2"]',
lblBranchBabyhug : '//h2[@class="title text-center"]',

}

import randomstring from 'randomstring';
export const variableProduct = {
  titleAllProduct : 'Automation Exercise - All Products',
  lblAllProduct : "All Products",
  lblNameProduct1 : "Blue Top",
  lblPriceProduct1 : "Rs. 500",
  lblCategoryProduct1 : "Category: Women > Tops",
  lblAvailabilityProduct1 : "Availability: In Stock",
  lblConditionProduct1 : "Condition: New",
  lblBrandProduct1 : "Brand: Polo",
  phdSearch : "Search Product",
  keySearch : "dress",
  searchTitle : "Searched Products",
  urlProduct : "https://automationexercise.com/products",
  urlProductDetail : "https://automationexercise.com/product_details/1",
  lblCategory : "Category",
  urlCategory : "https://automationexercise.com/category_products/2",
  lblTopProduct : "Women - Tops Products",
  urlTshirt : "https://automationexercise.com/category_products/3",
  lblBranch : "Brands",
  urlBranchBabyhug : "https://automationexercise.com/brand_products/Babyhug",
  lblBranchBabyhug : "Brand - Babyhug Products",
  urlBranchHM : "https://automationexercise.com/brand_products/H&M",
  lblBranchHM : "Brand - H&M Products",




        
}

export const arrSearchProduct: string[] = ['Sleeveless Dress', 'Stylish Dress', 'Sleeves Top and Short - Blue & Pink', 'Sleeveless Unicorn Patch Gown - Pink', 'Cotton Mull Embroidered Dress', 'Blue Cotton Indie Mickey Dress', 'Long Maxi Tulle Fancy Dress Up Outfits -Pink','Sleeveless Unicorn Print Fit & Flare Net Dress - Multi','Rose Pink Embroidered Maxi Dress'];