var app = angular.module('ListingApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/buy', {
        templateUrl: '/views/buy.html',
        controller: 'BuyController as vm'
    }).when('/rent', {
        templateUrl: '/views/rent.html',
        controller: 'RentController as vm'
    }).when('/add', {
        templateUrl: '/views/add.html',
        controller: 'AddController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});