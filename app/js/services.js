'use strict';

/* Adlib API Query Services Module */

var Config = {
    "baseURL":"http://opacbasis.w07adlib1.arz.oeaw.ac.at/wwwopac.ashx?",
    "pagesize": 10,
    "sortField":"title",
    "sortOrder":"ascending",
    "currentView":"list"
}

var AdlibServices = angular.module('AdlibServices', ['ngResource']);

AdlibServices.service('opacsearch', ['$http', function($http){
	var history = {"querystring":[],"query":[],"result":[]};
	var pagesize = Config.pagesize;
	var sortField = Config.sortField;
	var sortOrder = Config.sortOrder;
	var getFullListbyDB = function(database, page){console.log('getFullList Query: ', database, page);
		if(!this.pagesize || !page) {this.pagesize = 50; page = 1}
		var skip = (page-1) * this.pagesize + 1;
		console.log('skip',skip);
		if(database) return $http.get(Config.baseURL+"database="+database+"&search=all&output=JSON&limit="+this.pagesize+"&startfrom="+skip);
		else return $http.get(Config.baseURL+"search=all&output=JSON&limit=1000");
	};
	var getPointerList = function(database, pointerfile){console.log('getPointerList Query: ', database, pointerfile);
		if(database && pointerfile) return $http.get(Config.baseURL+"database="+database+"&command=getpointerfile&number="+pointerfile+"output=JSON");
		else console.log('Parameters Missing'); 	  
	};
	var getRecordsbyPointer = function(database, pointerfile, page, fields){console.log('getRecordsbyPointer Query: ', database, pointerfile, this.pagesize, page);
		if(!pagesize || !page) {this.pagesize = 50; page = 1;}
		var skip = (page-1) * this.pagesize + 1;
		if(database && pointerfile) return $http.get(Config.baseURL+"database="+database+"&search=pointer "+pointerfile+"&limit="+this.pagesize+"&startfrom="+skip+"&output=JSON");
		else console.log('Parameters Missing'); 	  
	};
	var getSingleRecordbyRef = function(database, reference){console.log('getSingleRecord Query: ', database, reference);
		if(database && reference) return $http.get(Config.baseURL+"action=search&database="+database+"&search=priref="+reference+"&output=JSON");
		else console.log('Parameters Missing'); 
	};
	var getRecordsbyIndex = function(database, index, logic, page, fields){console.log('getRecordsbyIndex Query: ', database, index, logic, page, fields);
		if(!this.pagesize || !page) {this.pagesize = 50; page = 1;}
		if(!logic) {logic = "OR";}
		var skip = (page-1) * this.pagesize + 1;
		if(database && index) {
			var searchstring = "";
			index.forEach(function(query){
				for(var key in query) {
					if(searchstring != "") searchstring += "%20OR%20";
					searchstring += key+"=%27"+query[key]+"%27";
				}
			});
			searchstring += "%20sort%20"+this.sortField+"%20"+this.sortOrder;
			return $http.get(Config.baseURL+"database="+database+"&search="+searchstring+"&limit="+this.pagesize+"&startfrom="+skip+"&output=JSON");
		}
		else console.log('Parameters Missing');
	};
	var updateHistory = function(string, query, page, result){console.log('addtoHistory: ', query, result);
		this.history.querystring.push(string);
		this.history.query.push(query);
		var obj = {};
		obj[page] = result;
		this.history.result.push(obj);
	};
	var updatePage = function(queryno, page, result){console.log('updatePage: ', queryno, page, result);
		if(this.history.result[queryno]) {
			this.history.result[queryno][page] = result;
		}
	};
	var updateSize = function(newsize){console.log('updateSize: ', newsize);
		this.pagesize = newsize;
		this.history.result = [];
	};
	var updateSorting = function(sort, field){console.log('updateSorting: ', sort, field);
		this.sortOrder = sort;
		this.sortField = field;
		this.history.result = [];
	}
	return {
	  	FullListbyDB: getFullListbyDB,
	  	PointerList: getPointerList,
	  	RecordsbyPointer: getRecordsbyPointer,
	  	SingleRecordbyRef: getSingleRecordbyRef,
	  	RecordsbyIndex: getRecordsbyIndex,
	  	updateHistory: updateHistory,
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
