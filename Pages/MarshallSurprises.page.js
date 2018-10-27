


require ('../Utilities/CustomLocators.js')

var SurprisesPage = function() {
    this.h1MainHeading=$('h1.title');
    this.textHeading=$('div.copy')
    this.linkHeading=element(by.linkText('Wanna Have Your Photo Featured? >'));
    this.popUpWindow=element(by.className('scroller'));
    this.popUpImages=$$('div.scroller img');
    this.popUpDiscriptions=$$('div.scroller p');
    this.popUpHeader = element(by.css('div.scroller>h1'));
    this.popUpClose=$('div.icon-close');
    this.disclaimer = element(by.className('disclaimer'));
    this.disclaimerLink = element(by.linkText('See our Photo Share Terms of Use'));
    this.adLinks=$$('#stream-filter a');
    this.images=$$('#social-hub-content-wrapper img');
    this.allImages=$$('div.media');
    this.loadMore=$('span.button-text');
    this.largeImages=$$('div.grid-cell');
    this.scrollUpTop=element(by.id('top'));
    this.closePopUpImage=$$('i.icon-close-x');
    this.instagramText=$('div.grid-cell.active div.text');
    this.imageInstallDate=$$('section#social-hub-content-wrapper .timestamp');
    this.imageSpecific=$$('#social-hub-content>div.grid-cell');
    this.instagramAccountText=$('#react-root > section > main > div > div > article > div.eo2As > div.KlCQn.EtaWk > ul > li:nth-child(1) > div > div > div')
}

module.exports = new SurprisesPage();