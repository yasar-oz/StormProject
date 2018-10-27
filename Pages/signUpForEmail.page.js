


require ('../Utilities/CustomLocators.js');
//var homePage = require ('../Utilities/CustomLocators.js')
//var base = require ('../Utilities/Base.js')

var SignUpForEmail=function(){
  this.mailImage=element(by.ngShow("newsletterFormCtrl.uiLocation === 'email-news'"));
  this.heading1=$('.layout-wrapper.ng-scope>section>div>h1');
  this.para=$('.layout-wrapper.ng-scope>section>div>p');
  this.inputBoxes=$$('.form-input>input');
  this.signUpButton=element.all(by.buttonText('Sign Up'));  
  this.thanksForSignUp=$$('.message>h4');
  this.unsubscribe=element.all(by.linkText('Unsubscribe Here'));
  this.unsubscribeInputBox=element(by.css("body > table > tbody > tr > td > form > p:nth-child(6) > input[type='text']"));
  this.radioYes=$("tbody > tr:nth-child(1) > td:nth-child(1) > input[type='radio']");
  this.submitUnsubscribe=$("input[type='image']");
  this.unsubscribeProcessed=$('tbody p');
  this.privacyPolicy2=$$('.privacy-policy');
  this.needToLeave=$$('.unsubscribe p');
  this.displayRequired=$$('.error-message.ng-binding');
  this.radioNo=$(" tbody > tr:nth-child(2) > td:nth-child(1) > input[type='radio']")
  this.Checkbox=$$('.checkbox> label');
  this.signUpNowButton=$$('.btn.blue');
  this.top=$('#top');
  this.contactInfo=element(by.linkText('Contact Information'));
  this.termsOfUse=element.all(by.linkText('/terms-of-use'));
  this.socialMedia=$$('.header-banner-container a');
};
module.exports = new SignUpForEmail();


