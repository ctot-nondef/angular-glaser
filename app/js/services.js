'use strict';

/* Adlib API Query Services Module */

var Config = {
    "baseURL":"http://opacbasis.w07adlib1.arz.oeaw.ac.at/wwwopac.ashx?",
}

var AdlibServices = angular.module('AdlibServices', ['ngResource']);

AdlibServices.service('opacsearch', ['$http', '$q', function($http, $q){
	var deferrer = function(promise){
		var deferObject = $q.defer();
		promise.then (
			function(resp){ deferObject.resolve(resp); /*console.log('$state: ', $state); there should be some Query error handling here processing the response error field from adlib*/ },
			function(errr){ deferObject.reject(errr); /*console.log('errr$state: ', $state);*/ }
		);
		return deferObject.promise;
	};
	var getFullListbyDB = function(database, pagesize, page){console.log('getFullList Query: ', database, pagesize, page);
		if(!pagesize || !page) {pagesize = 50; page = 1}
		var skip = (page-1) * pagesize + 1;
		console.log('skip',skip);
		if(database) var promise = $http.get(Config.baseURL+"database="+database+"&search=all&output=JSON&limit="+pagesize+"&startfrom="+skip);
		else var promise = $http.get(Config.baseURL+"search=all&output=JSON&limit=1000");
		return deferrer(promise);
	};
	var getPointerList = function(database, pointerfile){console.log('getPointerList Query: ', database, pointerfile);
		if(database && pointerfile) var promise = $http.get(Config.baseURL+"database="+database+"&command=getpointerfile&number="+pointerfile+"output=JSON");
		else console.log('Parameters Missing'); 	  
		return deferrer(promise);
	};
	var getRecordsbyPointer = function(database, pointerfile, pagesize, page, brief){console.log('getRecordsbyPointer Query: ', database, pointerfile, pagesize, page);
		if(!pagesize || !page) {pagesize = 50; page = 1;}
		var skip = (page-1) * pagesize + 1;
		if(database && pointerfile) var promise = $http.get(Config.baseURL+"database="+database+"&search=pointer "+pointerfile+"&limit="+pagesize+"&startfrom="+skip+"&output=JSON");
		else console.log('Parameters Missing'); 	  
		return deferrer(promise);
	};
	var getSingleRecordbyRef = function(database, reference){console.log('getSingleRecord Query: ', database, reference);
		if(database && reference) var promise = $http.get(Config.baseURL+"action=search&database="+database+"&search=priref="+reference+"&output=JSON&limit=100");
		else console.log('Parameters Missing'); 
		return deferrer(promise);
	};
	var getRecordsbyIndex = function(database, index, logic, pagesize, page, brief){console.log('getRecordsbyIndex Query: ', database, index, logic, pagesize, page);
		if(!pagesize || !page) {pagesize = 50; page = 1;}
		if(!logic) {logic = "OR";}
		var skip = (page-1) * pagesize + 1;
		if(database && index) {
			var searchstring = "";
			index.forEach(function(query){
				for(var key in query) {
					if(searchstring != "") searchstring += "%20OR%20";
					searchstring += key+"=%27"+query[key]+"%27";
				}
			});
			var promise = $http.get(Config.baseURL+"database="+database+"&search="+searchstring+"&limit="+pagesize+"&startfrom="+skip+"&output=JSON");
		}
		else console.log('Parameters Missing'); 	  
		return deferrer(promise);
	};
	return {
	  	FullListbyDB: getFullListbyDB,
	  	PointerList: getPointerList,
	  	RecordsbyPointer: getRecordsbyPointer,
	  	SingleRecordbyRef: getSingleRecordbyRef,
	  	RecordsbyIndex: getRecordsbyIndex
  	};
}]);

AdlibServices.service('searchhistory', ['$http', '$q', function($http, $q){
	var history = {"querystring":[],"query":[],"result":[]};
	var deferrer = function(promise){
		var deferObject = $q.defer();
		promise.then (
			function(resp){ deferObject.resolve(resp); /*console.log('$state: ', $state); there should be some Query error handling here processing the response error field from adlib*/ },
			function(errr){ deferObject.reject(errr); /*console.log('errr$state: ', $state);*/ }
		);
		return deferObject.promise;
	};
	var addtoHistory = function(string, query, result){console.log('addtoHistory: ', query, result);
		history.querystring.push(string);
		history.query.push(query);
		history.result.push(result);
	};
	return {
		add: addtoHistory,
		history: history
  	};
}]);

AdlibServices.service('contentrtrvl', ['$http', '$q', function($http, $q){
	var deferrer = function(promise){
		var deferObject = $q.defer();
		promise.then (
			function(resp){ deferObject.resolve(resp); /*console.log('$state: ', $state); there should be some Query error handling here processing the response error field from adlib*/ },
			function(errr){ deferObject.reject(errr); /*console.log('errr$state: ', $state);*/ }
		);
		return deferObject.promise;
	};
	var getImage = function(id,width,height,scalemode,fillmode){console.log('getFullList Query: ', database);
		if(database) var promise = $http.get(Config.baseURL+"database="+database+"&search=all&output=JSON&limit=1000");
		else var promise = $http.get(Config.baseURL+"search=all&output=JSON&limit=1000");
		return deferrer(promise);
	};
	return {
	  	FullList: getFullList,
	  	PointerList: getPointerList,
	  	SingleRecord: getSingleRecord
  	};
}]);
