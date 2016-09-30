'use strict';

/* Adlib API Query Services Module */

var Config = {
    "baseURL":"http://opacbasis.w07adlib1.arz.oeaw.ac.at/wwwopac.ashx?",
    "pagesize": 40,
    "sortField":"title",
    "sortOrder":"ascending",
    "currentView":"list",
    "localStorage":"GlaserStorage",
    "geoNamesID":"oeaw_adlib"
}


var AdlibServices = angular.module('AdlibServices', ['ngStorage']);

AdlibServices.service('opacsearch', ['$http', '$localStorage' ,function($http,$localStorage){
	if(!$localStorage[Config.localStorage]) $localStorage[Config.localStorage] = {};
	if($localStorage[Config.localStorage]['history']) var history = $localStorage[Config.localStorage]['history'];
	else {
		var obj = {"history":{"querystring":[],"query":[],"result":[]}}
		$localStorage[Config.localStorage] = obj;
		var history = $localStorage[Config.localStorage]['history'];
	}	
	var pagesize = Config.pagesize;
	var sortField = Config.sortField;
	var sortOrder = Config.sortOrder;
	//////////Parameter Parsers///////////////////////////////
		var parseFields = function(fields){
			var fieldstring = "";
			if(fields && fields != []) {
				fieldstring +="&fields=";
				fields.forEach(function(field){
					fieldstring += field+",%20"
				})
			}
			return fieldstring;
		}
		var parseLimit = function(limit,page){
			var limitstring = "";
			if (!limit) var limit = this.pagesize; 
			if (!page) var page = 1;
			var skip = (page-1) * limit + 1;
			limitstring = "&limit="+limit+"&startfrom="+skip;
			return limitstring;
		}
		var parseDB = function(database){
			var dbString = "";
			if(database && database != "") dbString += "&database="+database;
			return dbString;
		}
		var parseSorting = function(){
			var sortString = "";
			return "%20sort%20"+this.sortField+"%20"+this.sortOrder;
		}
	//////////Callable retrieval functions///////////////////////////////
		var getFullListbyDB = function(database, fields, page, limit){console.log('getFullList Query: ', database, fields, page, limit);
			return $http.get(Config.baseURL+"&action=search&search=all"+this.parseSorting()+"&output=JSON"+this.parseLimit(limit,page)+this.parseDB(database)+this.parseFields(fields));
		}
		var getPointerList = function(database, pointerfile ){console.log('getPointerList Query: ', database, pointerfile );
			if(pointerfile) return $http.get(Config.baseURL+"&command=getpointerfile&number="+pointerfile+"&output=JSON"+this.parseDB(database));
			else console.log('Parameters Missing'); 	  
		}
		var getRecordsbyPointer = function(database, pointerfile, fields, page, limit){console.log('getRecordsbyPointer Query: ', database, pointerfile, fields, page, limit);
			if(pointerfile) return $http.get(Config.baseURL+"&action=search&search=pointer "+pointerfile+"&output=JSON"+this.parseLimit(limit,page)+this.parseDB(database)+this.parseFields(fields));
			else console.log('Parameters Missing'); 	  
		}
		var getSingleRecordbyRef = function(database, reference, fields){console.log('getSingleRecord Query: ', database, reference, fields);
			if(reference) return $http.get(Config.baseURL+"&action=search&search=priref="+reference+"&output=JSON"+this.parseDB(database)+this.parseFields(fields));
			else console.log('Parameters Missing'); 
		}
		var getRecordsbyIndex = function(database, index, logic, pointer, fields, page, limit){console.log('getRecordsbyIndex Query: ', database, index, logic, pointer, page, fields, limit);
			if(!logic) logic = "OR";
			if(index) {
				var searchstring = "";
				index.forEach(function(query){
					for(var key in query) {
						if(searchstring != "") searchstring += "%20"+logic+"%20";
						searchstring += key+"=%27"+query[key]+"%27";
					}
				});
				if(pointer) {
					searchstring = "(pointer%20"+pointer+")%20AND%20("+searchstring +")";
				}
				return $http.get(Config.baseURL+"&action=search&search="+searchstring+this.parseSorting()+"&output=JSON"+this.parseLimit(limit,page)+this.parseDB(database)+this.parseFields(fields));
			}
			else console.log('Parameters Missing');
		}
	//////////// Parameter getters / setters ///////////////////////////////
		var updateHistory = function(string, query, page, result){console.log('addtoHistory: ', query, result);
			this.history.querystring.unshift(string);
			this.history.query.unshift(query);
			if(page && result) {
				var obj = {};
				obj[page] = result;
				this.history.result.unshift(obj);
			}
			else this.history.result.unshift({});
		}
		var clearHistory = function(){console.log('clearing History upon user request.');
			$localStorage[Config.localStorage]['history'] = {"querystring":[],"query":[],"result":[]};
			this.history = $localStorage[Config.localStorage]['history'];
		}
		var updatePage = function(queryno, page, result){console.log('updatePage: ', queryno, page, result);
			if(this.history.result[queryno]) {
				this.history.result[queryno][page] = result;
			}
			else {
				var obj = {};
				obj[page] = result;
				this.history.result[queryno] = obj;
			}
		}
		var updateSize = function(newsize){console.log('updateSize: ', newsize);
			this.pagesize = newsize;
			$localStorage[Config.localStorage]['history']['result'] = [];
			this.history = $localStorage[Config.localStorage]['history'];
		};
		var updateSorting = function(sort, field){console.log('updateSorting: ', sort, field);
			this.sortOrder = sort;
			this.sortField = field;
			this.history.result = [];
		}
	///////////////// return Object //////////////////////////////////////////
	return {
		parseFields: parseFields,
		parseLimit: parseLimit,
		parseDB: parseDB,
		parseSorting: parseSorting,
	  	getFullListbyDB: getFullListbyDB,
	  	getPointerList: getPointerList,
	  	getRecordsbyPointer: getRecordsbyPointer,
	  	getSingleRecordbyRef: getSingleRecordbyRef,
	  	getRecordsbyIndex: getRecordsbyIndex,
	  	updateHistory: updateHistory,
	  	clearHistory: clearHistory,
	  	updatePage: updatePage,
	  	updateSize: updateSize,
	  	pagesize: pagesize,
	  	updateSorting: updateSorting,
	  	sortField: sortField,
	  	sortOrder: sortOrder,
		history: history
  	};
}]);

