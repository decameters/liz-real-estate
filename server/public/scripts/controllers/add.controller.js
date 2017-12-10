app.controller('AddController', ['AddService', function (AddService) {
    var self = this;

    self.message = AddService.message;

    self.addNewRent = AddService.addNewRent;

    self.addNewBuy = AddService.addNewBuy;
}])