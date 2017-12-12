app.service('BuyService', ['$http', function ($http) {
    var self = this;

    self.message = "BUY BUY BUY";

    self.buy = { list: [] };

    self.getBuy = function () {
        console.log('in getBuy');

        $http({
            method: 'GET',
            url: '/buy'
        }).then(function (response) {
            console.log('response', response);
            self.buy.list = response.data;
        })
    }

    self.getBuy();

    self.deleteBuy = function (buyToDelete) {

        $http({
            method: 'DELETE',
            url: '/buy/' + buyToDelete._id,
            data: buyToDelete
        }).then(function (response) {
            console.log('response', response);
            self.getBuy();
        });
    // don't put your self.getBuy() here
    }

}]);
