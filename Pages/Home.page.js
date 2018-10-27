

require ('../Utilities/CustomLocators.js')

var HomePage = function() {

    this.logo=element(by.className('logo'));
    this.popUpWindow = element(by.id('newsletter-form-lightbox'));

    this.socialMedia=$$('.header-banner-container.ng-scope a');
    this.closePopUp=element(by.ngClick('modalInstanceCtrl.close()'));
    this.menuDropdown=$('.main-nav.ng-scope');
    this.menuDropdownClose=$('.btn-menu.icon-menu.dropdown-toggle');

    this.menu=$('.btn-menu.icon-menu.dropdown-toggle');
    this.dropDown=element.all(by.repeater('r in vm.navRoutes'));
    this.signForEmail=element(by.linkText('Sign Up for Email'));

    this.findStoreFinder = element.all(by.ngClick("$parent.open = !$parent.open")).get(0);

    this.menuButton = element(by.css(".btn-menu.icon-menu.dropdown-toggle"));

    this.findStore = element.all(by.linkText('Store Finder'));



}

module.exports = new HomePage();


