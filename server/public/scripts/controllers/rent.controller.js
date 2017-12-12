app.controller('RentController', ['HomeService', function (HomeService) {
    var self = this;

    self.message = HomeService.message;

    self.rent = HomeService.rent;

    self.deleteRent = HomeService.deleteRent;

}])