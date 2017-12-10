app.service('AddService', ['$http', function ($http) {
    var self = this;

    self.message = "ADD ADD ADD";


    self.addNewRent = function (newRent) {
        console.log(newRent);
    
        $http({
            method: 'POST',
            url: '/rent',
            data: newRent
        }).then(function (response) {
            console.log('response', response);
            alert('Success! New listing for rent has been added!');            
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
            newBuy.city = '';
            newBuy.sqft = '';
            newBuy.cost = '';
        })
    }

}]);



