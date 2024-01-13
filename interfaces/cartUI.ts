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
lblBillingAddress : '(//li[@class="address_address1 address_address2"])[index]',
hplSinUpFromCart : '//div[@id="checkoutModal"]//a[@href="/login"]',
tarComment : '//textarea[@name="message"]',
btnPlaceHolder : '//a[@class="btn btn-default check_out"]',
txtNameOnCard : '//input[@name="name_on_card"]',
btnConfirm : '#submit',
btnContinue : '//a[@data-qa="continue-button"]',
btnDownloadInvoice : 'Download Invoice',
lblMessageSuccess : '(//div[@class="alert-success alert"])[1]',



}
import randomstring from 'randomstring';
export const variableCart = {
    lblEmpty : "Cart is empty!",
    nameOnCard : randomstring.generate(15),
    numberOnCard : '4555105031620519',
    Cvc : '481',
    expireMonth : '02',
    expireYear : '2025',
    messageSuccess : 'Your order has been placed successfully!',
    }