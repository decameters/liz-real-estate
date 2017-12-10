app.controller('RentController', ['RentService', function (RentService) {
    var self = this;

    self.message = RentService.message;

    self.rent = RentService.rent;

    self.deleteRent = RentService.deleteRent;

}])