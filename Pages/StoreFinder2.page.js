
require ('../Utilities/CustomLocators.js')

var StoreFinder = function() {
// Part 1 - Ahmed
     //social media logos top right
     this.facbookIcon = element.all(by.ngClick('socialCtrl.share.facebook($event)'));
     this.instagaramIcon = $$('li.ng-scope a.icon-instagram');
     this.twitterIcon = element.all(by.ngClick('socialCtrl.share.twitter($event)'));
     this.pinterestIcon = $$('li.ng-scope a.icon-pinterest').first();

    //twin stores logo top left
    this.tjMaxLogo = $('div.header-banner-container ul li:nth-child(1) a img');
    this.tjMaxShop = $('div.header-banner-container ul li:nth-child(1) a div');
    this.sierraLogo = $('div.header-banner-container ul :nth-child(2) a img');
    this.sierraShop = $('div.header-banner-container ul :nth-child(2) a div');
    this.marshallsLogo = $('div.header-banner-container ul :nth-child(3) a img');
    this.marshallsFindStore = $('div.header-banner-container ul :nth-child(3) a div');
    this.homeGoodsLogo = $('div.header-banner-container ul :nth-child(4) a img');
    this.homeGoodsFindStore = $('div.header-banner-container ul :nth-child(4) a div');
    this.homeSenseLogo = $('div.header-banner-container ul :nth-child(5) a img');
    this.homeSenseFindStore = $('div.header-banner-container ul :nth-child(5) a div');
   
   
    // store Finder header

    this.pinLocator = $('.shell-wrapper.ng-scope > div > header > div > a');
    this.findAStoreTextPin = $('.shell-wrapper.ng-scope > div > header > div > h3 > a');
    this.nearBy = $('.shell-wrapper.ng-scope div header div div h4 a'); //should also check the dropdown menu is clickable (it is already clickable with beforeAll function)
    this.changeLocationText = $$('.shell-wrapper.ng-scope div header div div div h5').first(); //must click on near by dropdown button first
    this.yourNextSurpriseText = $('#store-search-form-store-finder label');
    this.zipInputBox2 = $$('#SearchLocation').first() 
    this.searchLocationButton = $('#store-search-form-header button');
    this.browseByState2 = $('#store-search-form-header div:nth-child(5) a:nth-child(1)');
    this.enEspanol2 = $('#store-search-form-header div:nth-child(5) a:nth-child(2)');


    //the Near By location finder dropdown menu
    //1. bailey Crossraods Store
    this.nearbyBC = $('.shell-wrapper.ng-scope > div > header > div > div > div > ul > li:nth-child(1) > h5 > a');
    this.bcAddress = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) div.address.ng-binding');
    this.bcPhoneNumber = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) div.phone a');
    this.bcDistance = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) div.distance.ng-binding');
    this.bcShowMore = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) button');
    this.bcShedule = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) div.hours.ng-binding');
    this.bcGetDirections = $$('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) a').get(1);
    this.bcDeliveryService = $$('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) ul li').first();
    this.bcShowLess = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(1) button');

    //2. Arlingtone Store
    this.nearbyAr = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) h5 a');
    this.arAddress = $('.shell-wrapper.ng-scope div header div  div div ul li:nth-child(2) div.address.ng-binding');
    this.arPhoneNumber = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) div.phone a');
    this.arDistance = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) div.distance.ng-binding');
    this.arShowMore = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) button');
    this.arShedule = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) div.hours.ng-binding');
    this.arGetDirections = $$('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) a').first();                                        
    this.arDeliveryService = $$('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) ul li').first();
    this.arShowLess = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(2) button');

    //3. Washington DC Store
    this.nearbyDc = $('.shell-wrapper.ng-scope div header  div div div ul li:nth-child(3) h5 a');
    
    this.wdcAddress = $('.shell-wrapper.ng-scope div header div  div div ul li:nth-child(3) div.address.ng-binding');
    this.wdcPhoneNumber = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) div.phone a');
    this.wdcDistance = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) div.distance.ng-binding');
    this.wdcShowMore = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) button');
    this.wdcShedule = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) div.hours.ng-binding');
    this.wdcGetDirections = $$('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) a').first();
    this.wdcDeliveryService = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) ul li');
    this.wdcShowLess = $('.shell-wrapper.ng-scope div header div div div ul li:nth-child(3) button');
    
    this.closeDropdownNearBy = element(by.ngClick('storeLocCtrl.toggleDropdown($event)'));

    //....end of dropdown Near By locators

    
    this.marshallTitle = $('.logo.ng-scope'); //should test it is also clickable (it is already tested with main page)
    
    
    //Second Banner Menu

    this.menu = $('.btn-menu.icon-menu.dropdown-toggle');
    this.storeFinderText = $('.shell-wrapper.ng-scope div header nav div div ul li.ng-scope.current a');
    this.marshallsSurprise = $$('.shell-wrapper.ng-scope div header nav div div ul li:nth-child(2) a').first();
    this.getInspired = $$('.shell-wrapper.ng-scope div header nav div div ul li:nth-child(3) a').first();
    this.giftCards = $('.shell-wrapper.ng-scope div header nav div div ul li:nth-child(4) a');
    this.tjxRewardsCreditCard = $('.shell-wrapper.ng-scope div header nav div div ul li:nth-child(5) a');
    this.signUpforEmail = $('.shell-wrapper.ng-scope div header nav div div ul li:nth-child(6) a');
    this.closeMenu = $('.shell-wrapper.ng-scope div header nav div div button');
                      

    //...end of second header

    // begining of third header
    this.locationSearchResultText = $$('.shell-wrapper.ng-scope div div.layout-wrapper.ng-scope div section.container.store-list-container section').first();
    //...end of third header


    //begining of fourth header ABOUT US
   
    this.aboutUsText = $('.shell-wrapper.ng-scope div footer nav div div.about-us h5');
    this.storeFinder3 = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(1) a');
    this.customerService = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(2) a');
    this.howWeDoIt = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(3) a');
    this.comparisonPricing = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(4) a');
    this.productInfoRecalls = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(5) a');
    this.returnPolicy = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(6) a');
    this.grandOpenings = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(7) a');
    this.socialResponsibility = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(8) a');
    this.enEspanol2 = $('.shell-wrapper.ng-scope div footer nav div div.about-us ul li:nth-child(9) a');

    //...end of about us list

    //Begining of OUR CARDS
    this.ourCards = $('body div.shell-wrapper.ng-scope div footer nav div div.our-cards h5');
    this.tjxRewardsCreditCard = $('.shell-wrapper.ng-scope div footer nav div div.our-cards ul li:nth-child(1) a');
    this.giftCards = $('.shell-wrapper.ng-scope div footer nav div div.our-cards ul li:nth-child(2) a');

    //...end of OUR CARDS


    //Begining of TJX COMPANIES, INC.
    this.tjxCOompaniesInc = $('.shell-wrapper.ng-scope div footer nav div div:nth-child(3) h5');
    this.tjxHome = $('.shell-wrapper.ng-scope div footer nav div div:nth-child(3) ul li:nth-child(1) a');
    this.careers = $('.shell-wrapper.ng-scope div footer nav div div:nth-child(3) ul li:nth-child(2) a');
    this.marshallsCanada = $('.shell-wrapper.ng-scope div footer nav div div:nth-child(3) ul li:nth-child(3) a');
    this.tjxCorporateResponsibility = $('.shell-wrapper.ng-scope div footer nav div div:nth-child(3) ul li:nth-child(4) a');
           


    // this.yourNextSurpriseText = 
    this.enterLocationText = $$('#SearchLocation').last(); //#store-search-form-header (parent's id)
    //xpath //*[@id="SearchLocation"]
    // this.enterLocationText = element.all(by.xpath('//*[@id="SearchLocation"]')).last();
    this.topArrow = $('#top');

    //begining bottom banner
    this.home = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(1) a');
    this.emailUnsubscribe = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(2) a');
    this.sitemap = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(3) a');
    this.privacy = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(4) a');
    this.caPrivacy = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(5) a');
    this.caSupplyChain = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(6) a');
    this.termsOfUse = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li:nth-child(7)');
    this.marshalls18 = $('.shell-wrapper.ng-scope div footer div.legal.mobile-hide.ng-scope ul li.copyright.mobile-copyright-hide');
                         


}
module.exports = new StoreFinder();