'use strict';

/* App Module */

var GlaserApp = angular.module('GlaserApp', [
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'ngMaterial',
  'GlaserControllers',
  'GlaserFilters'  
]);


GlaserApp.config(config);
function config($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider,$logProvider,$mdThemingProvider){
  $compileProvider.debugInfoEnabled(true);
  $logProvider.debugEnabled(true);
  $urlRouterProvider.otherwise('/');
    $stateProvider
    /////////////////
    // start state //
    /////////////////
    .state('start',{
        url: '/',
        views: {
            'content@': {
                templateUrl: 'partials/start.html',
                controller: 'GlaserFullList'
            }
        }
    })
    ////////////////////////////////////////////
    // root  state - only invokes navbar      //
    ////////////////////////////////////////////
    .state('gl',{
        url: '/gl',
        views: {
            'navbar': {
                templateUrl: 'partials/navbar.html',
                controller: 'GlaserNav'
            }
        }
    })
    ////////////////////////////////////////////////////////
    // various content states, views ref to index.html    //
    ////////////////////////////////////////////////////////
    .state('gl.search',{
        url: '/search',
        views: {
            'content@': {
                templateUrl: 'partials/search.html',
                controller: 'GlaserFullList'
            }
        }
    })
    .state('gl.advancedsearch',{
        url: '/advancedsearch',
        views: {
            'content@': {
                templateUrl: 'partials/advancedsearch.html',
                controller: 'GlaserFullList'
            }
        }
    })
    .state('gl.results',{
        url: '/results',
        views: {
            'content@': {
                templateUrl: 'partials/results.html',
                controller: 'GlaserFullList'
            }
        }
    })
    .state('gl.test',{
        url: '/test',
        views: {
            'content@': {
                templateUrl: 'partials/start.html',
                controller: 'GlaserFullList'
            }
        }
    })
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('light-blue');
}