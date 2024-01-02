export const elementLocatorAccount = {
//Enter username and email    
singupHyperlink : ' Signup / Login',
singupTitle : 'New User Signup!',
lblName : 'Name',
lblForm : 'form',
lblSignup : 'Signup',
txtEmailAddress : "//input[@data-qa='signup-email']",

//Enter Account information
lblGender : 'Mrs.',
lblPassword : 'Password *',
sltDay : '#days',
sltMonth : '#months',
sltYear : '#years',
cbxNewsletter : 'Sign up for our newsletter!',
cbxOption : 'Receive special offers from',
lblFirstname : 'First name *',
lblLastname : 'Last name *',
lblCompany : 'Company',
lblAddress : 'Address * (Street address, P.',
lblAddress2 : 'Address 2',
lblCountry : 'Country *',
lblState : 'State *',
lblZipcode : '#zipcode',
lblCity : 'City *',
lblMobile : 'Mobile Number *',
btnCreateAccount : 'Create Account',
btnContinue : 'Continue',
hplLoggin : 'Logged in as',
lblUsername : 'Nguyen',

//Delete Account 
hplDeleteAccount : 'Delete Account',

//Sigup Error
lblErrorSignup : 'Email Address already exist!',
}

import randomstring from 'randomstring';
export const variableAccount = {
    userName : randomstring.generate(15),
    email : randomstring.generate(7)+Math.floor((Math.random() * 1000) + 1)+'@gmail.com',
    titleAccountInformation : 'Enter Account Information',
    opDay : '11',
    opMonth : '3',
    opYear : '1995',
    password : randomstring.generate(7)+Math.floor((Math.random() * 1000) + 1),
    firstName : randomstring.generate(10),
    lastName : randomstring.generate(10),
    company : 'VMO company',
    address : 'Duy Tan',
    address2 : 'Cau Giay',
    opCountry : 'Canada',
    state : 'British Columbia',
    opCity : 'washington',
    zipcode : '205000',
    mobilePhone : '0986321456',
    titleCreateAccount : 'ACCOUNT CREATED!',
    titleDeleteAccount : 'Account Deleted!',
    }