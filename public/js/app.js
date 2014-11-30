'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/beers', {
      templateUrl: 'expose/beers/list',
      controller: 'BeerListController'
    }).
    when('/beers/create', {
      templateUrl: 'expose/beers/create',
      controller: 'BeerCreateController'
    }).
    when('/beers/:id', {
      templateUrl: 'expose/beers/show',
      controller: 'BeerShowController'
    }).
    when('/beers/:id/edit', {
      templateUrl: 'expose/beers/edit',
      controller: 'BeerEditController'
    }).
    when('/breweries', {
      templateUrl: 'expose/breweries/list',
      controller: 'BreweryListController'
    }).
    when('/breweries/create', {
      templateUrl: 'expose/breweries/create',
      controller: 'BreweryCreateController'
    }).
    when('/breweries/:id', {
      templateUrl: 'expose/breweries/show',
      controller: 'BreweryShowController'
    }).
    when('/breweries/:id/edit', {
      templateUrl: 'expose/breweries/edit',
      controller: 'BreweryEditController'
    }).
    otherwise({
      redirectTo: '/beers'
    });

  $locationProvider.html5Mode(true);
});
