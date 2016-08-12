'use strict';

/* Controllers */

var GlaserControllers = angular.module('GlaserControllers', ['AdlibServices']);

GlaserControllers
.controller('GlaserFullList',['$scope','$http', '$state', 'opacsearch', function($scope, $http, $state, opacsearch){
  $scope.Model = {};
  $scope.uiview = {};
  $scope.uiview.list = false;
  $scope.uiview.grid = true;
  var getPromise = opacsearch.PointerList('archive','7');
  getPromise.then(
    function(res){
      $scope.Model.PointerList = res.data.adlibJSON.recordList.record;
      console.log($scope.Model.PointerList);
    },
    function(err){ console.log('err: ', err); }
  );
  $scope.onList = function(){
    $scope.uiview.list = true;
    $scope.uiview.grid = false;  //console.log('$scope.uiview: ', $scope.uiview);
  };
  $scope.onGrid = function(){
    $scope.uiview.list = false;
    $scope.uiview.grid = true;  //console.log('$scope.uiview: ', $scope.uiview);
  };
}])
.controller('GlaserSingleRecord', ['$scope', '$routeParams', 'opacsearch',
  function($scope, $routeParams, opacsearch) {
    $scope.SingleRecord = opacsearch.get({reference: $routeParams.reference, database: $routeParams.database}, function(opacsearch) {
      //$scope.mainImageUrl = phone.images[0];
    });

    //$scope.setImage = function(imageUrl) {
    //  $scope.mainImageUrl = imageUrl;
    //};
}])
.controller('GlaserNav', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler();
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler() {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left')
          .toggle()
          .then(function () {
            $log.debug("toggle is done");
          });
      }, 200);
    }
    function buildToggler() {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left')
          .toggle()
          .then(function () {
            $log.debug("toggle is done");
          });
      }
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  });
