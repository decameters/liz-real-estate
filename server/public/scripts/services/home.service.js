app.service('HomeService', ['$http', function ($http) {
    var self = this;

    self.message = "Welcome :)";

    self.addNewRent = function (newRent) {
        console.log(newRent);

        $http({
            method: 'POST',
            url: '/rent',
            data: newRent
        }).then(function (response) {
            console.log('response', response);
            alert('Success! New listing for rent has been added!');
            self.getRent();
            newRent.city = '';
            newRent.sqft = '';
            newRent.rent = '';
        })
    }

    self.addNewBuy = function (newBuy) {
        console.log(newBuy);

        $http({
            method: 'POST',
            url: '/buy',
            data: newBuy
        }).then(function (response) {
            console.log('response', response);
            alert('Success! New listing for purchase has been added!');
            self.getBuy();
            newBuy.city = '';
            newBuy.sqft = '';
            newBuy.cost = '';
        })
    }

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

    self.deleteRent = function (rentToDelete) {

        $http({
            method: 'DELETE',
            url: '/rent/' + rentToDelete._id,
            data: rentToDelete
        }).then(function (response) {
            console.log('response', response);
            self.getRent();
        });
        // don't put your self.getRent() here
    }


}]);
