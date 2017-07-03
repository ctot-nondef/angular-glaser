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
        var nl = xml.querySelectorAll(String(s));
        var els = [];
        for(var i = nl.length; i--; els.unshift(nl[i]));
        console.log(els);
        var idx = els.length;
        while(idx--){
          //DELETE ATTRIBUTES FROM CONFIG
          if(this.config[s].removeAttribute){
            ida = this.config[s].removeAttribute.length;
            while(ida--){
              els[idx].removeAttribute(removeAttribute[ida]);
            }
          }
          //SETTING ATTRIBUTES FROM CONFIG
          if(this.config[s].setAttribute){
            for (var a in this.config[s].setAttribute) {
              els[idx].setAttribute(a, this.config[s].setAttribute[a]);
            }
          }
          //WRAP IN A SPECIFIED ELEMENT
          if(this.config[s].wrapElement){
            var newElement = document.createElementNS('http://www.w3.org/1999/xhtml',this.config[s].wrapElement.tag);
            for (var a in this.config[s].wrapElement.attributes) {
              newElement.setAttribute(a, this.config[s].wrapElement.attributes[a]);
              newElement.setAttribute('id', 'wrapper');
            }
            newElement.innerHTML = els[idx].outerHTML;
            els[idx].replaceWith(newElement);
            els[idx] = xml.querySelector('[id=wrapper]').firstElementChild;
            els[idx].removeAttribute('id');
            console.log(els[idx]);
          }
          //INSERTS A DIV WITH SPECIFIED MARKUP AS PREVIOUS SIBLING
          if(this.config[s].insertBeforeBegin){
            var el = document.createElement('div');
            el.innerHTML=this.config[s].insertBeforeBegin;
            console.log(els[idx]);
            els[idx].insertAdjacentElement('beforebegin', el);
          }
          //INSERTS A DIV WITH SPECIFIED MARKUP AS FIRST CHILD
          if(this.config[s].insertAfterBegin){
            var el = document.createElement('div');
            el.innerHTML=this.config[s].insertAfterBegin;
            els[idx].insertAdjacentElement('afterbegin', el);
          }
          //INSERTS A DIV WITH SPECIFIED MARKUP AS LAST CHILD
          if(this.config[s].insertBeforeEnd){
            var el = document.createElement('div');
            el.innerHTML=this.config[s].insertBeforeEnd;
            els[idx].insertAdjacentElement('beforeend', el);
          }
          //INSERTS A DIV WITH SPECIFIED MARKUP AS NEXT SIBLING
          if(this.config[s].insertAfterEnd){
            var el = document.createElement('div');
            el.innerHTML=this.config[s].insertAfterEnd;
            els[idx].insertAdjacentElement('afterend', el);
          }
          //REPLACE DEFINED ELEMENTS
          //THIS MUST BE DONE LAST, AS IT RENDERS THE LOOP VARS UNUSABLE
          if(this.config[s].replaceElement){
            var newElement = document.createElement(this.config[s].replaceElement);
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
          element.html($compile(doc)(scope)).show();
        }
      }.bind(this));
    };
    return {
        link: link
    };
}]);
