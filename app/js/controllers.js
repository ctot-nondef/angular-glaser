'use strict';

var ssFields = {
  "Object Number":"object_number",
  "Translation Text":"inscription.translation",
  "Language":"inscription.language",
  "Archeological Site":"production.place"
}

/* Controllers */

GlaserApp
.controller('GlaserStartList',['$scope','$http', '$state', 'opacsearch', function($scope, $http, $state, opacsearch){
  $scope.Model = {};
  opacsearch.updateSize("40");
  opacsearch.getRecordsbyPointer('archive','7',[] ,'1','40').then(
    function(res){
      $scope.Model.PointerList = res.data.adlibJSON.recordList.record;
    },
    function(err){ console.log('err: ', err); }
  );
}])
.controller('GlaserSearch',['$scope','$http', '$state', 'opacsearch', function($scope, $http, $state, opacsearch){
  $scope.Model = {};
  $scope.Model.total,$scope.Model.totalURI  = "counting..."
  opacsearch.getPointerList('archive','7').then(function(res){
    $scope.Model.total = res.data.adlibJSON.recordList.record[0]['hits'][0];
  });
  opacsearch.getPointerList('archive','10').then(function(res){
    $scope.Model.totalURI = res.data.adlibJSON.recordList.record[0]['hits'][0];
  });
  $scope.Model.osData = opacsearch;
  //this needs to contain normalization routines, autocompleters....
  //current setup: parsing querying composite index s1 for all terms entered
  $scope.simpleSearch = function () {
    $scope.Model.Result = {};
    $scope.Model.Query  = [];
    if ($scope.Model.keyword) {
      $scope.Model.keywords = $scope.Model.keyword.split(" ");
      $scope.Model.keywords.forEach(function(entry){
        $scope.Model.Query.push(JSON.parse('{"s1":"'+entry+'"}'));
      });
      $scope.Model.Query.push(JSON.parse('{"part_of_reference":"*BA-3-27-A*"}'));
      opacsearch.updateHistory($scope.Model.keyword, $scope.Model.Query, undefined, undefined);
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
        $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND",undefined,[],$stateParams.pageNo);
        opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
        console.log($scope.promise);
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
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', opacsearch.history.query[$stateParams.queryID-1],"AND",undefined,['priref','production.place','production.place.lref','production.place.context','production.place.uri','inscription.language', 'title', 'reproduction.reference'],$stateParams.pageNo);
    opacsearch.updatePage($stateParams.queryID-1, $stateParams.pageNo, $scope.promise);
  }
  $scope.promise.then($scope.update);
}])
.controller('GlaserSingleRecord', ['$scope', '$stateParams', 'opacsearch','GeoNamesServices','leafletData', 'leafletBoundsHelpers','ExistService', function($scope, $stateParams, opacsearch, GeoNamesServices, leafletData, leafletBoundsHelpers, ExistService) {
  $scope.Model = {};
  $scope.markers = [];
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
    });
  }
}])
.controller('GlaserMap', ['$scope', '$stateParams', 'opacsearch', 'leafletData', 'leafletBoundsHelpers', 'GeoNamesServices', '$mdMedia', '$mdSidenav', '$state', function($scope, $stateParams, opacsearch,leafletData, leafletBoundsHelpers, GeoNamesServices, $mdMedia, $mdSidenav, $state) {
  angular.extend($scope, {
    center: {},
    Model: {},
    markers: {},
    ssite:"",
    activeTab:0
  });
  var m = "";
  $scope.Model.total = opacsearch.getPointerList('archive','7');
  $scope.Model.totalURI = opacsearch.getRecordsbyPointer('archive','10', ['priref','production.place','production.place.lref','production.place.context','production.place.uri'], 1, 100);
  $scope.Model.totalURI.then(function(res){
    res.data.adlibJSON.recordList.record.forEach(function(record){
      var recID = record['production.place.uri'][0];
      if(!GeoNamesServices.geocache[recID] || !GeoNamesServices.geocache[recID]['$$state'] ){
        var promise = GeoNamesServices.getByID(recID);
        GeoNamesServices.addtoCache(recID, promise);
      }
      GeoNamesServices.geocache[recID].then(function(c){
        if(!$scope.markers[recID]){
          $scope.markers[recID] = {"lat":parseFloat(c.data.lat), "lng":parseFloat(c.data.lng), "message":record['production.place'][0], "id": recID};
        }
        if($stateParams.placeID && $scope.markers[$stateParams.placeID] && m == "") {
          m = leafletData.getMap('mainmap').then(function(map) {
            $scope.ssite = $stateParams.placeID;
            $scope.selSite($stateParams.placeID);
            map.invalidateSize();
            map.panTo({"lat":parseFloat('14.5'), "lng":parseFloat('45.5')});
            map.setZoom(8);
          });
          $scope.$on('leafletDirectiveMarker.mainmap.click', function(event, args){
            $scope.selSite(args.modelName);
          });
        }
        else if(!$stateParams.placeID && m == ""){
          m = leafletData.getMap('mainmap').then(function(map) {
            map.invalidateSize();
            map.panTo({"lat":parseFloat('14.5'), "lng":parseFloat('45.5')});
            map.setZoom(8);
          });
          $scope.$on('leafletDirectiveMarker.mainmap.click', function(event, args){
            $scope.selSite(args.modelName);
          });
        }
      });
    });
  });
  $scope.selSite = function(site){
    if($scope.ssite) $scope.markers[$scope.ssite].focus = false;
    $state.go('gl.map',{placeID: site},{notify:false});
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', [{"production.place":$scope.markers[site].message},{"part_of_reference":"*BA-3-27-A*"}],"AND",undefined,[],1,100).then($scope.update);
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
    $scope.promise = opacsearch.getRecordsbyIndex('collect.inf', [{"s1":"[bib:"+$stateParams.key+"]"},{"part_of_reference":"*BA-3-27-A*"}],"AND",undefined,[],1,100).then($scope.update);
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
.controller('GlaserScan', ['$scope', '$timeout', '$stateParams', '$http', '$log', function ($scope, $timeout, $stateParams, $http, $log) {
    $scope.Model = {};
    $scope.Model.scanID = $stateParams.scanID;
    var presenter = null;
    init3dhop();
    setup3dhop($scope.Model.scanID);
    resizeCanvas(window.innerWidth-100, window.innerHeight-4);
}])
.controller('GlaserTei', ['$scope', '$stateParams', 'opacsearch', 'leafletData', 'leafletBoundsHelpers', 'ExistService', '$mdMedia', '$mdSidenav', '$state',  function($scope, $stateParams, opacsearch,leafletData, leafletBoundsHelpers, ExistService, $mdMedia, $mdSidenav, $state) {
  ExistService.getList().then(function(res){
    $scope.Manifest = res;
    console.log($scope.Manifest);
  });
  $scope.selSite = function(id){
    ExistService.getItem(id).then(function(res){
      $scope.transcription = angular.element(jQuery.parseXML(res))["0"].children["0"].children["0"].children["0"].children[2].children["0"].children["0"].children["2"];
      $scope.translation = angular.element(jQuery.parseXML(res))["0"].children["0"].children["0"].children["0"].children[2].children["0"].children["1"].children["2"];
      console.log($scope.transcription, $scope.translation);
      $scope.Model = {translation:"<h3>loading TEI</h3>",transliteration:"<h3>loading TEI</h3>"};
      $scope.Model.transliteration = $scope.makeMarkup($scope.transcription);
      console.log($scope.Model.transliteration);
    });
  }
  $scope.makeMarkup = function(tei){
    var markup="";
    var idx = tei.children.length;
    var le = tei.children.length-1;
    while(idx--) {
      var a = tei.children[le-idx];
      console.log(tei.children);
      if(a.nodeName=="tei:lb") markup = markup + "<br><br>";
      else if (a.nodeName=="w") markup = markup + "<a href='http://www.ruzicka.net:8180/kalam/servlet/kalam?op=showhtml&dictionary=yes&word="+ encodeURIComponent(a.innerHTML) +"'>"+ a.innerHTML +"</a>"
      else if (a.nodeName=="w" && a.children.length==0) markup = markup + "<a href='http://www.ruzicka.net:8180/kalam/servlet/kalam?op=showhtml&dictionary=yes&word="+ encodeURIComponent(a.innerHTML) +"'>"+ a.innerHTML +"</a>"
    }
    return markup;
  }
  // is-locked-open doesn't seem to work in
  $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(big) {
    $scope.big = big;
  });
}])
.controller("SqueezeByAttr", function($scope, opacsearch, $attrs) {
	$scope.squeeze = {};
	$attrs.$observe('squeezeid', function(val){
    opacsearch.getSingleRecordbyRef("archive", val, []).then(function(res){
      //console.log(res);
      $scope.squeeze = res.data.adlibJSON.recordList.record[0];
    });
	});
})
//******************* helpers ***************************************************
//helper function for deduplication, this should go elsewhere, i smell scope soup
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
