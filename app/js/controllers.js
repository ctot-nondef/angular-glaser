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
  opacsearch.RecordsbyPointer('archive','7','40','1').then(
    function(res){
      console.log(res);
      $scope.Model.PointerList = res.data.adlibJSON.recordList.record;
      console.log($scope.Model.PointerList);
    },
    function(err){ console.log('err: ', err); }
  );
}])
.controller('GlaserSearch',['$scope','$http', '$state', 'opacsearch', function($scope, $http, $state, opacsearch){
  $scope.Model = {};
  $scope.Model.previousSearches = opacsearch.history.querystring;
  //this needs to contain normalization routines, autocompleters, keeping search results persistent within one session, ?
  $scope.simpleSearch = function () {
    $scope.Model.Result = {};
    $scope.Model.Query  = [];
    if ($scope.Model.keyword) {
      $scope.Model.keywords = $scope.Model.keyword.split(" ");
      for (var key in ssFields) {
        $scope.Model.keywords.forEach(function(entry){
          $scope.Model.Query.push(JSON.parse('{"'+ssFields[key]+'":"'+entry+'"}'));
        });
      }
      var search = opacsearch.RecordsbyIndex('archive',$scope.Model.Query,"OR", '1');
      opacsearch.updateHistory($scope.Model.keyword, $scope.Model.Query, "1", search);
      $state.go('gl.results', {queryID: opacsearch.history.result.length, pageNo: "1"});
    }
  }
  $scope.advancedSearch = function (argument) {
    // body...
  }
}])
.controller('GlaserResultList',['$scope','$http', '$state', '$stateParams', 'opacsearch', function($scope, $http, $state, $stateParams, opacsearch){
  //********* DECLARATIVE PART *********************************************
  $scope.Model = {};
  $scope.uiview = {};
  $scope.selected = [];
  $scope.uiview.list = true;
  $scope.uiview.grid = false;
  $scope.Model.Pagesize = opacsearch.pagesize;
  $scope.Model.Page = $stateParams.pageNo;
  //************************************************************************
  // when pageing
  $scope.getPage = function(a,b) {
    if (opacsearch.pagesize != b) {
      opacsearch.updateSize(b);
      $scope.promise = opacsearch.RecordsbyIndex('archive', opacsearch.history.query[$stateParams.queryID-1],"OR", $stateParams.pageNo);
      opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
      $scope.promise.then($scope.update);
    }
    else $state.go('gl.results', {queryID: $stateParams.queryID, pageNo: a});
  };
  //************************************************************************
  // when sorting 
  $scope.getNewOrder = function(a) {
    if(a.slice(0,1) == "-") opacsearch.updateSorting('descending',a.slice(1));
    else if(a.slice(0,1) != "-") opacsearch.updateSorting('ascending',a);
    $scope.promise = opacsearch.RecordsbyIndex('archive', opacsearch.history.query[$stateParams.queryID-1],"OR", $stateParams.pageNo);
    opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
    $scope.promise.then($scope.update);
  };
  //************************************************************************
  // generic page update 
  $scope.update = function(res) {
    $scope.Model.Total = res.data.adlibJSON.diagnostic.hits;
    $scope.Model.Page = $stateParams.pageNo;
    $scope.Model.Pagesize = opacsearch.pagesize;
    $scope.Model.Result = res.data.adlibJSON.recordList.record;
    console.log($scope.Model.Result);
  };
  //************************************************************************
  // UI-switching
  $scope.onList = function(){
    $scope.uiview.list = true;
    $scope.uiview.grid = false;
  };
  $scope.onGrid = function(){
    $scope.uiview.list = false;
    $scope.uiview.grid = true;
  };
  //********* END OF DECLARATIVE PART **************************************
  //************************************************************************
  // if the url is fucked up, go back to search
  if (!$stateParams.queryID || !$stateParams.pageNo) $state.go('gl.search');
  //************************************************************************
  // if we got the page in question already in the history, take it, otherwise go get it and cache it
  if(opacsearch.history.result[$stateParams.queryID-1] && opacsearch.history.result[$stateParams.queryID-1][$stateParams.pageNo]) { 
    $scope.promise = opacsearch.history.result[$stateParams.queryID-1][$stateParams.pageNo];
  }
  else { 
    $scope.promise = opacsearch.RecordsbyIndex('archive', opacsearch.history.query[$stateParams.queryID-1],"OR", $stateParams.pageNo);
    opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
  }
  $scope.promise.then($scope.update);
}])
.controller('GlaserSingleRecord', ['$scope', '$stateParams', 'opacsearch', function($scope, $stateParams, opacsearch) {
  $scope.Model = {};
  if($stateParams.refID) {
    opacsearch.SingleRecordbyRef("archive", $stateParams.refID).then(function(res){
      //splitting these by line, should be delivered by API this way in the next version
      if(res.data.adlibJSON.recordList.record[0]['inscription.translation']) {
        res.data.adlibJSON.recordList.record[0]['inscription.translation'] = res.data.adlibJSON.recordList.record[0]['inscription.translation'][0].split(/\d\./);
        res.data.adlibJSON.recordList.record[0]['inscription.transliteration'] = res.data.adlibJSON.recordList.record[0]['inscription.transliteration'][0].split(/\d\./);
        if(res.data.adlibJSON.recordList.record[0]['inscription.transliteration'].length > 1) {
          res.data.adlibJSON.recordList.record[0]['inscription.transliteration'].shift();
          res.data.adlibJSON.recordList.record[0]['inscription.translation'].shift();
        }
      }
      $scope.Model.SingleRecord = res.data.adlibJSON.recordList.record[0];
      console.log($scope.Model.SingleRecord);
    });
  }
}])
.controller('GlaserNav', ['$scope', '$timeout', '$mdSidenav', '$http', '$log', function ($scope, $timeout, $mdSidenav, $http, $log) {
    $scope.Model = {};
    $http.get('static/menu.json').then(
      function(res){
        $scope.Model.Menu = res.data;
      },
      function(err){ console.log('err: ', err); }
    ); 
    $scope.toggleLeft = function () {
      if(!$mdSidenav('sidenav').isOpen()) {$('#sidebar').addClass('open');}
      else {$('#sidebar').removeClass('open');}
      $mdSidenav('sidenav').toggle();
    };
}])
.controller('GlaserImage', ['$scope', '$timeout', '$stateParams', '$http', '$log', function ($scope, $timeout, $stateParams, $http, $log) {
    $scope.Model = {};
    $scope.Model.imgID = $stateParams.imgID;
}])
.controller('GlaserScan', ['$scope', '$timeout', '$stateParams', '$http', '$log', function ($scope, $timeout, $stateParams, $http, $log) {
    $scope.Model = {};
    $scope.Model.scanID = $stateParams.scanID;
    var presenter = null;
    init3dhop();
    setup3dhop($scope.Model.scanID);
    resizeCanvas(window.innerWidth-100, window.innerHeight-4);
}])
