(function() {
  'use strict';

  /* Controllers */
  angular.module('myApp.controllers', []).

    controller('AppCtrl', function ($scope, $http) {
      $http({
        method: 'GET',
        url: '/api/name'
      }).
      success(function (data, status, headers, config) {
        $scope.name = data.name;
      }).
      error(function (data, status, headers, config) {
        $scope.name = 'Error!';
      });
    })

    .controller('BeerListController', function ($scope, $http, BeerService) {
      BeerService
      .list()
      .success(function(data) {
        console.log('sucess!!!: ', data);
        $scope.beers = data;
      })
      .error(function(err) {
        console.log('error: ', err);
      });

      $scope.delete = function(beer) {
        if (confirm("Vai deletar?")) {
          BeerService.delete(beer)
          .success(function(beer) {
            var index = $scope.beers.indexOf(beer);
            $scope.beers.splice(index, 1);
          })
          .error(function(err) {
            console.log(err);
          })   
        }
      }
    })
    
    .controller('BeerShowController', function ($scope, $http, $routeParams, BeerService) {
      var id = $routeParams.id;
      
      BeerService.show(id)
      .success(function(data) {
        console.log('sucess: ', data);
        $scope.beer = data;
      })
      .error(function(err) {
        console.log('error: ', err);
      });
    })
    
    .controller('BeerCreateController', function ($scope, $http, BeerService) {
      var url = "/api/beers"
      $scope.msg = "";
      
      $scope.create = function(beer) {
        BeerService
        .create(beer)
        .success(function(data) {
          console.log('sucess: ', data);
          $scope.msg = "Cerveja " + beer.name + " cadastrada com sucesso";
        })
        .error(function(err) {
          console.log(err);
        })
      }
    })
    
    .controller('BeerEditController', function ($scope, $http, $routeParams, BeerService) {
      var id = $routeParams.id;

      BeerService
      .show(id)
      .success(function(data) {
        console.log('sucess: ', data);
        $scope.beer = data;
      })
      .error(function(err) {
        console.log('error: ', err);
      });

      $scope.save = function(beer) {
        BeerService
        .save(beer)
        .success(function(data) {
          console.log('sucess: ', data);
          $scope.msg = "Cerveja " + beer.name + " alterada com sucesso";
        })
        .error(function(err) {
          console.log(err);
        })
      }
    })
    .controller('BreweryListController', function ($scope, $http, BreweryService) {
      BreweryService
      .list()
      .success(function(data) {
        console.log('sucess!!!: ', data);
        $scope.breweries = data;
      })
      .error(function(err) {
        console.log('error: ', err);
      });

      $scope.delete = function(brewery) {
        if (confirm("Vai deletar?")) {
          BreweryService.delete(brewery)
          .success(function(brewery) {
            var index = $scope.breweries.indexOf(brewery);
            $scope.breweries.splice(index, 1);
          })
          .error(function(err) {
            console.log(err);
          })   
        }
      }
    })
    
    .controller('BreweryShowController', function ($scope, $http, $routeParams, BreweryService) {
      var id = $routeParams.id;
      
      BreweryService.show(id)
      .success(function(data) {
        console.log('sucess: ', data);
        $scope.brewery = data;
      })
      .error(function(err) {
        console.log('error: ', err);
      });
    })
    
    .controller('BreweryCreateController', function ($scope, $http, BreweryService) {
      var url = "/api/breweries"
      $scope.msg = "";
      
      $scope.create = function(brewery) {
        BreweryService
        .create(brewery)
        .success(function(data) {
          console.log('sucess: ', data);
          $scope.msg = "Cervejaria " + brewery.name + " cadastrada com sucesso";
        })
        .error(function(err) {
          console.log(err);
        })
      }
    })
    
    .controller('BreweryEditController', function ($scope, $http, $routeParams, BreweryService) {
      var id = $routeParams.id;

      BreweryService
      .show(id)
      .success(function(data) {
        console.log('sucess: ', data);
        $scope.brewery = data;
      })
      .error(function(err) {
        console.log('error: ', err);
      });

      $scope.save = function(brewery) {
        BreweryService
        .save(brewery)
        .success(function(data) {
          console.log('sucess: ', data);
          $scope.msg = "Cervejaria " + brewery.name + " alterada com sucesso";
        })
        .error(function(err) {
          console.log(err);
        })
      }
    });
})();