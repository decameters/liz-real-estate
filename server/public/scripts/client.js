var app = angular.module('ListingApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/buy.html',
        controller: 'BuyController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});