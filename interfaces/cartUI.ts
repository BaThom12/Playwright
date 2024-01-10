export const elementLocatorCart = {
nameProduct : '//a[@href="/product_details/1"]',
priceProduct : '(//tr[@id="product-1"]//td[@class="cart_price"]/p)[1]',
quantityProduct : '(//td[@class="cart_quantity"]/button)[1]',
totalPriceProduct : '(//td[@class="cart_total"]/p)[1]',
btnViewCart : '//div[@id="cartModal"]//p//a[@href="/view_cart"]',
btnRemove : '(//a[@class="cart_quantity_delete"])[1]',
lblEmpty : '//span[@id="empty_cart"]/p/b',

}

export const variableCart = {
    lblEmpty : "Cart is empty!",
    }