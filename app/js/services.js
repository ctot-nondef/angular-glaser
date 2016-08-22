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
	var getFullList = function(database){console.log('getFullList Query: ', database);
		if(database) var promise = $http.get(Config.baseURL+"database="+database+"&search=all&output=JSON&limit=1000");
		else var promise = $http.get(Config.baseURL+"search=all&output=JSON&limit=1000");
		return deferrer(promise);
	};
	var getPointerList = function(database, pointerfile){console.log('getPointerList Query: ', database, pointerfile);
		if(database && pointerfile) var promise = $http.get(Config.baseURL+"database="+database+"&search=pointer "+pointerfile+"&output=JSON&limit=50");
		else console.log('Parameters Missing'); 	  
		return deferrer(promise);
	};
	var getSingleRecord = function(database, reference){console.log('getSingleRecord Query: ', database, reference);
		if(database && reference) var promise = $http.get(Config.baseURL+"action=search&database="+database+"&search=priref="+reference+"&output=JSON&limit=100");
		else console.log('Parameters Missing'); 
		return deferrer(promise);
	};
	return {
	  	FullList: getFullList,
	  	PointerList: getPointerList,
	  	SingleRecord: getSingleRecord
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
