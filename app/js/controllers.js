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
  opacsearch.updateSize("40");
  opacsearch.RecordsbyPointer('archive','7','1').then(
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
  $scope.Model.total = "counting..."
  opacsearch.getPointerList('archive','7').then(function(res){
    console.log(res);
    $scope.Model.total = res.data.adlibJSON.recordList.record[0]['hits'][0];
  });
  $scope.Model.osData = opacsearch;
  console.log($scope.Model.osData.history);
  //this needs to contain normalization routines, autocompleters, keeping search results persistent within one session, ?
  $scope.simpleSearch = function () {
    $scope.Model.Result = {};
    $scope.Model.Query  = [];
    if ($scope.Model.keyword) {
      $scope.Model.keywords = $scope.Model.keyword.split(" ");
        $scope.Model.keywords.forEach(function(entry){
          $scope.Model.Query.push(JSON.parse('{"s1":"'+entry+'"}'));
        });
        $scope.Model.Query.push(JSON.parse('{"part_of_reference":"*BA-3-27-A*"}'));
      var search = opacsearch.RecordsbyIndex('collect.inf',$scope.Model.Query,"AND", '1');
      opacsearch.updateHistory($scope.Model.keyword, $scope.Model.Query, "1", search);
      $state.go('gl.results', {queryID: "1", pageNo: "1"});
    }
  }
  $scope.advancedSearch = function (argument) {
    // body...
  }
  $scope.clearHistory = function(){
    opacsearch.clearHistory();
  }
}])
.controller('GlaserResultList',['$scope','$http', '$state', '$stateParams', 'opacsearch', function($scope, $http, $state, $stateParams, opacsearch){
  //********* DECLARATIVE PART *********************************************
  $scope.Model = {};
  $scope.uiview = {"menuOpen":false};
  $scope.selected = [];
  $scope.uiview.currentView = Config.currentView;
  $scope.uiview.list = true;
  $scope.uiview.grid = false;
  $scope.Model.Pagesize = opacsearch.pagesize;
  $scope.Model.Page = $stateParams.pageNo;
  //************************************************************************
  // when pageing
  $scope.getPage = function(a,b) {
    if (opacsearch.pagesize != b) {
      opacsearch.updateSize(b);
      $scope.promise = opacsearch.RecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND", $stateParams.pageNo);
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
    $scope.promise = opacsearch.RecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND", $stateParams.pageNo);
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
    $scope.uiview.currentView = 'list';
    Config.currentView = 'list';
  };
  $scope.onGrid = function(){
    $scope.uiview.currentView = 'grid';
    Config.currentView = 'grid';
    };
  $scope.vmToggle = function(){
    console.log($scope.uiview.menuOpen);
    if($scope.uiview.menuOpen) $scope.uiview.menuOpen=false;
    else $scope.uiview.menuOpen=true;
  }
  //********* END OF DECLARATIVE PART **************************************
  //************************************************************************
  // if the url is fucked up, go back to search
  if (!$stateParams.queryID || !$stateParams.pageNo) $state.go('gl.search');
  //************************************************************************
  // if we got the page in question already in the history, take it, otherwise go get it and cache it
  if(opacsearch.history.result[$stateParams.queryID-1] && opacsearch.history.result[$stateParams.queryID-1][$stateParams.pageNo] && opacsearch.history.result[$stateParams.queryID-1][$stateParams.pageNo]['$$state'] && opacsearch.history.result[$stateParams.queryID-1][$stateParams.pageNo]['$$state']['status'] == 1) {
    console.log(opacsearch.history.result[$stateParams.queryID-1]);
    $scope.promise = opacsearch.history.result[$stateParams.queryID-1][$stateParams.pageNo];
  }
  else { 
    $scope.promise = opacsearch.RecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND", $stateParams.pageNo);
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
