'use strict';

var app = angular.module('app', [
    'ngRoute',
    'controllers',
    'services'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.tpl.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
