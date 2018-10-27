

    var Base = function () {
    
    this.homeUrl = 'https://www.marshallsonline.com/';
    this.navigateToHomeUrl = () => {
        browser.get(this.homeUrl);
    } 
    this.navigateToAddCustomerPage = () => {
        
    }
    }
         module.exports = new Base()