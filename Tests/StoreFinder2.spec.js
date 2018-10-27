require('../Utilities/CustomLocators.js');
//connect the file we can apply the ng-click
var homePage = require("../Pages/Home.page.js");
var base = require("../Utilities/Base.js");
var locate = require("../Utilities/CustomLocators.js");
var StoreFinder2Page = require('../Pages/StoreFinder2.page.js');

describe('Marshall Web Page Testing Suite', () => {
    browser.waitForAngularEnabled(false);
    describe('Part 1 - Testing Store Finder Functionality on Main Menu', () => {
        beforeAll(function(){
            base.navigateToHomeUrl();
            browser.refresh();
                browser.sleep(3000)
            homePage.closePopUp.click();
            homePage.menuButton.click();
            homePage.findStore.first().click();
            browser.sleep(5000)
            
        });
    
       
    it('TC1 - should Check inpspect top banner Elements are Displyaed properly', () => {
        expect(StoreFinder2Page.facbookIcon.first().isDisplayed()).toBe(true);
        expect(StoreFinder2Page.instagaramIcon.first().isDisplayed()).toBe(true);
        expect(StoreFinder2Page.twitterIcon.first().isDisplayed()).toBe(true);
        expect(StoreFinder2Page.pinterestIcon.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.sierraLogo.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.marshallsLogo.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.homeGoodsLogo.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.homeSenseLogo.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.tjMaxLogo.isDisplayed()).toBe(true);
    });

    it('TC2 - Should hover over then check element',()=>{
        browser.actions().mouseMove(StoreFinder2Page.tjMaxLogo).perform();
        expect(StoreFinder2Page.tjMaxShop.isDisplayed()).toBe(true);
                
        browser.actions().mouseMove(StoreFinder2Page.sierraLogo).perform();
        expect(StoreFinder2Page.sierraShop.isDisplayed()).toBe(true);

        browser.actions().mouseMove(StoreFinder2Page.marshallsLogo).perform();
        expect(StoreFinder2Page.marshallsFindStore.isDisplayed()).toBe(true);

        browser.actions().mouseMove(StoreFinder2Page.homeGoodsLogo).perform();
        expect(StoreFinder2Page.homeGoodsFindStore.isDisplayed()).toBe(true);

        browser.actions().mouseMove(StoreFinder2Page.homeSenseLogo).perform();
        expect(StoreFinder2Page.homeSenseFindStore.isDisplayed()).toBe(true);
                
    });
          
    it('TC3 - should check the color chage in elements when hovered over', () => {
        expect(StoreFinder2Page.findAStoreTextPin.isDisplayed()).toBe(true);
        var colorChange = StoreFinder2Page.findAStoreTextPin.getCssValue("color").then(function(color){});
        
        browser.actions().mouseMove(StoreFinder2Page.findAStoreTextPin).perform();
        expect(colorChange).not.toEqual(StoreFinder2Page.findAStoreTextPin.getCssValue("color"));

        expect(StoreFinder2Page.pinLocator.isDisplayed()).toBe(true);
        var colorChange2 = StoreFinder2Page.pinLocator.getCssValue("color").then(function(color){});
        browser.actions().mouseMove(StoreFinder2Page.pinLocator).perform();
        expect(colorChange2).not.toEqual(StoreFinder2Page.pinLocator.getCssValue("color"));
    
        expect(StoreFinder2Page.closeMenu.isDisplayed()).toBe(true);
        let colorChange3 = StoreFinder2Page.closeMenu.getCssValue('color').then(color=>{});
        browser.actions().mouseMove(StoreFinder2Page.closeMenu).perform();
        expect(colorChange3).not.toEqual(StoreFinder2Page.closeMenu.getCssValue('color'));
        
    });
        
    it('TC4 - should inspect the middle section elements are displyaed properly', () => {
        expect(StoreFinder2Page.nearBy.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.marshallTitle.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.menu.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.yourNextSurpriseText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.enterLocationText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.topArrow.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.enterLocationText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.pinLocator.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.nearBy.isDisplayed()).toBe(true);
    });
           
    
     
    it('TC5 - Test Case 5', () => {
        StoreFinder2Page.nearBy.click();
            browser.executeScript('arguments[0].scrollIntoView();',StoreFinder2Page.zipInputBox2).then(()=>{
                    StoreFinder2Page.zipInputBox2.sendKeys('22033'); 
                    browser.sleep(3000);
            expect(StoreFinder2Page.zipInputBox2.isDisplayed()).toBe(true);
            });
        expect(StoreFinder2Page.changeLocationText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.zipInputBox2.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.yourNextSurpriseText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.searchLocationButton.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.browseByState2.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.enEspanol2.isDisplayed()).toBe(true);
    });

    it('TC6 - scroll down the dropdown Menu', () => {

        expect(StoreFinder2Page.pinLocator.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.nearBy.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.changeLocationText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.yourNextSurpriseText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.zipInputBox2.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.searchLocationButton.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.browseByState2.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.enEspanol2.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.nearbyBC.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcAddress.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcPhoneNumber.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcDistance.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcShowMore.isDisplayed()).toBe(true);
    });
            
     
   it('TC7 - Test Case 7', () => {

        StoreFinder2Page.bcShowMore.click();
        expect(StoreFinder2Page.bcShedule.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcDeliveryService.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcGetDirections.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.bcShowLess.isDisplayed()).toBe(true);
        StoreFinder2Page.bcShowLess.click();
        expect(StoreFinder2Page.nearbyAr.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arAddress.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arPhoneNumber.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arDistance.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arShowMore.isDisplayed()).toBe(true);
        StoreFinder2Page.arShowMore.click();
        expect(StoreFinder2Page.arShedule.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arGetDirections.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arDeliveryService.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.arShowLess.isDisplayed()).toBe(true);
        StoreFinder2Page.arShowLess.click();
        expect(StoreFinder2Page.nearbyDc.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcAddress.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcPhoneNumber.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcDistance.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcShowMore.isDisplayed()).toBe(true);
        StoreFinder2Page.wdcShowMore.click();
        expect(StoreFinder2Page.wdcShedule.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcDeliveryService.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcGetDirections.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.wdcShowLess.isDisplayed()).toBe(true);
        StoreFinder2Page.wdcShowLess.click();
        expect(StoreFinder2Page.closeDropdownNearBy.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.marshallTitle.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.menu.isDisplayed()).toBe(true);
    }); 

    it('TC8 - Test Case 8', () => {
    //Menu button
        StoreFinder2Page.menu.click()
        expect(StoreFinder2Page.StoreFinder2Text.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.marshallsSurprise.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.getInspired .isDisplayed()).toBe(true);
        expect(StoreFinder2Page.giftCards.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.tjxRewardsCreditCard.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.signUpforEmail.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.closeMenu.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.locationSearchResultText.isDisplayed()).toBe(true);
    }); 

    it('TC9 - Test Case 9', () => {
    //About US
        expect(StoreFinder2Page.aboutUsText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.StoreFinder23.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.customerService.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.howWeDoIt.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.comparisonPricing.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.productInfoRecalls.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.returnPolicy.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.grandOpenings.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.socialResponsibility.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.enEspanol2.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.ourCards.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.tjxRewardsCreditCard.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.giftCards.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.tjxCOompaniesInc.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.tjxHome.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.careers.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.marshallsCanada.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.tjxCorporateResponsibility.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.enterLocationText.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.topArrow.isDisplayed()).toBe(true);
    }); 

    
    it('TC10 -Test Case 10', () => {
    //bottom Menu
        expect(StoreFinder2Page.home.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.emailUnsubscribe.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.sitemap.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.privacy.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.caPrivacy.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.caSupplyChain.isDisplayed()).toBe(true);
        expect(StoreFinder2Page.marshalls18.isDisplayed()).toBe(true);

    });
   
    });
    
});