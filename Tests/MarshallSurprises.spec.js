require('../Utilities/CustomLocators.js');
var base = require("../Utilities/Base.js")
var homePage = require("../Pages/Home.page.js");
var surprises=require("../Pages/MarshallSurprises.page.js");


describe('Marshalls Webpage - Marshalls Surprises Link - Testing Suite',()=>{
    beforeAll(function () {
        base.navigateToHomeUrl();
        homePage.closePopUp.click();
        homePage.menu.click();
     
        homePage.dropDown.get(1).click();
        browser.sleep(2000);
     
    });
    describe('-01-Marshall Surprises Header Test Suite-',()=>{
           
            it('MS 001 - should display main heading "#MarshallsSurprise" correctly', () => {
                expect(surprises.h1MainHeading.isDisplayed()).toBe(true);
                expect(surprises.h1MainHeading.getText()).toEqual('#MarshallsSurprise');
            });
            it('MS 002 - should display sub heading text', () => {
                expect(surprises.textHeading.getText()).toContain('Some surprises are too good not to share');
                expect(surprises.textHeading.isDisplayed()).toBe(true);
            });
            it('MS 003 - should click on "Wanna Have Your Photo Featured? >', () => {
                expect(surprises.linkHeading.isDisplayed()).toBe(true);
                expect(surprises.linkHeading.getText()).toEqual('Wanna Have Your Photo Featured? >');
            });
            it('MS 004 - should display Pop Up window when clicked on the heading link', () => {
                surprises.linkHeading.click();
                expect(surprises.popUpWindow.isDisplayed()).toBe(true);
            });
            it('MS 005 - should display pictures in the Pop Up window', () => {
                expect(surprises.popUpImages.get(0).isDisplayed()).toBe(true);
                expect(surprises.popUpImages.get(1).isDisplayed()).toBe(true);
                expect(surprises.popUpImages.get(2).isDisplayed()).toBe(true);
            });
            it('MS006 - should display pictures discriptions in the Pop Up window', () => {
                expect(surprises.popUpDiscriptions.get(0).isDisplayed()).toBe(true);
                expect(surprises.popUpDiscriptions.get(1).isDisplayed()).toBe(true);
                expect(surprises.popUpDiscriptions.get(2).isDisplayed()).toBe(true);
           
            });
            it('MS 007 - should display a heading inside the pop-up window', () => {
                expect(surprises.popUpHeader.isDisplayed()).toBe(true);
                expect(surprises.popUpHeader.getText()).toEqual('Share Your #MarshallsSurprise Finds');
            });
            it('MS 008 - should close the Pop Up window', () => {
                surprises.popUpClose.click();
            });
            it('MS 009 - should display footer disclaimer', () => {
                expect(surprises.disclaimer.isDisplayed()).toBe(true);
                expect(surprises.disclaimer.getText()).toContain('Many of the images above come from customers lik');
            });
            it('MS 010 - should display footer disclaimer link', () => {
                expect(surprises.disclaimer.isDisplayed()).toBe(true);
                expect(surprises.disclaimer.getText()).toContain('See our Photo Share Terms of Use');
            });
            it('MS 011 - should click disclaimer link', () => {
                surprises.disclaimerLink.click();
                expect(browser.getCurrentUrl()).toContain('.com/photosharing');
                browser.navigate().back();
            });
            it('MS 012 - should click on Up Top button and scroll window up', () => {
                browser.executeScript("window.scrollBy(0,1400)");
                // browser.sleep(2000);
                surprises.scrollUpTop.click();
            });
        });
    describe('-02-Iframe test suite-',()=>{
        it('MS 013 - should switch to Iframe', () => {
            browser.ignoreSynchronization=true;
            browser.sleep(2000);
            browser.switchTo().frame(browser.driver.findElement(by.css('.mr-iframe')));
            expect(surprises.adLinks.get(0).isDisplayed()).toBe(true);
            expect(surprises.adLinks.get(1).isDisplayed()).toBe(true);
            expect(surprises.adLinks.get(2).isDisplayed()).toBe(true);
            expect(surprises.adLinks.get(3).isDisplayed()).toBe(true);
            expect(surprises.adLinks.get(4).isDisplayed()).toBe(true);
        });

        it('MS 014 - should verify Fashion images are displayed', () => {
            // browser.sleep(2000);
            surprises.adLinks.get(1).click();
            browser.sleep(4000);
            surprises.images.count().then(function(x){
                // console.log('The number of fashion images is '+x);
                expect(x).toBeLessThan(61);
                expect(x).toBeGreaterThan(0);                
            });
        });
        
        it('MS 015 - should check the pictures grow when clicked and other to fade', () => {

            surprises.allImages.count().then(y=>{
                for(let i=0;i<5;i+=2){
                    
                    surprises.imageSpecific.get(i).click();
                    // browser.executeScript("window.scrollTo(0,2300);")
                    browser.sleep(3000);
                    expect(surprises.largeImages.get(i).getAttribute('class')).toContain('active grow')
                    
                    surprises.largeImages.count().then(x=>{
                        for(let j=0;j<x;j+=3){
                            if (i!=j) {
                                expect(surprises.largeImages.get(j).getAttribute('class')).toContain('not-selected');
                            }
                        }
                    }); 
                }
            });
        });
        it('MS 016 - should display color change when hover over', () => {
            browser.refresh();
            browser.switchTo().frame(browser.driver.findElement(by.css('.mr-iframe')));
            browser.sleep(3000);
            //Before click
            surprises.largeImages.get(7).getCssValue('opacity').then(function(y){
                console.log(y);
            });

            //After click
            surprises.largeImages.get(0).click();
            browser.sleep(2000);
            surprises.largeImages.get(7).getCssValue('opacity').then(function(t){
                console.log(t);
            });

            //After hover over
            browser.actions().mouseMove(surprises.largeImages.get(7)).perform();
            browser.sleep(2000);
            surprises.largeImages.get(7).getCssValue('opacity').then(function(x){
                console.log(x);
            });
        });

        it('MS 017 - should close opening image', () => {
            browser.switchTo().defaultContent();
            browser.executeScript("window.scrollBy(0,1400)");
            browser.sleep(2000);
            surprises.scrollUpTop.click();
            browser.sleep(2000);
            browser.switchTo().frame(browser.driver.findElement(by.css('.mr-iframe')));
            surprises.closePopUpImage.get(0).click();
        });
            
        it('MS 018 - should verify Home images are displayed', () => {
            surprises.adLinks.get(2).click();
            browser.sleep(2000);
            surprises.images.count().then(function(x){
                // console.log('The number of fashion images is '+x)
                expect(x).toBeLessThan(61);
                expect(x).toBeGreaterThan(0);                
            });
        });

        it('MS 019 - should verify Lifestyle images are displayed', () => {
            surprises.adLinks.get(3).click();
            browser.sleep(2000);
            surprises.images.count().then(function(x){
                // console.log('The number of fashion images is '+x);
                expect(x).toBeLessThan(61);
                expect(x).toBeGreaterThan(0);                
            });
        });


        it('MS 020 - should verify Beauty images are displayed', () => {
            surprises.adLinks.get(4).click();
            browser.sleep(2000);
            surprises.images.count().then(function(x){
                // console.log('The number of fashion images is '+x);
                expect(x).toBeLessThan(61);
                expect(x).toBeGreaterThan(0);                
            });
        });
        it('MS 021 - should see how many common images are there', () => {
            // surprises.adLinks.get(0).click();
            browser.executeScript('window.scrollBy(0,1600)');
            browser.sleep(2000);
            surprises.loadMore.click();
        });
        it('MS 022 - should verify number of displayed images', () => {
            var count=0;
            surprises.allImages.each (function(image,index) {
                image.isDisplayed().then ((isTrue)=> {
                    if(isTrue) {
                        count++;
                        // console.log(count);
                    }
                });
            });
        });
    });

    describe('-03-Instagram Test Suite-', () => {
        var browserHandles = [];

        it('MS 023 - should verify image install date button', () => {
            for(let i=0;i<3;i++){
                surprises.allImages.get(i).click();
                browser.sleep(2000);

                surprises.instagramText.getText().then(function(string){ //this is gonna take the texts
                    // console.log(string);
                    array=string.toUpperCase().split(' ');
                    // expect(array).toContain('#MARSHALLS');
                    surprises.imageInstallDate.get(i).click();
                    browser.sleep(2000);
                    browser.getAllWindowHandles().then(function(handles){ 
                        browserHandles = handles;
                        browser.switchTo().window(browserHandles[1]).then(function(){
                        })
                        browser.sleep(2000);
                    })
                    surprises.instagramAccountText.getText().then ((text)=>{
                        // console.log(text);
                    })
                    browser.close().then(function(){
                        browser.switchTo().window(browserHandles[0]).then(function(){
                        });
                        browser.sleep(2000);
                        browser.refresh();
                        browser.ignoreSynchronization=true;
                        browser.sleep(2000);
                        browser.switchTo().frame(browser.driver.findElement(by.css('.mr-iframe')));
                        browser.sleep(2000);
                    });
                
                });
            }
        });
    });
});