AdlibServices.service('contentrtrvl', ['$http', '$q', function($http, $q){
	var getImage = function(id,width,height,scalemode,fillmode){console.log('getFullList Query: ', database);
		if(database) var promise = $http.get(Config.baseURL+"database="+database+"&search=all&output=JSON&limit=1000");
		else var promise = $http.get(Config.baseURL+"search=all&output=JSON&limit=1000");
		return promise;
	};
	return {
	  	FullList: getFullList,
	  	PointerList: getPointerList,
	  	SingleRecord: getSingleRecord
  	};
}]);


///////////////// GeoNames Service Module
//TODO: move to separate file
var GeoNamesServices = angular.module('GeoNamesServices', ['ngStorage']);

GeoNamesServices.service('GeoNamesServices', ['$http', '$localStorage', '$q', function($http, $localStorage, $q){
	if(!$localStorage[Config.localStorage]) $localStorage[Config.localStorage] = {};
	if($localStorage[Config.localStorage]['geocache']) var geocache = $localStorage[Config.localStorage]['geocache'];
	else {
		$localStorage[Config.localStorage]['geocache'] = {};
		var geocache = $localStorage[Config.localStorage]['cache'];
	}
	var getByID = function(id){console.log('GeoNames getByID: ', id);
		if(id && !this.geocache[id]) {
			var promise = $http.get("http://api.geonames.org/getJSON?formatted=true&geonameId="+id+"&username="+Config.geoNamesID);
			return promise;
		}
		if(id && this.geocache.id) return this.geocache.id;
		if(!Number.isInteger(id)) return $q.reject("invalid Parameters");
	}
	var addtoCache = function(ID, promise){console.log('addtoCache', promise);
		if(ID && promise ){
			this.geocache[ID] = promise;
		}
	}
	var clearCache = function(){console.log('clearing geocache upon user request');
		if($localStorage[Config.localStorage]['geocache']) $localStorage[Config.localStorage]['geocache'] = {};
		this.geocache = $localStorage[Config.localStorage]['geocache'];
	}
	return {
	  	getByID: getByID,
	  	addtoCache: addtoCache,
	  	geocache: geocache,
	  	clearCache: clearCache
  	};
}]);
