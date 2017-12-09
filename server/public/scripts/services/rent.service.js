app.service('RentService', ['$http', function ($http) {
    var self = this;

    self.message = "RENT RENT RENT";

    self.rent = { list: [] };

    self.getRent = function () {
        console.log('in getRent');
        
                $http({
                    method: 'GET',
                    url: '/rent'
                }).then(function (response) {
                    console.log('response', response);
                    self.rent.list = response.data;
                })
            }

    self.getRent();

}]);
