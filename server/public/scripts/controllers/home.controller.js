app.controller('HomeController', ['HomeService', function (HomeService) {
    var self = this;

    self.message = HomeService.message;

}])