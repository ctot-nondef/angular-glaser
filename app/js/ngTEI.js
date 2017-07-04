var ngTEI = angular.module('ngTEI', [
  'ngSanitize', 'ngMaterial'
]);


/**
 * Service providing a set convenience Methods to transform a TEI document
 * into a compilable template
 * init() needs to be called from router before use!
 */
ngTEI.service('TEI', function($http, $localStorage, $q, $log){
	this.CONFIG = {
    load:{
      CharReplaceTable:'static/coderep.json',
      TEIConfigObject:'static/TEIconfig.json',
      TEISpecObject:'http://www.tei-c.org/Vault/P5/3.1.0/xml/tei/odd/p5subset.json'
    }
  }
  //init function, should be called before controller initialisation (resolve param in router!!)
  //loads all nec configurations
  this.init = function(){
    return $q(function(resolve, reject){
      var promises = {};
      for (var url in this.CONFIG.load) {
        promises[url] = $http.get(this.CONFIG.load[url]);
      }
      $q.all(promises).then((values) => {
        for (var v in values) {
          this.CONFIG[v] = values[v].data;
        }
        resolve(values);
      })
    }.bind(this));
  }
  //convenience method accepts and xml doc and returns markup acc to the config object
  //in CONFIG.TEIConfigObject
  this.makeMarkup = function(doc){
    var oParser = new DOMParser();
    var oSerializer = new XMLSerializer();
    //removing namespaces
    doc = doc.replace(/<([a-zA-Z0-9 ]+)(?:xml)ns=\".*\"(.*)>/g, "<$1$2>");
    var xml = oParser.parseFromString(doc, "text/xml").querySelector("TEI");
    for (var s in this.CONFIG.TEIConfigObject) {
      let nl = xml.querySelectorAll(String(s));
      let tr = this.CONFIG.TEIConfigObject[s];
      let els = [];
      for(var i = nl.length; i--; els.unshift(nl[i]));
      let idx = els.length;
      while(idx--){
        //DELETE ATTRIBUTES FROM CONFIG
        if(tr.removeAttribute){
          let ida = tr.removeAttribute.length;
          while(ida--){
            els[idx].removeAttribute(removeAttribute[ida]);
          }
        }
        //SETTING ATTRIBUTES FROM CONFIG
        if(tr.setAttribute){
          for (var a in tr.setAttribute) {
            els[idx].setAttribute(a, tr.setAttribute[a]);
          }
        }
        //WRAP IN A SPECIFIED ELEMENT
        if(tr.wrapElement){
          let newElement = document.createElementNS('http://www.w3.org/1999/xhtml',tr.wrapElement.tag);
          for (var a in tr.wrapElement.attributes) {
            newElement.setAttribute(a, tr.wrapElement.attributes[a]);
            newElement.setAttribute('id', 'wrapper');
          }
          newElement.innerHTML = els[idx].outerHTML;
          els[idx].replaceWith(newElement);
          els[idx] = xml.querySelector('[id=wrapper]').firstElementChild;
          els[idx].removeAttribute('id');
        }
        //WRAP CONTENT IN A SPECIFIED ELEMENT
        if(tr.wrapContent){
          let newElement = document.createElementNS('http://www.w3.org/1999/xhtml',tr.wrapElement.tag);
          for (var a in tr.wrapElement.attributes) {
            newElement.setAttribute(a, tr.wrapElement.attributes[a]);
          }
          newElement.innerHTML = els[idx].innerHTML;
          els[idx].innerHTML = newElement.outerHTML;
        }
        //INSERTS A DIV WITH SPECIFIED MARKUP AT SPECIFIED POSITION
        //SEE LIST OF AVAILABLE POSITIONS AT https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
        if(tr.insertElement){
          let el = document.createElement('div');
          el.innerHTML = tr.insertElement.markup;
          els[idx].insertAdjacentElement(tr.insertElement.position, el);
        }
        //REPLACE DEFINED ELEMENTS
        //THIS MUST BE DONE LAST, AS IT RENDERS THE LOOP VARS UNUSABLE
        if(tr.replaceElement){
          let newElement = document.createElementNS('http://www.w3.org/1999/xhtml',tr.replaceElement);
          newElement.innerHTML = els[idx].innerHTML;
          let ac = els[idx].attributes.length;
          while(ac--){
            newElement.setAttribute(els[idx].attributes[ac].nodeName, els[idx].attributes[ac].nodeValue);
          }
          els[idx].parentElement.replaceChild(newElement, els[idx]);
        }
      }
      //reparse object for every config entry
      xml = oParser.parseFromString(oSerializer.serializeToString(xml), "text/xml");
    }
    return oSerializer.serializeToString(xml);
  }
  //preconfigurable convenience method to clean special characters from strings
  this.cleanString = function(s) {
    var n = angular.copy(s);
    for (var a in this.CONFIG.CharReplaceTable) {
      n = n.replace(a, this.CONFIG.CharReplaceTable[a]);
    }
    return n;
  }
});

ngTEI.directive('teidoc', ['$compile', '$http', '$q', 'TEI', function ($compile, $http, $q, TEI) {
    function link(scope, element, attrs){
      attrs.$observe('source', function(val){
        if(val){
          var doc = TEI.makeMarkup(val);
          element.html($compile(doc)(scope)).show();
        }
      }.bind(this));
    };
    return {
        link: link
    };
}]);

ngTEI.directive('teiheader', function () {
    return {
      transclude: true,
      template: '<div class="md-whiteframe-3dp" layout-padding layout-margin ng-transclude></div>'
    };
});

ngTEI.directive('facsimile', function () {
    return {
      transclude: true,
      template: '<div class="md-whiteframe-3dp" layout-padding layout-margin ng-transclude></div>'
    };
});

ngTEI.directive('title', function () {
    return {
      transclude: true,
      template: '<h3><ng-transclude></ng-transclude></h3>'
    };
});
