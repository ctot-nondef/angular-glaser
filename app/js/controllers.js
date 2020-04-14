'use strict';

var ssFields = {
  "Object Number":"object_number",
  "Translation Text":"inscription.translation",
  "Language":"inscription.language",
  "Archeological Site":"production.place"
}

/* Controllers */

GlaserApp
.controller('GlaserStartList',['$scope','$http', '$state', 'opacsearch','$rootScope', function($scope, $http, $state, opacsearch, $rootScope){
  $scope.Model = {};
  $rootScope.loading.progress = true;
  opacsearch.updateSize("40");
  opacsearch.getRecordsbyPointer('archive','1',[] ,'1','40').then(
    (res) => {
      var tiles = res.data.adlibJSON.recordList.record;
      $http.get('static/starttiles.json').then((ntiles) => {
        for (var tile in ntiles.data) {
          console.log(ntiles.data[tile]);
          tiles[ntiles.data[tile].position] = ntiles.data[tile];
        }
        $scope.Model.PointerList = tiles;
        $rootScope.loading.progress = false;
      })
    },
    function(err){ console.log('err: ', err); }
  );
}])
.controller('GlaserSearch',['$scope','$http', '$state', 'opacsearch', function($scope, $http, $state, opacsearch){
  $scope.Model = {
    searchscope: null,
    total: 1,
    totalGeo: 0,
    geo: 0
  };
  opacsearch.getPointerList('archive','2').then(function(res){
    $scope.Model.total = parseInt(res.data.adlibJSON.recordList.record[0]['hits'][0], 10);
    $scope.Model.geo =  Math.round( $scope.Model.totalGeo / $scope.Model.total * 100);
  });
  opacsearch.getPointerList('archive','4').then(function(res){
    $scope.Model.totalA = parseInt(res.data.adlibJSON.recordList.record[0]['hits'][0], 10);
  });
  opacsearch.getPointerList('archive','3').then(function(res){
    $scope.Model.totalP = parseInt(res.data.adlibJSON.recordList.record[0]['hits'][0], 10);
  });
  opacsearch.getPointerList('archive','5').then(function(res){
    $scope.Model.totalT = parseInt(res.data.adlibJSON.recordList.record[0]['hits'][0], 10);
  });
  opacsearch.getPointerList('archive','6').then(function(res){
    $scope.Model.totalGeo = parseInt(res.data.adlibJSON.recordList.record[0]['hits'][0], 10);
    $scope.Model.geo =  Math.round($scope.Model.totalGeo / $scope.Model.total * 100);
    console.log($scope.Model.totalGeo, $scope.Model.total, $scope.Model.geo);
  });
  $scope.Model.osData = opacsearch;
  //this needs to contain normalization routines, autocompleters....
  //current setup: parsing querying composite index s1 for all terms entered
  $scope.simpleSearch = function (keyword, scope) {
    $scope.Model.Result = {};
    $scope.Model.Query  = [];
    if(keyword) $scope.Model.keyword = keyword;
    if(scope) $scope.Model.searchscope = scope;
    if ($scope.Model.keyword) {
      $scope.Model.keywords = $scope.Model.keyword.split(" ");
      $scope.Model.keywords.forEach(function(entry){
        $scope.Model.Query.push(JSON.parse('{"s1":"'+entry+'*"}'));
      });
    }
    $scope.Model.Query.push({"s1": $scope.Model.searchscope ? $scope.Model.searchscope : "AT-OeAW-BA-3-27*"});
    opacsearch.updateHistory($scope.Model.keyword, $scope.Model.Query, undefined, undefined);
    $state.go('gl.results', {queryID: "1", pageNo: "1"});
  };
  $scope.KWICSearch = function () {
    $state.go('gl.kwicresults', {querystring: $scope.Model.kwickeyword});
  };
  $scope.searchEnter = function($event){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
        $scope.simpleSearch();
    }
  };
  $scope.KWICsearchEnter = function($event){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13) {
      $scope.KWICSearch();
    }
  };
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
        $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND",undefined,[],$stateParams.pageNo);
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
      $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND",undefined,[],$stateParams.pageNo);
      opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
      $scope.promise.then($scope.update);
    };
    //************************************************************************
    // generic page update
    $scope.update = function(res) {
      console.log(res);
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
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND",undefined,['priref','production.place','production.place.lref','production.place.context','production.place.uri','inscription.language', 'title', 'reproduction.reference','object_number', 'part_of_reference'],$stateParams.pageNo);
    opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
  }
  $scope.promise.then($scope.update);
}])
.controller('GlaserKWICList',['$scope','$http', '$state', '$stateParams', 'opacsearch', function($scope, $http, $state, $stateParams, opacsearch){
  //********* DECLARATIVE PART *********************************************
  $scope.Model = {};
  $scope.selected = [];
  $scope.Model.Pagesize = 100;
  $scope.Model.Page = 1;
  //********* END OF DECLARATIVE PART **************************************
  //************************************************************************
  // if the url is fucked up, go back to search
  if (!$stateParams.querystring) $state.go('gl.search');
  else {
    $http.get('https://konde-existdb.minerva.arz.oeaw.ac.at/exist/restxq/glaser-tei/api/kwic/collections/done?q=' + $stateParams.querystring).then(
        function(res){
          $scope.Model.Result = res.data.hits;
          $scope.Model.Pagesize = res.data.amount;
        },
        function(err){ console.log('err: ', err); }
    );
    console.log($stateParams.querystring);
  }
}])
.controller('GlaserDiaryList',['$scope','$http', '$state', '$stateParams', 'opacsearch', function($scope, $http, $state, $stateParams, opacsearch){
  //********* DECLARATIVE PART *********************************************
  $scope.Model = {};
  $scope.selected = [];
  $scope.Model.Pagesize = 100;
  $scope.Model.Page = 1;
  //********* END OF DECLARATIVE PART **************************************
  //************************************************************************
  opacsearch.getRecordsbyPointer('archive','5',[] ,'1','40').then(function(res){
    $scope.Model.Total = res.data.adlibJSON.diagnostic.hits;
    $scope.Model.Pagesize = opacsearch.pagesize;
    $scope.Model.Result = res.data.adlibJSON.recordList.record;
  });
}])
.controller('GlaserDiarySingle',['$scope','$http', '$state', '$stateParams', 'opacsearch', function($scope, $http, $state, $stateParams, opacsearch){
  //********* DECLARATIVE PART *********************************************
  $scope.Model = {};
  $scope.selected = [];
  $scope.Model.Pagesize = 100;
  $scope.Model.Page = 1;
  //********* END OF DECLARATIVE PART **************************************
  //************************************************************************
  // if the url is fucked up, go back to search
    if (!$stateParams.did) $state.go('gl.diaries');
    console.log($stateParams.did);
    var myUV;
    if(typeof UV !== "undefined" )  {
      myUV = createUV('#uv', {
        iiifResourceUri: `/static/manifest_${$stateParams.did}.json`
      }, new UV.URLDataProvider());
    }
    window.addEventListener('uvLoaded', function (e) {
        myUV = createUV('#uv', {
            iiifResourceUri: `/static/manifest_${$stateParams.did}.json`
        }, new UV.URLDataProvider());
    }, false);
}])
.controller('GlaserSingleRecord', ['$scope', '$stateParams', 'opacsearch','GeoNamesServices','leafletData', 'leafletBoundsHelpers','ExistService', function($scope, $stateParams, opacsearch, GeoNamesServices, leafletData, leafletBoundsHelpers, ExistService) {
  $scope.Model = {refID: $stateParams.refID};
  $scope.markers = [];
  $scope.Manifest = [];
  $scope.references = [];
  $scope.activeTab = 0;
  $scope.hasTEI = function(){
    if($scope.Manifest && $scope.Manifest["adlib"+$stateParams.refID]) return true;
    else return false;
  }
  if($stateParams.refID) {
    opacsearch.getSingleRecordbyRef("archive", $stateParams.refID, []).then(function(res){
      //splitting translation/transliteration by line,
      //should be delivered by API this way in the next version
      //--> to be xferred to exist API
      var rec = res.data.adlibJSON.recordList.record[0];
      if(res.data.adlibJSON.recordList.record[0]['inscription.translation']) {
        rec['inscription.translation'] = rec['inscription.translation'][0].split(/\d\./);
        rec['inscription.transliteration'] = rec['inscription.transliteration'][0].split(/\d\./);
        if(rec['inscription.transliteration'].length > 1) {
          rec['inscription.transliteration'].shift();
          rec['inscription.translation'].shift();
        }
      }
      //filtering out Zotero citations from the interpretation field
      if(rec['inscription.interpretation'] && rec['inscription.interpretation'][0]){
        var re = /(bib:[A-Z0-9]*)/g;
        var matches = rec['inscription.interpretation'][0].match(re);
        if(matches){
          var i = 1;
          matches = matches.filter( onlyUnique );
          matches.forEach(function(r){
            $scope.references.push(r.split(':')[1]);
            rec['inscription.interpretation'][0] = rec['inscription.interpretation'][0].replace(r, '-> Reference '+i+'\n');
            i++;
          });
        }
      }
      if(rec['reproduction.reference']) {
        rec['reproduction.reference'] = rec['reproduction.reference'].map(ref => encodeURIComponent(ref));
      }
      $scope.Model.SingleRecord = rec;
      if($scope.Model.SingleRecord['part_of_reference'][0] == 'AT-OeAW-BA-3-27-A') $scope.activeTab = 1;
      if(rec['production.place.uri'].length > 0 && rec['production.place.uri'][0] != "") {
        var recID = rec['production.place.uri'][0];
        if(!GeoNamesServices.geocache[recID] || !GeoNamesServices.geocache[recID]['$$state'] ){
          var promise = GeoNamesServices.getByID(recID);
          GeoNamesServices.addtoCache(recID, promise);
        }
        GeoNamesServices.geocache[recID].then(function(c){
          $scope.markers[recID] = {"lat":parseFloat(c.data.lat), "lng":parseFloat(c.data.lng), "message":rec['production.place'][0], "id": recID};
          leafletData.getMap('singlemap').then(function(map) {
            map.invalidateSize();
            map.panTo({"lat":parseFloat(c.data.lat), "lng":parseFloat(c.data.lng)});
            map.setZoom(6);
            $scope.markers[recID].focus = true;
          });
        });
      }
    });
    ExistService.getPage(1,200).then(function(res){$scope.Manifest = res;});
  }
}])
.controller('GlaserMap', ['$scope', '$stateParams', 'opacsearch', 'leafletData', 'leafletBoundsHelpers', 'GeoNamesServices', '$mdMedia', '$mdSidenav', '$state', '$rootScope', function($scope, $stateParams, opacsearch,leafletData, leafletBoundsHelpers, GeoNamesServices, $mdMedia, $mdSidenav, $state, $rootScope) {
  $rootScope.loading.progress = true;
  angular.extend($scope, {
    center: {},
    Model: {},
    markers: {},
    ssite:"",
    activeTab:0,
    allsites: {}
  });
  var m = "";
  $scope.Model.total = opacsearch.getPointerList('archive','6');
  $scope.Model.totalURI = opacsearch.getRecordsbyPointer('archive','6', ['priref','production.place','production.place.lref','production.place.context','production.place.uri'], 1, 1000);
  $scope.Model.totalURI.then(function(res){
    $rootScope.loading.progress = false;
    res.data.adlibJSON.recordList.record.forEach(function(record){
      var recID = record['production.place.uri'][0];
      if(!GeoNamesServices.staticcache[recID] && (!GeoNamesServices.geocache[recID] || !GeoNamesServices.geocache[recID]['$$state'])){
        var promise = GeoNamesServices.getByID(recID);
        GeoNamesServices.addtoCache(recID, promise);
      }
      if(GeoNamesServices.staticcache[recID]) {
          if (!$scope.markers[recID]) {
            $scope.markers[recID] = {
              "lat": parseFloat(GeoNamesServices.staticcache[recID].lat),
              "lng": parseFloat(GeoNamesServices.staticcache[recID].lng),
              "message": record['production.place'][0],
              "id": recID
            };
          }
          if ($stateParams.placeID && $scope.markers[$stateParams.placeID] && m == "") {
            m = leafletData.getMap('mainmap').then(function (map) {
              $scope.ssite = $stateParams.placeID;
              $scope.selSite($stateParams.placeID);
              map.invalidateSize();
              map.panTo({"lat": parseFloat('14.5'), "lng": parseFloat('45.5')});
              map.setZoom(8);
            });
            $scope.$on('leafletDirectiveMarker.mainmap.click', function (event, args) {
              $scope.selSite(args.modelName);
            });
          } else if ($stateParams.placeID == 0 && m == "") {
            m = leafletData.getMap('mainmap').then(function (map) {
              map.invalidateSize();
              map.panTo({"lat": parseFloat('14.5'), "lng": parseFloat('45.5')});
              map.setZoom(8);
            });
            $scope.$on('leafletDirectiveMarker.mainmap.click', function (event, args) {
              $scope.selSite(args.modelName);
            });
          }
      }
      if(!GeoNamesServices.staticcache[recID] && GeoNamesServices.geocache[recID]) {
        GeoNamesServices.geocache[recID].then(function (c) {
          if (!$scope.markers[recID]) {
            $scope.markers[recID] = {
              "lat": parseFloat(c.data.lat),
              "lng": parseFloat(c.data.lng),
              "message": record['production.place'][0],
              "id": recID
            };
            $scope.allsites[recID] = c.data;
          }
          if ($stateParams.placeID && $scope.markers[$stateParams.placeID] && m == "") {
            m = leafletData.getMap('mainmap').then(function (map) {
              $scope.ssite = $stateParams.placeID;
              $scope.selSite($stateParams.placeID);
              map.invalidateSize();
              map.panTo({"lat": parseFloat('14.5'), "lng": parseFloat('45.5')});
              map.setZoom(8);
            });
            $scope.$on('leafletDirectiveMarker.mainmap.click', function (event, args) {
              $scope.selSite(args.modelName);
            });
          } else if ($stateParams.placeID == 0 && m == "") {
            m = leafletData.getMap('mainmap').then(function (map) {
              map.invalidateSize();
              map.panTo({"lat": parseFloat('14.5'), "lng": parseFloat('45.5')});
              map.setZoom(8);
            });
            $scope.$on('leafletDirectiveMarker.mainmap.click', function (event, args) {
              $scope.selSite(args.modelName);
              console.log(JSON.stringify($scope.allsites));
            });
          }
        });
      }
    });
  });
  $scope.selSite = function(site){
    if($scope.ssite) $scope.markers[$scope.ssite].focus = false;
    $state.go('gl.map',{placeID: site});
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', [{"production.place":$scope.markers[site].message},{"part_of_reference":"*BA-3-27-*"}],"AND",undefined,[],1,100).then($scope.update);
    $scope.markers[site].focus = true;
    $scope.activeTab = 1;
    $scope.ssite = site;
  }
  //************************************************************************
  //Squeeze list
  // when sorting
  $scope.getNewOrder = function(a) {
    if(a.slice(0,1) == "-") opacsearch.updateSorting('descending',a.slice(1));
    else if(a.slice(0,1) != "-") opacsearch.updateSorting('ascending',a);
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', [{"s1":"[bib:"+$stateParams.key+"]"},{"part_of_reference":"*BA-3-27-A*"}],"AND",undefined,[],1,100).then($scope.update);
  };
  //************************************************************************
  // generic page update
  $scope.update = function(res) {
    $scope.Model.Total = res.data.adlibJSON.diagnostic.hits;
    $scope.Model.Page = 1;
    $scope.Model.Pagesize = 100;
    $scope.Model.Result = res.data.adlibJSON.recordList.record;
  };
  // is-locked-open doesn't seem to work in
  $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(big) {
    $scope.big = big;
  });
}])
.controller('GlaserNav', ['$scope', '$timeout', '$mdSidenav', '$http', '$log', '$rootScope', function ($scope, $timeout, $mdSidenav, $http, $log, $rootScope) {
    $scope.Model = {};
    $rootScope.loading = {progress:false}
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
.controller('GlaserImage', ['$scope', '$timeout', '$stateParams', '$http', '$log', 'opacsearch', function ($scope, $timeout, $stateParams, $http, $log, opacsearch) {
  $scope.Model = {
    scanID: $stateParams.imgID || null,
    rec: {},
    availableScans: [],
    selectedScan: '',
    loading: true,
  };
  if($scope.Model.scanID) {
    opacsearch.getSingleRecordbyRef("archive", $scope.Model.scanID, []).then(function(res) {
      let refs = res.data.adlibJSON.recordList.record[0]['reproduction.reference'];
      if(refs[0]) {
        $scope.Model.selectedScan = refs[0];
        $scope.Model.loading = false;
      }
      $scope.Model.availableScans = refs.filter((ref) => ref != "");
    });
  }
  $scope.loadScan = function() {
    $scope.Model.loading = true;
    console.log('loading ', $scope.Model.selectedScan);
    setTimeout(() => {
      $scope.Model.loading = false;
    }, 0);
    //$scope.Model.loading = false;
  }
}])
.controller('GlaserAbout', ['$scope', '$timeout', '$stateParams', '$http', '$log', function ($scope, $timeout, $stateParams, $http, $log) {
    $scope.Model = {};
}])
.controller('GlaserBib', ['$scope', '$http', '$log', 'ZoteroService', function ($scope, $http, $log, ZoteroService) {
  //********* DECLARATIVE PART *********************************************
    $scope.Model = {Page:1};
    $scope.uiview = {"menuOpen":false};
    $scope.selected = [];
    $scope.uiview.currentView = Config.currentView;
    $scope.uiview.list = true;
    $scope.uiview.grid = false;
    $scope.Model.Pagesize = ZoteroService.ZoteroConfig.BASEPARAMS.limit;
    //************************************************************************
    // when pageing
    $scope.getPage = function(a,b) {
      console.log(a,b);
      if (ZoteroService.ZoteroConfig.BASEPARAMS.limit != b) {
        ZoteroService.updateSize(b);
      }
      if (ZoteroService.ZoteroConfig.BASEPARAMS.start != a*b) {
        ZoteroService.updateStart((a-1)*b);
      }
      $scope.Model.Page = a;
      $scope.promise = ZoteroService.getList({path:'users/3808523/items/'}).then($scope.update);
    };
    //************************************************************************
    // when sorting
    $scope.getNewOrder = function(a) {
      if(a.slice(0,1) == "-") ZoteroService.updateSorting('desc',a.slice(1));
      else if(a.slice(0,1) != "-") ZoteroService.updateSorting('asc',a);
      $scope.promise = ZoteroService.getList({path:'users/3808523/items/'}).then($scope.update);
    };
    //************************************************************************
    // generic page update
    $scope.update = function(res) {
      console.log(res);
      $scope.Model.Total = res.headers('Total-Results');
      $scope.Model.Pagesize = ZoteroService.ZoteroConfig.BASEPARAMS.limit;
      $scope.Model.Result = res.data;
      console.log($scope.Model.Result);
    };
  //********* END OF DECLARATIVE PART **************************************
  $scope.promise = ZoteroService.getList({path:'users/3808523/items/'}).then($scope.update);
}])
.controller('GlaserSingleBib', ['$scope', '$stateParams', 'ZoteroService','opacsearch', function($scope, $stateParams, ZoteroService, opacsearch) {
  $scope.Model = {};
  //************************************************************************
  // when sorting
  $scope.getNewOrder = function(a) {
    if(a.slice(0,1) == "-") opacsearch.updateSorting('descending',a.slice(1));
    else if(a.slice(0,1) != "-") opacsearch.updateSorting('ascending',a);
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', [{"s1":"[bib:"+$stateParams.key+"]"},{"part_of_reference":"*BA-3-27-A*"}],"AND",undefined,[],1,100).then($scope.update);
  };
  //************************************************************************
  // generic page update
  $scope.update = function(res) {
    console.log(res);
    $scope.Model.Total = res.data.adlibJSON.diagnostic.hits;
    $scope.Model.Page = 1;
    $scope.Model.Pagesize = 100;
    $scope.Model.Result = res.data.adlibJSON.recordList.record;
    console.log($scope.Model.Result);
  };
  if($stateParams.key && $stateParams.user) {
    ZoteroService.getItem('users/'+$stateParams.user+'/items/'+$stateParams.key).then(function(res){
      $scope.Model.SingleRecord = res;
      console.log($scope.Model.SingleRecord);
    });
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', [{"s1":"[bib:"+$stateParams.key+"]*"},{"part_of_reference":"*BA-3-27-*"}],"AND",undefined,[],1,100).then($scope.update);
  }
}])
.controller("BibByPath", function($scope, $attrs, ZoteroService) {
	$scope.entity = {};
	$attrs.$observe('path', function(val){
    try {
			var obj = JSON.parse(val);
		} catch (e) {
      console.log("template error:", e);
			return {};
		}
    if(!obj.users || obj.users=="") obj.users = ZoteroService.ZoteroConfig.BASEPARAMS.defaultlib;
    ZoteroService.getItem('users/'+obj.users+'/items/'+obj.items).then(function(res){
      $scope.bib = res;
    });
	});
})
.controller('GlaserScan', ['$scope', '$timeout', '$stateParams', '$http', '$log', 'opacsearch',  function ($scope, $timeout, $stateParams, $http, $log, opacsearch) {
  const regex = new RegExp('3D\\b', 'g');
  var presenter = null;
  $scope.Model = {
    scanID: $stateParams.scanID || null,
    rec: {},
    availableScans: [],
    selectedScan: '',
    presenter: null,
  };
  if($scope.Model.scanID) {
    opacsearch.getSingleRecordbyRef("archive", $scope.Model.scanID, []).then(function(res) {
      let refs = res.data.adlibJSON.recordList.record[0].digital_reference;
      refs = refs.filter((ref) => ref.match(regex));
      if(refs[0]) {
        $scope.loadScan(refs[0]);
      }
      $scope.Model.availableScans = refs;
    });
    $scope.loadScan = function(ref) {
      if (!ref) ref = $scope.Model.selectedScan;
      console.log('loading ', ref, $scope.Model.selectedScan);
      if($scope.presenter != null) {
        $scope.presenter.setScene({
          meshes: {
            "Squeeze" : { url: "https://opacbasis.acdh.oeaw.ac.at/" + ref.split('.')[0] + ".nxs" }
          },
          modelInstances : {
            "Model1" : { mesh : "Squeeze" }
          }
        });
      }
      else {
        init3dhop();
        $scope.presenter = setup3dhop(`${ref.split('.')[0]}`);
        resizeCanvas(window.innerWidth - 100, window.innerHeight - 60);
      }
    }
  }
}])
.controller('GlaserTei', ['$scope', '$stateParams', 'opacsearch', 'leafletData', 'leafletBoundsHelpers', 'ExistService', '$mdMedia', '$mdSidenav', '$state', function($scope, $stateParams, opacsearch,leafletData, leafletBoundsHelpers, ExistService, $mdMedia, $mdSidenav, $state) {
  //********* DECLARATIVE PART *********************************************
    $scope.Model = {};
    //TEI.init();
    $scope.Model.Pagesize = ExistService.ExistConfig.PAGESIZE;
    $scope.Model.Page = 1;
    //************************************************************************
    // when pageing
    $scope.getPage = function(a,b) {
      $scope.Model.Page = a;
      ExistService.ExistConfig.PAGESIZE = b;
      $scope.Model.Pagesize = b;
      $scope.promise = ExistService.getPage(a, b);
      $scope.promise.then($scope.update);
    };
    // generic page update
    $scope.update = function(res) {
      $scope.Model.Result = res;
      $scope.Model.Total = ExistService.Meta.HITS;
      if($stateParams.id) $scope.selSite($stateParams.id);
    };
    // squeeze selection
    $scope.selSite = function(id){
      $scope.id = id;
      ExistService.getItem(id).then(function(res){
        $state.go('.',{id: id});
        $scope.currentLink = $state.href("gl.singleRecord", {refID: $scope.id.substr(5)});
        $scope.xmlstr = res;
      });
    }
  ////////////////////////////////////////////////////////////////////////////
  $scope.id = $stateParams.id;
  if(!$stateParams.id) $scope.currentLink = null;
  else {
    $scope.currentLink = $state.href("gl.singleRecord", {refID: $scope.id.substr(5)});
    $scope.TEIlink = "https://id.acdh.oeaw.ac.at/glasersqueezes2015/rec"+ $scope.id.substr(5) +"/"+$scope.id +".xml?format=customTEI2HTML";
  }
  $scope.promise = ExistService.getPage();
  $scope.promise.then($scope.update);
  // $mdMedia quickfix
  //TODO: find out why mdMedia return values are garbled in subscopes
  $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(big) {
    $scope.big = big;
  });

}])
.controller("SqueezeByAttr", function($scope, opacsearch, $attrs) {
	$scope.squeeze = {};
	$attrs.$observe('squeezeid', function(val){
    opacsearch.getSingleRecordbyRef("archive", val, []).then(function(res){
      $scope.squeeze = res.data.adlibJSON.recordList.record[0];
    });
	});
})
.controller('GlaserSinglePrint', ['$scope', '$stateParams', 'opacsearch','GeoNamesServices','leafletData', 'leafletBoundsHelpers','ExistService', function($scope, $stateParams, opacsearch, GeoNamesServices, leafletData, leafletBoundsHelpers, ExistService) {
  $scope.Model = {refID: $stateParams.refID};
  $scope.markers = [];
  $scope.Manifest = [];
  $scope.references = [];
  if($stateParams.refID) {
    opacsearch.getSingleRecordbyRef("archive", $stateParams.refID, []).then(function(res){
      //splitting translation/transliteration by line,
      //should be delivered by API this way in the next version
      //--> to be xferred to exist API
      var rec = res.data.adlibJSON.recordList.record[0];
      if(res.data.adlibJSON.recordList.record[0]['inscription.translation']) {
        rec['inscription.translation'] = rec['inscription.translation'][0].split(/\d\./);
        rec['inscription.transliteration'] = rec['inscription.transliteration'][0].split(/\d\./);
        if(rec['inscription.transliteration'].length > 1) {
          rec['inscription.transliteration'].shift();
          rec['inscription.translation'].shift();
        }
      }
      //filtering out Zotero citations from the interpretation field
      if(rec['inscription.interpretation'][0]){
        var re = /(bib:[A-Z0-9]*)/g;
        var matches = rec['inscription.interpretation'][0].match(re);
        if(matches){
          var i = 1;
          matches = matches.filter( onlyUnique );
          matches.forEach(function(r){
            $scope.references.push(r.split(':')[1]);
            rec['inscription.interpretation'][0] = rec['inscription.interpretation'][0].replace(r, '-> Reference '+i+'\n');
            i++;
          });
        }
      }
      $scope.Model.SingleRecord = rec;
      if(rec['production.place.uri'].length > 0 && rec['production.place.uri'][0] != "") {
        var recID = rec['production.place.uri'][0];
        if(!GeoNamesServices.geocache[recID] || !GeoNamesServices.geocache[recID]['$$state'] ){
          var promise = GeoNamesServices.getByID(recID);
          GeoNamesServices.addtoCache(recID, promise);
        }
        GeoNamesServices.geocache[recID].then(function(c){
          $scope.markers[recID] = {"lat":parseFloat(c.data.lat), "lng":parseFloat(c.data.lng), "message":rec['production.place'][0], "id": recID};
          leafletData.getMap('singlemap').then(function(map) {
            map.invalidateSize();
            map.panTo({"lat":parseFloat(c.data.lat), "lng":parseFloat(c.data.lng)});
            map.setZoom(6);
            $scope.markers[recID].focus = true;
            window.setTimeout(function(){ window.print(); }, 1500);
          });
        })
        .catch(function(error) {
          console.log(error);
          window.setTimeout(function(){ window.print(); }, 1500);
        });
      }
      else {window.setTimeout(function(){ window.print(); }, 1000);}
    });
  }
}])
//******************* helpers ***************************************************
//helper function for deduplication, this should go elsewhere, i smell scope soup
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
