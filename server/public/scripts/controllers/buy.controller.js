app.controller('BuyController', ['BuyService', function (BuyService) {
    var self = this;

    self.message = BuyService.message;

    self.buy = BuyService.buy;

}])