app.controller('BuyController', ['HomeService', function (HomeService) {
    var self = this;

    self.message = HomeService.message;

    self.buy = HomeService.buy;

    self.deleteBuy = HomeService.deleteBuy;

}])