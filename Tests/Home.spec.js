
require('../Utilities/CustomLocators.js');
var homePage = require("../Pages/Home.page.js");
var base = require("../Utilities/Base.js");
var browserHandles = [];
      
      
describe('Marshalls Webpage - Main Page - Testing Suite', () => {
    var myArray = homePage.socialMedia;
    describe('-01-Webpage Basics-', () => {
        beforeAll(function(){
            base.navigateToHomeUrl();
                 
        });
          
        it('MP 001 - Should have correct page title', () => {
            expect(browser.getTitle()).toEqual('Marshalls | Never Boring. Always Surprising.');
        });
      
        it('MP 002 - should check if logo is displayed', () => {
            expect(homePage.logo.isDisplayed()).toBe(true);
        });
      
        it('MP 003 - should check if pop-up window is displayed ', () => {
            expect(homePage.popUpWindow.isDisplayed()).toBe(true);
        });
    });
      
    describe('-02- Header Functionalities Test Suite -', () => {
        beforeAll(function(){
            base.navigateToHomeUrl();
            element(by.ngClick('modalInstanceCtrl.close()'));
            homePage.closePopUp.click();
        });
      
        it('MP 004 - Should verify if button Links for additional sites and social media is displayed ', () => {
            var myArray = homePage.socialMedia;
            for(i=0; i<myArray.length; i++){
                expect(homePage.socialMedia.get(i).isDisplayed()).toBe(true);
                browser.navigateToHomeUrl();
                browserHandles.get(i).click();
                browser.navigateToHomeUrl();
                    
            }
        });
      
        it('MP 005 - should verify if hover over of labels on the header  is working',()=>{
                    
            homePage.socialMedia.count().then(function(num){
            for(i=0; i<num; i++){
                browser.actions().mouseMove(homePage.socialMedia.get(i)).perform();
                browser.sleep(2000);
                homePage.socialMedia.get(i).getCssValue('color').then(function(x){
                        console.log(x);
                    })   
                }
            })
        })
        
        it('MP 006 - should verify if menu dropdown is displayed,clickable and closing', () => {
            expect(homePage.menuDropdown.isDisplayed()).toBe(true);
            homePage.menuDropdown.click();
            browser.sleep(5000);
            homePage.menuDropdownClose.click();
        });
    });    
});
    

    