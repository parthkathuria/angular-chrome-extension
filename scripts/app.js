var app = angular.module('chromeApp', ['ui.router', 'ngMaterial', 'ngAnimate']);

app.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '800',
            'hue-1': '800',
            'hue-2': '500',
            'hue-3': '300'
        })
        .accentPalette('blue-grey', {
            'default': '900',
            'hue-1': '800',
            'hue-2': '500',
            'hue-3': '300'
        })
        .warnPalette('light-blue', {
            'default': '500',
            'hue-1': '600',
            'hue-2': '400',
            'hue-3': '200'
        })
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })
}]);
