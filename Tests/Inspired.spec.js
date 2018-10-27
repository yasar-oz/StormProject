

require ('../Utilities/CustomLocators.js');
//connect the file we can apply the ng-click
var homePage = require("../Pages/Home.page.js");
var inspiredPage = require("../Pages/Inspired.page.js");
var base = require("../Utilities/Base.js")



describe('Marshall Inspired Page Testing Suite', () => {
    beforeAll(function(){
        base.navigateToHomeUrl();
        browser.sleep(3000);
    });

    it('IP 001 - should The Menu Be Displayed  ', () => {
        expect(inspiredPage.Menu.isDisplayed()).toBe(true);
    });

    it('should cancel the alert',()=>{
        inspiredPage.popUpAlert.click();
    })

    it('IP 002 - should Test drop Menu Function and Inspired Page', () => {
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();
    });

    it('IP 003 - should verify if all the Fashion, Home and...Function is Displayed Inspired Page',()=>{
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();
        expect(inspiredPage.AllLinkOnInspierPage.get(0).isDisplayed()).toBe(true);
        expect(inspiredPage.AllLinkOnInspierPage.get(1).isDisplayed()).toBe(true);
        expect(inspiredPage.AllLinkOnInspierPage.get(2).isDisplayed()).toBe(true);
        expect(inspiredPage.AllLinkOnInspierPage.get(3).isDisplayed()).toBe(true);
        expect(inspiredPage.AllLinkOnInspierPage.get(4).isDisplayed()).toBe(true);   
        browser.sleep(3000);  
    });
    
    it('IP 004 - should click on the Menu and click on the Inspired Page from the menu ', () => {
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();

        // inspiredPage.FashionLink.click();   
        // inspiredPage.Homelink.click(); 
        // inspiredPage.LifestyleLink.click();
        // inspiredPage.BeautyLink.click();
        inspiredPage.AllLinkOnInspierPage.get(0).click();
        inspiredPage.AllLinkOnInspierPage.get(1).click();
        inspiredPage.AllLinkOnInspierPage.get(2).click();
        inspiredPage.AllLinkOnInspierPage.get(3).click();
        inspiredPage.AllLinkOnInspierPage.get(4).click();
        browser.sleep(3000);
        
    });

        

    it('IP 005 - Should verify all the link pages in the inspired page CozyReading and...',()=>{
            inspiredPage.Menu.click();
            inspiredPage.inspiredLinkFromTheMenu.click();
            browser.sleep(3000);
            inspiredPage.CozyReadingLonk.click();
            browser.sleep(3000);
            browser.navigate().back();
            browser.sleep(3000);
            inspiredPage.CozyReadingLonk.getText().then(function(text){
                console.log(text);
            });
            
            inspiredPage.FallFashion2018.click();
            browser.sleep(3000);
            browser.navigate().back();
            browser.sleep(3000);
            inspiredPage.FallFashion2018.getText().then(function(text){
                console.log(text);
            });
            inspiredPage.PreppingYourWorkspace.click();
            browser.sleep(3000);
            browser.navigate().back();
            browser.sleep(3000);
            inspiredPage.PreppingYourWorkspace.getText().then(function(text){
                console.log(text);
            });
           
            inspiredPage.EasyBeachBeauty.click();
            browser.sleep(3000);
            browser.navigate().back();
            browser.sleep(3000);
            inspiredPage.EasyBeachBeauty.getText().then(function(text){
                console.log(text);
            });

        //    var EC = protractor.ExpectedConditions;
        //    browser.wait(EC.presenceOf(element(by.linkText('Cozy Reading Nook with Marshalls')).click()),12000);
        //     browser.navigate().back();
        //     browser.wait(EC.presenceOf(element(by.linkText('Fall Fashion 2018')).click()),12000);
        //     browser.navigate().back();
        //     browser.wait(EC.presenceOf(element(by.linkText('Prepping Your Workspace')).click()),12000);
        //     browser.navigate().back();
        //     browser.wait(EC.presenceOf(element(by.linkText('Easy Beach Beauty')).click()),12000);
        //     browser.navigate().back();  
        })
    it('IP 006 - should print all the pages text on the inspier page', () => {
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();
           // browser.refresh();
        inspiredPage.AllPageTextLink.get(0).getText().then(function(text){
            console.log('First Page Link Text: '+text);
        });
        inspiredPage.AllPageTextLink.get(1).getText().then(function(text){
            console.log('Second Page Link Text: '+text);
        });
        inspiredPage.AllPageTextLink.get(2).getText().then(function(text){
            console.log('Third Page Link Text: '+text);
        });
        inspiredPage.AllPageTextLink.get(3).getText().then(function(text){
            console.log('Fourth Page Link Text: '+text);
        });
        inspiredPage.AllPageTextLink.get(4).getText().then(function(text){
            console.log('Fifth Page Link Text: '+text);
        });
        inspiredPage.AllPageTextLink.get(5).getText().then(function(text){
            console.log('Sixth Page Link Text: '+text);
        });
           
    });

    it('IP 007 - should Click on the pages number at the end of inspired page', () => {
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();
        inspiredPage.AllPagesNumber.get(0).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(1).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(2).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(3).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(4).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(5).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(6).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
        inspiredPage.AllPagesNumber.get(7).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollBy(0,1600);');
            
          });         
    it('IP 008 - should Fill The email address and Zip Code and FName on Inspired Page ', () => {
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();  
        inspiredPage.FillEmailAndZipAndfName.get(0).sendKeys('HFGRH@yahoo.com');
        inspiredPage.FillEmailAndZipAndfName.get(1).sendKeys('687686');
        inspiredPage.FillEmailAndZipAndfName.get(2).sendKeys('Mark');
        inspiredPage.submitButtonForSignUp.sendKeys(protractor.Key.ENTER);
        inspiredPage.ArrowTopOfthePage.click();
            //inspiredPage.submitButtonForSignUp.get(1).click();
        inspiredPage.GetInOntheSurpriseText.getText().then(function(text){
            console.log(text);
        })
        browser.sleep(2000);
    });

    it('IP 009 Make sure All images on the inspired page isPresent', () => {
        inspiredPage.AllImagesSize.get(0).isPresent();
        inspiredPage.AllImagesSize.get(1).isPresent();
        inspiredPage.AllImagesSize.get(2).isPresent();
        inspiredPage.AllImagesSize.get(3).isPresent();
        inspiredPage.AllImagesSize.get(4).isPresent();
        inspiredPage.AllImagesSize.get(5).isPresent();    
    });
    it('IP 010 - Hover over to the Main  menu function and get the Color of the Menu',()=>{
        browser.actions().mouseMove($('.btn-menu.icon-menu.dropdown-toggle')).perform();
        $('.btn-menu.icon-menu.dropdown-toggle').getCssValue('color').then(function(color){
            console.log(color);
        });
    });

    it('IP 011 - Hover over to the Main  menu function and get the Color of the icon', function(){
        inspiredPage.Menu.click();
        inspiredPage.inspiredLinkFromTheMenu.click();  
        var xyz = element(by.css(".icon-pin")).getCssValue("color").then(function(color){
        });
        browser.actions().mouseMove(element(by.css(".icon-pin"))).perform();
        expect(xyz).not.toEqual(element(by.css(".icon-pin")).getCssValue("color"));
    });
    
    it('IP 012 - should Hover Over on the head of each name title', () => {
        for(var i=0; i<5; i++){
            browser.actions().mouseMove($$('div.header-banner-container>ul>li img').get(i)).perform();
            inspiredPage.allTheHeaderLogo.get(i).getCssValue('color').then(function(x){
                console.log(x);
            });
            inspiredPage.allTheHeaderLogo.get(i).getAttribute('alt').then(function(x){
                var y=x.split(" ")
                console.log(y[0]);
            });
        }
    });        
});
                  


  
        

