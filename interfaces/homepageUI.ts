export const elementLocatorHomePage = {
url : 'https://automationexercise.com',
hplContactUs : 'Contact us',
txtName : 'Name',
txtEmail : "//input[@name='email']",
txtSubject : 'Subject',
txtMessage : 'Your Message Here',
btnSubmit : "//input[@name='submit']",
btnOK : 'OK',
btnHome : 'Home',
//messageSendSuccess : "Success! Your details have been submitted successfully.",
messageSendSuccess : '//div[@class="status alert alert-success"]',
hplTestCase : "(//a[@href='/test_cases'])[1]",
txtSubscription : "#susbscribe_email",
btnSubscription : "#subscribe",
messageSendSubscriptionSuccess : '//div[@class="alert-success alert"]',
hplProduct : "//a[@href='/view_cart]",
}

import randomstring from 'randomstring';
export const variableHomePage = {
    title : 'Automation Exercise',
    titleContactUs : 'Get In Touch',
    name : randomstring.generate(15),
    email : randomstring.generate(10)+Math.floor((Math.random() * 1000) + 1)+'@gmail.com',
    subject : 'test send contact us',
    message : 'Got a question? Looking for info? Need to talk with customer service?',
    messageSendSuccess : 'Success! Your details have been submitted successfully.',
   // messageSendSuccess : "//div[@class='status alert alert-success']",
    titleTestCase : "Automation Practice Website for UI Testing - Test Cases",
    titleSubscription : "Subscription",
    messageSendSubscriptionSuccess : "You have been successfully subscribed!",
    urlTestCase : "https://automationexercise.com/test_cases",
        
}