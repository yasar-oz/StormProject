


require('../Utilities/CustomLocators.js');

var homePage = require("../Pages/Home.page.js");

var Base = require("../Utilities/Base.js");

var StoreFinder1 = require("../Pages/StoreFinder1.page.js");

describe('Marshalls Webpage - Store Finder Link - Testing Suite', function(){
  
        beforeAll(function(){

            Base.navigateToHomeUrl();

            homePage.popUpWindow;
            homePage.closePopUp.click();

            homePage.menuButton.click();
            homePage.findStoreFinder1.click();//comment it out when running the whole suite
         
        });
    
        it('Test Case ID. SF001 - Store Finder link should be displayed', function(){
            browser.sleep(3000);
            expect(homePage.findStoreFinder1.isDisplayed()).toBe(true);
        });
        
        it('Test Case ID. SF002 - Store Finder link should be clickable', function(){
        
            homePage.findStoreFinder1.click();
            expect(browser.getTitle()).toEqual("Store Finder | Marshalls");
              
        });

        it('Test Case ID. SF003 - Make sure the texts, input boxes, sign up button, and privacy policy link are displayed', function(){
                
            expect(StoreFinder1.footerMessage1.getText()).toEqual("Get In On the Surprise.");
                    
            expect(StoreFinder1.footerMessage2.getText()).toEqual("Sign up for insider emails.");
         
            expect(StoreFinder1.emailInputBox.isDisplayed()).toBe(true);
                 
            expect(StoreFinder1.zipCodeInputBox.isDisplayed()).toBe(true);
              
            expect(StoreFinder1.firstNameInputBox.isDisplayed()).toBe(true);
                 
            expect(StoreFinder1.signUpButton.isDisplayed()).toBe(true);
                 
            expect(StoreFinder1.privacyPolicyLink.isDisplayed()).toBe(true);
              
        });

    //     it('Test Case ID. SF004 - Make sure the display of ABOUT US text and the links under it', function(){
                
    //         expect(StoreFinder1.aboutUsText.isDisplayed()).toBe(true);
                     
    //         expect(StoreFinder1.StoreFinder1Link.isDisplayed()).toBe(true);
                         
    //         expect(StoreFinder1.customerServiceLink.isDisplayed()).toBe(true);
                  
    //         expect(StoreFinder1.howWeDoItLink.isDisplayed()).toBe(true);
                 
    //         expect(StoreFinder1.comparisonPricingLink.isDisplayed()).toBe(true);
                   
    //         expect(StoreFinder1.productInfoLink.isDisplayed()).toBe(true);
                  
    //         expect(StoreFinder1.returnPolicyLink.isDisplayed()).toBe(true);
                  
    //         expect(StoreFinder1.grandOpeningsLink.isDisplayed()).toBe(true);
                  
    //         expect(StoreFinder1.socialResponsibilityLink.isDisplayed()).toBe(true);
                 
    //         expect(StoreFinder1.enEspañolLink.isDisplayed()).toBe(true);
              
    //     });
        
    //     it('Test Case ID. SF005 - Make sure the display of  OUR CARDS text and the links under it', function(){
                
    //         expect(StoreFinder1.ourCardsText.isDisplayed()).toBe(true);
                    
    //         expect(StoreFinder1.TJXRewardsLink.isDisplayed()).toBe(true);
                 
    //         expect(StoreFinder1.giftCardsLink.isDisplayed()).toBe(true);
              
    //     });

    //     it('Test Case ID. SF006 - Make sure the display of  TJX COMPANIES, INC. text and the links under it', function(){
                
    //         expect(StoreFinder1.TJXCompaniesText.isDisplayed()).toBe(true);
                 
    //         expect(StoreFinder1.TJXHomeLink.isDisplayed()).toBe(true);
                  
    //         expect(StoreFinder1.careersLink.isDisplayed()).toBe(true);
                  
    //         expect(StoreFinder1.marshallsCanadaLink.isDisplayed()).toBe(true);
                 
    //         expect(StoreFinder1.TJXCorporateResponsibilityLink.isDisplayed()).toBe(true);
              
    //     });
        
    //     it('Test Case ID. SF007 - Make sure the input boxes, sign up button, and privacy policy link are functioning', function(){
                
    //         StoreFinder1.signUpButton.click();  
    //         expect(StoreFinder1.emailInputBoxErrorMessage.getText()).toEqual("Required");
              
    //         expect(StoreFinder1.emailInputBoxErrorMessage.getText()).toEqual("Required");
                        
    //         expect(StoreFinder1.zipCodeInputBoxErrorMessage.getText()).toEqual("Required");
                     
    //         StoreFinder1.privacyPolicyLink.click();
    //         expect(StoreFinder1.privacyPolicyLinkTextAfterClicking.getText()).toEqual("Privacy");
    //         browser.navigate().back();
              
    //     });

    //     it('Test Case ID. SF008 - Make sure the links under ABOUT US text are functioning', function(){    
                        
    //         StoreFinder1.customerServiceLink.click();
    //         expect(StoreFinder1.customerServiceLinkTextAfterClicking.getText()).toEqual("Customer Service");
    //         browser.navigate().back();
              
    //         StoreFinder1.howWeDoItLink.click();
    //         expect(StoreFinder1.howWeDoItLinkTextAfterClicking.getText()).toEqual("How We Do It");
    //         browser.navigate().back();
                          
    //         StoreFinder1.comparisonPricingLink.click();
    //         expect(StoreFinder1.comparisonPricingLinkTextAfterClicking.getText()).toEqual("Comparison Pricing");
    //         browser.navigate().back();
              
    //         StoreFinder1.productInfoLink.click();
    //         expect(StoreFinder1.productInfoLinkTextAfterClicking.getText()).toEqual("Product Info/Recalls");
    //         browser.navigate().back();
                         
    //         StoreFinder1.returnPolicyLink.click();
    //         expect(StoreFinder1.returnPolicyLinkTextAfterClicking.getText()).toEqual("Terms of Use");
    //         browser.navigate().back();
                         
    //         StoreFinder1.grandOpeningsLink.click();
    //         expect(StoreFinder1.grandOpeningsLinkTextAfterClicking.getText()).toEqual("Grand Openings");
    //         browser.navigate().back();
                         
    //         StoreFinder1.socialResponsibilityLink.click();
    //         expect(StoreFinder1.socialResponsibilityLinkTextAfterClicking.getText()).toEqual("Social Responsibility");
    //         browser.navigate().back();
                          
    //         StoreFinder1.enEspañolLink.click();
    //         expect(StoreFinder1.enEspañolLinkTextAfterClicking.getText()).toContain("Buscador de tiendas");
    //         browser.navigate().back();
              
    //     });

    //     it('Test Case ID. SF009 - Make sure the links under OUR CARDS text are functioning', function(){    
                        
    //         StoreFinder1.TJXRewardsLink.click();
    //         browser.getAllWindowHandles().then(function(GUID){
    //         var windowHandles = GUID;
    //         browser.switchTo().window(windowHandles[1]).then(function(){
    //         expect(StoreFinder1.TJXRewardsLinkTextAfterClicking.getText()).toEqual("JOIN NOW");
    //         browser.close().then(function (){ 
    //         browser.switchTo().window(windowHandles[0]).then(function(){

    //         });});});});
                        
    //         StoreFinder1.giftCardsLink.click();
    //         expect(StoreFinder1.giftCardsLinkTextAfterClicking.getText()).toEqual("Gift Cards");
    //         browser.navigate().back();
              
    //     });

        
    //     it('Test Case ID. SF010 - Make sure the links are functioning under TJX COMPANIES, INC. text', function(){    
                        
    //         browser.waitForAngularEnabled(false);
    //         StoreFinder1.TJXHomeLink.click();
    //         browser.getAllWindowHandles().then(function(GUID){
    //         windowHandles = GUID;
    //         browser.switchTo().window(windowHandles[1]).then(function(){           
    //         expect(StoreFinder1.TJXHomeLinkAfterClicking.isDisplayed()).toBe(true);
    //         browser.close().then(function (){ 
    //         browser.switchTo().window(windowHandles[0]).then(function(){
          
    //         });
    //     });
           
    //         });});
                    
    //         browser.waitForAngularEnabled(false);
    //         StoreFinder1.careersLink.click();
    //         browser.getAllWindowHandles().then(function(GUID){
    //         windowHandles = GUID;
    //         browser.switchTo().window(windowHandles[1]).then(function(){           
    //         expect(StoreFinder1.careersLinkAfterClicking.isDisplayed()).toBe(true);
    //         browser.close().then(function (){  
    //         browser.switchTo().window(windowHandles[0]).then(function(){
    //         });
           
    //         });});});
                
    //         StoreFinder1.marshallsCanadaLink.click();
    //         browser.getAllWindowHandles().then(function(GUID){
    //         windowHandles = GUID;
    //         browser.switchTo().window(windowHandles[1]).then(function(){           
    //         expect(StoreFinder1.marshallsCanadaLinkAfterClicking.getText()).toEqual("BABY IT’S COLD OUTSIDE");
    //         browser.close().then(function (){  
    //         browser.switchTo().window(windowHandles[0]).then(function(){
    //         });
           
    //         });});});
               
    //         browser.waitForAngularEnabled(false);
    //         StoreFinder1.TJXCorporateResponsibilityLink.click();
    //         browser.getAllWindowHandles().then(function(GUID){
    //         windowHandles = GUID;
    //         browser.switchTo().window(windowHandles[1]).then(function(){           
    //         expect(StoreFinder1.TJXCorporateResponsibilityLinkAfterClicking.isDisplayed()).toBe(true);
    //         browser.close().then(function (){  
    //         browser.switchTo().window(windowHandles[0]).then(function(){
    //         });
           
    //         });});});
    //     });

    //   it('Test Case ID. SF011 - Make sure the texts, store search location input box, GO NOW button, and the links are displayed', function(){
           
    //         expect(StoreFinder1.StoreFinder1Text.getText()).toEqual("Store Finder");                
   
    //         expect(StoreFinder1.yourNextSurpriseText.getText()).toEqual("Your next surprise is just around the corner...");                
   
    //         expect(StoreFinder1.goNowButton.isDisplayed()).toBe(true);                
      
    //         expect(StoreFinder1.searchLocationInputBox.isDisplayed()).toBe(true);                
     
    //         expect(StoreFinder1.browseByStateLink.isDisplayed()).toBe(true);                
     
    //         expect(StoreFinder1.enEspañolLink.isDisplayed()).toBe(true);                
    //     });

    //     it('Test Case ID. SF012 - Make sure that the background-color of "Store Finder" section is as per the requirements', function(){
           
    //         expect(StoreFinder1.imageContainer.getCssValue("background-color")).toEqual("rgba(243, 123, 125, 1)"); 
                       
    //     });
    });