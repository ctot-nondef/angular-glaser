var ngTEI = angular.module('ngTEI', [
  'ngSanitize', 'ngMaterial'
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
        console.log(res);
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
    function makeMarkup(doc){
      var oParser = new DOMParser();
      var oSerializer = new XMLSerializer();
      //removing namespaces
      doc = doc.replace(/<([a-zA-Z0-9 ]+)(?:xml)ns=\".*\"(.*)>/g, "<$1$2>");
      var xml = oParser.parseFromString(doc, "text/xml").querySelector("TEI");
      for (var s in this.config) {
        var els = xml.querySelectorAll(String(s));
        console.log(els);
        var idx = els.length;
        while(idx--){
          //DELETE ATTRIBUTES FROM CONFIG
          if(this.config[s].delAttr){
            ida = this.config[s].delAttr.length;
            while(ida--){
              els[idx].removeAttribute(delAttr[ida]);
            }
          }
          //SETTING ATTRIBUTES FROM CONFIG
          if(this.config[s].attrib){
            for (var a in this.config[s].attrib) {
              els[idx].setAttribute(a, this.config[s].attrib[a]);
            }
          }
          //INSERTS A DIV AS FIRST CHILD
          if(this.config[s].insbef){
            var el = document.createElement('div');
            el.innerHTML=this.config[s].insbef;
            els[idx].insertAdjacentElement('beforebegin', el);
          }
          //INSERTS A DIV AS LAST CHILD
          if(this.config[s].insaft){
            var el = document.createElement('div');
            el.innerHTML=this.config[s].insaft;
            els[idx].insertAdjacentElement('beforeend', el);
          }
          //REPLACE DEFINED ELEMENTS
          if(this.config[s].replEl){
            var newElement = document.createElement(this.config[s].replEl);
            newElement.innerHTML = els[idx].innerHTML;
            var ac = els[idx].attributes.length;
            while(ac--){
              newElement.setAttribute(els[idx].attributes[ac].nodeName, els[idx].attributes[ac].nodeValue);
            }
            els[idx].parentElement.replaceChild(newElement, els[idx]);
          }
        }
        xml = oParser.parseFromString(oSerializer.serializeToString(xml), "text/xml");
      }
      return oSerializer.serializeToString(xml);
    }
    function link(scope, element, attrs){
      attrs.$observe('source', function(val){
        if(val){
          var doc = makeMarkup(val);
          console.log(doc);
          //var template = doc.querySelectorAll("div[type]");
          //element.html(doc).show();
          element.html($compile(doc)(scope)).show();
        }
      }.bind(this));
    };
    return {
        link: link
    };
}]);
