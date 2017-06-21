var MaterialTEI = angular.module('MaterialTEI', [
  'ngAnimate',
  'ngSanitize',
  'ngMaterial',
  'md.data.table'
]);

/**
 * Service providing convenience Methods and Cacheing for the zotero webservices API
 */
MaterialTEI.service('TEI', function($http, $localStorage, $q, $log){
	this.CONFIG = {}
  this.init = function(){
    $http.get('static/coderep.json').then(function(res){
      console.log(res);
      this.CONFIG.ra = res.data;
    }.bind(this),
    function(err){ console.log('err: ', err); }
    );
  }
  this.cleanString = function(s) {
    var n = angular.copy(s);
    for (var a in this.CONFIG.ra) {
      n = n.replace(a, this.CONFIG.ra[a]);
    }
    return n;
  }
  this.init();
});

MaterialTEI.directive('mdtei', ['$compile', function ($compile) {
    function link(scope, element, attrs){
      var oParser = new DOMParser();
      attrs.$observe('source', function(val){
        doc = oParser.parseFromString(val, "text/xml");
        console.log(doc);
        doc.getElementsByTagName("ab");
        doc.renameNode("ab","","div");
        console.log(doc.getElementsByTagName("body"));
        console.log();
      }.bind(this));
    };
    return {
        link: link,
    };
}]);
