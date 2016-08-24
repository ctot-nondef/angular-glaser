'use strict';

var ssFields = {
  "Object Number":"object_number",
  "Translation Text":"inscription.translation",
  "Language":"inscription.language",
  "Archeological Site":"production.place"
}


/* Controllers */

var GlaserControllers = angular.module('GlaserControllers', ['AdlibServices']);

GlaserControllers
.controller('GlaserStartList',['$scope','$http', '$state', 'opacsearch', function($scope, $http, $state, opacsearch){
  $scope.Model = {};
  $scope.uiview = {};
  $scope.uiview.list = false;
  $scope.uiview.grid = true;
  var getPromise = opacsearch.RecordsbyPointer('archive','7','40','1');
  getPromise.then(
    function(res){
      console.log(res);
      $scope.Model.PointerList = res.data.adlibJSON.recordList.record;
      console.log($scope.Model.PointerList);
    },
    function(err){ console.log('err: ', err); }
  );
  $scope.onList = function(){
    $scope.uiview.list = true;
    $scope.uiview.grid = false;
  };
  $scope.onGrid = function(){
    $scope.uiview.list = false;
    $scope.uiview.grid = true;
  };
}])
.controller('GlaserSearch',['$scope','$http', '$state', 'opacsearch', 'searchhistory', function($scope, $http, $state, opacsearch, searchhistory){
  $scope.Model = {};
  //this needs to contain normalization routines, autocompleters, keeping search results persistent within one session, ?
  $scope.simpleSearch = function () {
    $scope.Model.Result = {};
    $scope.Model.Query  = [];
    if ($scope.Model.keyword) {
      $scope.Model.keywords = $scope.Model.keyword.split(" ");
      for (var key in ssFields) {
        $scope.Model.keywords.forEach(function(entry){
          //console.log(ssFields[key],entry);
          $scope.Model.Query.push(JSON.parse('{"'+ssFields[key]+'":"'+entry+'"}'));
        });
      }
      var getPromise = opacsearch.RecordsbyIndex('archive',$scope.Model.Query,"OR",'40','1');
      getPromise.then(function(res){
          searchhistory.add($scope.Model.Query, res);
          $state.go('gl.results');
        },
        function(err){ console.log('err: ', err); }
      );
    }
  }
  $scope.advancedSearch = function (argument) {
    // body...
  }
}])
.controller('GlaserResultList',['$scope','$http', '$state', 'searchhistory', function($scope, $http, $state, searchhistory){
  $scope.Model = {};
  $scope.uiview = {};
  $scope.uiview.list = false;
  $scope.uiview.grid = true;
  if(searchhistory.history.result[searchhistory.history.result.length-1].data.adlibJSON.recordList) $scope.Model.Result = searchhistory.history.result[searchhistory.history.result.length-1].data.adlibJSON.recordList.record;
  console.log($scope.Model.Result);
  $scope.onList = function(){
    $scope.uiview.list = true;
    $scope.uiview.grid = false;
  };
  $scope.onGrid = function(){
    $scope.uiview.list = false;
    $scope.uiview.grid = true;
  };
}])
.controller('GlaserSingleRecord', ['$scope', '$stateParams', 'opacsearch', function($scope, $stateParams, opacsearch) {
  $scope.Model = {};
  if($stateParams.refID) {
    var getPromise = opacsearch.SingleRecordbyRef("archive", $stateParams.refID);
    getPromise.then(function(res){
      $scope.Model.SingleRecord = res.data.adlibJSON.recordList.record[0];
      console.log($scope.Model.SingleRecord);
    });
  }
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
        //console.log($scope.Model.Menu);
      },
      function(err){ console.log('err: ', err); }
    ); 
}])
