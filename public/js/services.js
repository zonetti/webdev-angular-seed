(function() {
  'use strict';

  angular.module('myApp.services', []).
    value('version', '0.1').
    service('BeerService', BeerService).
    service('BreweryService', BreweryService);

  BeerService.$inject = ['$http'];
  function BeerService($http) {
    var rootUrl = '/api/beers/';
    this.list = function() {
      return $http({
        method: 'GET',
        url: rootUrl
      });
    };
    this.show = function(id) {
      return $http({
        method: 'GET',
        url: rootUrl + id
      });
    };
    this.create = function(beer) {
      return $http({
        method: "POST",
        url: rootUrl,
        data: beer
      });
    };
    this.delete = function(beer) {
      return $http({
        method: 'DELETE',
        url: rootUrl + beer._id
      });
    };
    this.save = function(beer) {
      return $http({
        method: "PUT",
        data: beer
      });
    };
  };

  BreweryService.$inject = ['$http'];
  function BreweryService($http) {
    var rootUrl = '/api/breweries/';
    this.list = function() {
      return $http({
        method: 'GET',
        url: rootUrl
      });
    };
    this.show = function(id) {
      return $http({
        method: 'GET',
        url: rootUrl + id
      });
    };
    this.create = function(brewery) {
      return $http({
        method: "POST",
        url: rootUrl,
        data: brewery
      });
    };
    this.delete = function(brewery) {
      return $http({
        method: 'DELETE',
        url: rootUrl + brewery._id
      });
    };
    this.save = function(brewery) {
      return $http({
        method: "PUT",
        data: brewery
      });
    };
  };

})();
