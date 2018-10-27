

require ('../Utilities/CustomLocators.js')

var InspiredPage = function() {

this.logo=element(by.className('logo'));
this.Menu=element(by.className('btn-menu icon-menu dropdown-toggle'));
this.popUpAlert=element(by.ngClick('modalInstanceCtrl.close()'));
////this.inspiredLinkFromTheMenu=element(by.linkText('Get Inspired'));
this.inspiredLinkFromTheMenu=element.all(by.ngClick('$parent.open = !$parent.open')).get(2);
// this.FashionLink=$('.filter .active');
// this.Homelink=element(by.ngClick("inspirationCtrl.filterResults('home', 'marsh008'); setCurrent(1);"));
// this.LifestyleLink=element.all(by.linkText('Lifestyle'));
// this.BeautyLink=element.all(by.linkText('Beauty')); 
// this.AllLink=element.all(by.ngClick("inspirationCtrl.filterResults('', 'marsh006'); setCurrent(1);"));	
this.AllLinkOnInspierPage=$$('.filter li');
this.CozyReadingLonk=element(by.linkText('Cozy Reading Nook with Marshalls'));
this.FallFashion2018=element(by.linkText('Fall Fashion 2018: Trends To Try Now'));
this.PreppingYourWorkspace=element((by.linkText('Prepping Your Workspace for Fall with Marshalls'))) 
this.EasyBeachBeauty=element(by.linkText('Easy Beach Beauty Routine'));
this.AllPageTextLink=$$('p.ng-binding');
this.AllPagesNumber=element.all(by.ngClick('setCurrent(pageNumber)'));
this.FillEmailAndZipAndfName=$$('.form-input input');
this.submitButtonForSignUp=element.all(by.ngClick('newsletterFormCtrl.signupMarshalls()')).get(1);
this.GetInOntheSurpriseText=$('.message-footer h4');
this.ArrowLinkPages=element(by.ngClick('setCurrent(pagination.current + 1)'));
this.ArrowTopOfthePage=element(by.ngClick('shellCtrl.scrollTop()'));
this.AllImagesSize=element.all(by.className('.page-content.ng-scope > section > ul > li'));
// this.MenuMainFunction=$('.btn-menu.icon-menu.dropdown-toggle')
this.allTheHeaderLogo=$$('div.header-banner-container>ul>li img');
}

module.exports = new InspiredPage();