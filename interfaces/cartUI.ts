export const elementLocatorCart = {
nameProduct : '//a[@href="/product_details/1"]',
priceProduct : '(//tr[@id="product-1"]//td[@class="cart_price"]/p)[1]',
quantityProduct : '(//td[@class="cart_quantity"]/button)[1]',
totalPriceProduct : '(//td[@class="cart_total"]/p)[1]',
btnViewCart : '//div[@id="cartModal"]//p//a[@href="/view_cart"]',
btnRemove : '(//a[@class="cart_quantity_delete"])[1]',
lblEmpty : '//span[@id="empty_cart"]/p/b',
nameSearchProduct : '(//td[@class="cart_description"]//a)[index]',
btnProceedToCheckout : '//a[@class="btn btn-default check_out"]',
lblDeliveryAddress : '(//ul[@id="address_delivery"]//li[@class="address_address1 address_address2"])[index]',
lblBillingAddress : '(//ul[@id="address_invoice"]//li[@class="address_address1 address_address2"])[index]"]',

}

export const variableCart = {
    lblEmpty : "Cart is empty!",
    }