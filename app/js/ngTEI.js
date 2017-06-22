var ngTEI = angular.module('ngTEI', [
  'ngSanitize',
]);


/**
 * Service providing a convenience Method to replace specified characters in a Text
 * TODO:
 */
ngTEI.service('replaceChars', function($http, $localStorage, $q, $log){
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

ngTEI.directive('teidoc', ['$compile', '$http', '$q', function ($compile, $http, $q) {
    this.spec = {};
    this.config = {};
    init();
    function init() {
      $http.get('http://www.tei-c.org/Vault/P5/3.1.0/xml/tei/odd/p5subset.json').then(function(res){
        this.spec = res.data;
      }.bind(this),
      function(err){ console.log('err: ', err); }
      );
      $http.get('static/TEIconfig.json').then(function(res){
        this.config = res.data;
      }.bind(this),
      function(err){ console.log('err: ', err); }
      );
    };
    function makeMarkup(xml){
      for (var s in this.config) {
        var els = xml.querySelectorAll(s);
        console.log(els);
        if (els) {
          //SETTING ATTRIBUTES FROM CONFIG
          console.log(this.config);
          if(this.config[s].attrib){
            for (var a in this.config[s].attrib) {
              var idx=els.length;
              while(idx--){
                els[idx].setAttribute(a, this.config[s].attrib[a]);
              }
            }
          }
          //REPLACING ELEMENT NAME
          if(this.config[s].replEl){

          }
        }
      }
    }
    function link(scope, element, attrs){
      var oParser = new DOMParser();
      attrs.$observe('source', function(val){
        if(val){
          var doc = oParser.parseFromString(val, "text/xml").querySelector("TEI");
          makeMarkup(doc);
          console.log(doc);
          //var template = doc.querySelectorAll("div[type]");
          element.html(doc).show();
          $compile(element.contents())(scope);
        }
      }.bind(this));
    };
    return {
        link: link
    };
}]);
