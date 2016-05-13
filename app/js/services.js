'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

//adjust to:
//http://opacbasis.w07adlib1.arz.oeaw.ac.at/wwwopac.ashx?action=search&database=archive&search=priref=1110000005