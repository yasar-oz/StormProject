


require ('../Utilities/CustomLocators.js')

var StoreFinder = function() {
     
  this.footerMessage1 = element(by.css(".message-footer>h4"));
  this.footerMessage2 = element(by.css(".message-footer>p"));
  this.emailInputBox = element(by.css("[name=email]"));
  this.zipCodeInputBox = element(by.css("[name=zip]"));
  this.firstNameInputBox = element(by.css("[name=firstname]"));
  this.signUpButton = element(by.buttonText("Sign Up"));
  this.privacyPolicyLink = element(by.linkText("Privacy Policy"));
  this.aboutUsText = element(by.css(".about-us>h5"));
  this.storeFinderLink = element(by.linkText("Store Finder"));
  this.customerServiceLink = element(by.linkText("Customer Service"));
  this.howWeDoItLink = element(by.linkText("How We Do It"));
  this.comparisonPricingLink = element(by.linkText("Comparison Pricing"));
  this.productInfoLink = element(by.linkText("Product Info/Recalls"));
  this.returnPolicyLink = element(by.linkText("Return Policy"));
  this.grandOpeningsLink = element(by.linkText("Grand Openings"));
  this.socialResponsibilityLink = element(by.linkText("Social Responsibility"));
  this.enEspañolLink = element(by.linkText("En Español"));
  this.ourCardsText = element(by.css(".our-cards>h5"));
  this.TJXRewardsLink = element.all(by.css("div.our-cards a")).first();
  this.giftCardsLink = element(by.linkText("Gift Cards"));
  this.TJXCompaniesText = element(by.ngClick("showTjxLinks = ! showTjxLinks"));
  this.TJXHomeLink = element(by.linkText("TJX Home"));
  this.careersLink = element(by.linkText("Careers"));
  this.marshallsCanadaLink = element(by.linkText("Marshalls Canada"));
  this.TJXCorporateResponsibilityLink = element(by.linkText("TJX Corporate Responsibility"));
  this.emailInputBoxErrorMessage = element.all(by.css(".error-message.ng-binding")).first();
  this.zipCodeInputBoxErrorMessage = element.all(by.css(".error-message.ng-binding")).get(1);
  this.privacyPolicyLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.customerServiceLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.howWeDoItLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.comparisonPricingLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.productInfoLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.returnPolicyLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.grandOpeningsLinkTextAfterClicking = element(by.css("div.store-finder-form h1"));
  this.socialResponsibilityLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.enEspañolLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.TJXRewardsLinkTextAfterClicking = element(by.css("a.btn.btn-primary.btn-large.margin-bottom-large"));
  this.giftCardsLinkTextAfterClicking = element(by.css("div.hero-copy-container.overlay h1"));
  this.TJXHomeLinkAfterClicking = element(by.css("img.header__logo"));
  this.careersLinkAfterClicking = element(by.css("img.header__logo"));
  this.marshallsCanadaLinkAfterClicking = element(by.css("div.cover--transclude h1"));
  this.TJXCorporateResponsibilityLinkAfterClicking = element(by.css("img.header__logo"));
  this.storeFinderText = element(by.css(".shell-wrapper.ng-scope > div > div.layout-wrapper.ng-scope > div > section.hero-image-container > div > h1"));
  this.yourNextSurpriseText = element(by.css("#store-search-form-store-finder > label"));
  this.goNowButton = element(by.css("#store-search-form-store-finder>button"));
  this.searchLocationInputBox = element.all(by.id("SearchLocation")).last();
  this.browseByStateLink = element.all(by.css("#StoreSearch>form>div a")).first();
  this.enEspañolLink = element.all(by.css(".browse-state")).last();
  // this.enEspañolLink = $('#store-search-form-store-finder-es > a');
  this.imageContainer = element(by.css(".hero-image-container"));

 


}; 

module.exports = new StoreFinder();



