

require('../Utilities/CustomLocators.js');
var homePage = require("../Pages/Home.page.js");
var base = require("../Utilities/Base.js");
var signUpForEmail =require("../Pages/signUpForEmail.page.js");
var signUpData = require("../TestData/SignUpData.json")

describe('Marshalls Webpage - Sign up For Email - Test Suite', () => {
    beforeAll(function(){
       
        base.navigateToHomeUrl();
       homePage.closePopUp.click();
        homePage.menu.click();
        browser.sleep(1000);
        homePage.signForEmail.click();
        browser.sleep(1000);
    });
    
    it('SU 001 - should open sign up for email page', () => {
        expect(signUpForEmail.mailImage.isDisplayed()).toBe(true);
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toContain('email-news');
    });
    it('SU 002 - should verify "Get In On The Surprise" is Displayed', () => {
        expect(signUpForEmail.heading1.getText()).toEqual('Get In On The Surprise');
        browser.sleep(2000);
    });
    it("SU 003 - should verify para including Become a Marshalls insider!", () => {
        expect(signUpForEmail.para.getText()).toContain('Become a Marshalls insider!');      
    });
    it('SU 004 - should click and navigate privacy policy page ', () => {
        signUpForEmail.privacyPolicy2.get(1).click()
        //expect(browser.getCurrentUrl()).toContain('privacy');
        
    });
    var EC = protractor.ExpectedConditions
    it('SU 005 - should check top button on the privacy policy page', () => {
        browser.executeScript("window.scrollTo(0,document.body.scrollHeight)").then(function(){
            browser.wait(EC.elementToBeClickable(signUpForEmail.top),6000);
            signUpForEmail.top.click()
            browser.sleep(1000);
        }) 
    });
    
    it('SU 006 - should verify Terms of Use Link', () => {
        browser.executeScript("window.scrollTo(800,2000);")
        .then(function(){
            browser.sleep(2000);
            signUpForEmail.termsOfUse.click();
        browser.navigate().back();
        browser.navigate().back();
        })
    })
      
    it('SU 007 - should display Need to leave the list?', () => {
        expect(signUpForEmail.needToLeave.get(0).isDisplayed()).toBe(true);
        expect(signUpForEmail.needToLeave.get(0).getText()).toContain('Need to leave the list?')
    });
    it('SU 008 - should display -Email Address-', () => {
        browser.sleep(1000)
        expect(signUpForEmail.inputBoxes.get(0).getAttribute('placeholder').isDisplayed()).toBe(true)
        expect(signUpForEmail.inputBoxes.get(0).getAttribute('placeholder')).toEqual('Email Address') });
     it('SU 009 - should display -Zip Code-', () => {
        expect(signUpForEmail.inputBoxes.get(1).getAttribute('placeholder').isDisplayed()).toBe(true)
        expect(signUpForEmail.inputBoxes.get(1).getAttribute('placeholder')).toEqual('Zip Code') 
    });
    it('SU 010 - should display -First Name (optional)-', () => {
        expect(signUpForEmail.inputBoxes.get(2).getAttribute('placeholder').isDisplayed()).toBe(true)
        expect(signUpForEmail.inputBoxes.get(2).getAttribute('placeholder')).toEqual('First Name (optional)')   
    });
    it('SU 011 - should display required when NOT filling e mail and Zip Code ', () => {
        signUpForEmail.inputBoxes.get(2).sendKeys('Mustafa')
        browser.sleep(500)
        signUpForEmail.signUpButton.get(0).click();
        browser.sleep(500)
        expect(signUpForEmail.displayRequired.get(0).getText()).toEqual('Required')
        expect(signUpForEmail.displayRequired.get(1).getText()).toEqual('Required')
});
    it('SU 012 - should display required when NOT filling e mail ', () => {
        signUpForEmail.inputBoxes.get(1).sendKeys('22334');
        browser.sleep(500)
        signUpForEmail.inputBoxes.get(2).sendKeys('Mustafa')
        browser.sleep(500)
         signUpForEmail.signUpButton.get(0).click();
        browser.sleep(500)
        expect(signUpForEmail.displayRequired.get(0).getText()).toEqual('Required')
        expect(signUpForEmail.displayRequired.get(0).isDisplayed()).toBe(true);
        

});
    it('SU 013 - should display -Please correct email address format.- ', () => {
        signUpForEmail.inputBoxes.get(1).clear()
        signUpForEmail.inputBoxes.get(2).clear()
        signUpForEmail.inputBoxes.get(0).sendKeys('mike');
        browser.sleep(500)
        signUpForEmail.inputBoxes.get(1).sendKeys('22334');
        browser.sleep(500)
        signUpForEmail.inputBoxes.get(2).sendKeys('Mustafa')
        browser.sleep(500)
        signUpForEmail.signUpButton.get(0).click();
        browser.sleep(500)
        expect(signUpForEmail.displayRequired.get(0).getText()).toEqual('Please correct email address format.')
        expect(signUpForEmail.displayRequired.get(0).isDisplayed()).toBe(true);
    });

    it('SU 014 - should display -Required- when NOT filling zipcode ', () => {
      signUpForEmail.inputBoxes.get(0).clear()
      signUpForEmail.inputBoxes.get(1).clear()
      signUpForEmail.inputBoxes.get(2).clear()
      signUpForEmail.inputBoxes.get(0).sendKeys('eskbaykal@yahoo.com');
      browser.sleep(500)
      signUpForEmail.inputBoxes.get(2).sendKeys('Mustafa')
      browser.sleep(500)
      signUpForEmail.signUpButton.get(0).click();
      browser.sleep(500)
      expect(signUpForEmail.displayRequired.get(1).getText()).toEqual('Required')
      expect(signUpForEmail.displayRequired.get(1).isDisplayed()).toBe(true);
    });

    it('SU 015 - should display -Please correct zip code format.- ', () => {
        signUpForEmail.inputBoxes.get(0).clear()
        signUpForEmail.inputBoxes.get(1).clear()
        signUpForEmail.inputBoxes.get(2).clear()
        signUpForEmail.inputBoxes.get(0).sendKeys('eskbaykal@yahoo.com');
        browser.sleep(500)
        signUpForEmail.inputBoxes.get(1).sendKeys('223');
        browser.sleep(500)
        signUpForEmail.inputBoxes.get(2).sendKeys('Mustafa')
        browser.sleep(500)
        signUpForEmail.signUpButton.get(0).click();
        browser.sleep(500)
        expect(signUpForEmail.displayRequired.get(1).getText()).toEqual('Please correct zip code format.')
        expect(signUpForEmail.displayRequired.get(1).isDisplayed()).toBe(true);
    });

    it('SU 016 - should verify input boxes for sign up', () => {
        signUpForEmail.inputBoxes.get(0).clear()
        signUpForEmail.inputBoxes.get(1).clear()
        signUpForEmail.inputBoxes.get(2).clear()
            signUpForEmail.inputBoxes.get(0).sendKeys('eskbaykal@yahoo.com');
            browser.sleep(500)
            signUpForEmail.inputBoxes.get(1).sendKeys('22334');
            browser.sleep(500)
            signUpForEmail.inputBoxes.get(2).sendKeys('Mustafa')
            browser.sleep(500)
            signUpForEmail.signUpButton.get(0).click();
            //expect(signUpForEmail.thanksForSignUp.get(1).getText()).toEqual('Thanks for Signing up!');
            browser.sleep(1000)
            
    });

    it('SU 017 - should verify Sign up Now disabled', () => {
        signUpForEmail.Checkbox.get(0).click();
        browser.sleep(1000)
        signUpForEmail.Checkbox.get(1).click();
        browser.sleep(1000)
        signUpForEmail.Checkbox.get(2).click();
        browser.sleep(1000)
        expect(signUpForEmail.signUpNowButton.get(2).isEnabled()).toBe(false); 
    });
    
    it('SU 018 - should verify check boxes of sister stores ', () => {
        signUpForEmail.Checkbox.get(0).click();
        browser.sleep(1000)
        signUpForEmail.Checkbox.get(1).click();
        browser.sleep(1000)
        signUpForEmail.Checkbox.get(2).click();
        browser.sleep(1000)
        expect(signUpForEmail.signUpNowButton.get(2).isEnabled()).toBe(true); 
    });

    it('SU 019 - should navigate to Thanks For Signing Up! page', () => {
        signUpForEmail.signUpNowButton.get(2).click(); 
        expect(signUpForEmail.thanksForSignUp.get(2).isDisplayed()).toBe(false)
        
    });  
    
    var browserHandles=[];
    it('SU 020 - should navigate to unsubscribe page', () => {
            signUpForEmail.unsubscribe.get(0).click();
            browser.getAllWindowHandles().then(function(handles){
                browserHandles = handles
                browser.switchTo().window(browserHandles[1])
                browser.waitForAngularEnabled(false);
                browser.sleep(1000)
                expect(browser.getCurrentUrl()).toContain('Unsub')
                browser.sleep(1000); 
        });
    })
   
    it('SU 021 - should unsubscribe with YES radio button', () => {
            browser.waitForAngularEnabled(false);
            signUpForEmail.unsubscribeInputBox.sendKeys('eskbaykal@yahoo.com');
            browser.sleep(1000)
            signUpForEmail.radioYes.click();
            browser.sleep(1000)
            signUpForEmail.submitUnsubscribe.click();
            expect(signUpForEmail.unsubscribeProcessed.getText()).toContain('Your request has been processed.')
            expect(browser.getCurrentUrl()).toContain("marshalls-conf.htm");
            browser.navigate().back();        
    })

    it('SU 022 - should NOT unsubscribe with NO radio button', () => {
            browser.waitForAngularEnabled(false);
            signUpForEmail.unsubscribeInputBox.clear();
            signUpForEmail.unsubscribeInputBox.sendKeys('eskbaykal@yahoo.com');
            browser.sleep(1000)
            signUpForEmail.radioNo.click();
            browser.sleep(1000)
            signUpForEmail.submitUnsubscribe.click();
            expect(signUpForEmail.unsubscribeProcessed.getText()).toContain('Your request has been processed.')
            expect(browser.getCurrentUrl()).toContain("marshalls-conf.htm"); 
            browser.close().then(function(){
              browser.sleep(1000)
              browser.switchTo().window(browserHandles[0])
              browser.close().then(function(){

              });



            });
    })
    it('SU 023 - should verify input boxes for sign up', () => {
        var Signup = (function(){
         browser.waitForAngularEnabled(false);
             browser.get('https://tempail.com/en/');
                 signUpForEmail.EmailAddressButton.click() 
                 signUpForEmail.EmailAddress.getAttribute("value").then(function(email){
                 browser.get("https://www.marshalls.com/email-news");
                 browser.sleep(1000)
                 signUpForEmail.inputBoxes.get(0).sendKeys(email);
                            
             browser.sleep(500)
             signUpForEmail.inputBoxes.get(1).sendKeys(signUpData.Customers[i].zipCode)
             browser.sleep(500)
             signUpForEmail.inputBoxes.get(2).sendKeys(signUpData.Customers[i].fName);
             signUpForEmail.signUpButton.get(0).click();
             browser.sleep(10000)
             signUpForEmail.Checkbox.get(0).click();
             browser.sleep(1000)
             })
             });
             for (var i=0; i<1; i++){
                 Signup()
             }          
 });
    it('SU 024 - should check if Sierre is displayed and clickable/navigating  ', () => {
        base.navigateToHomeUrl();
        for(let i=0;i<signUpData.urlLink.length;i++){ 
            if(i==2){
                continue;
            }else{
                expect(signUpForEmail.socialMedia.get(i).isDisplayed()).toBe(true);
                signUpForEmail.socialMedia.get(i).click();
                browser.getAllWindowHandles().then(function(x){
                browserHandles=x;
                    browser.switchTo().window(browserHandles[1]).then(function(){
                        browser.waitForAngularEnabled(false);
                        browser.sleep(2000)
                        expect(browser.getCurrentUrl()).toContain(signUpData.urlLink[i]);                   
                    });
                    browser.close().then(function(){
                        browser.switchTo().window(browserHandles[0]);
                    });
                });
            }  
        }
    })   
})

 