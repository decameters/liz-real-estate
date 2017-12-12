app.controller('AddController', ['HomeService', function (HomeService) {
    var self = this;

    self.message = HomeService.message;

    self.addNewRent = HomeService.addNewRent;

    self.addNewBuy = HomeService.addNewBuy;
}])