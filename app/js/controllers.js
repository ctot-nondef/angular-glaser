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
.controller('GlaserNav', ['$scope', '$timeout', '$mdSidenav', '$http', '$log', function ($scope, $timeout, $mdSidenav, $http, $log) {
    $scope.Model = {};
    $scope.toggleLeft = function () {
      if(!$mdSidenav('sidenav').isOpen()) {$('#outersidebar').addClass('open');}
      else {$('#outersidebar').removeClass('open');}
      $mdSidenav('sidenav').toggle();
    };
    var getPromise = $http.get('static/menu.json');
    getPromise.then(
      function(res){
        $scope.Model.Menu = res.data;
        console.log($scope.Model.Menu);
      },
      function(err){ console.log('err: ', err); }
    ); 
}])
