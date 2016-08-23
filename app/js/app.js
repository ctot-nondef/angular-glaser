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
                controller: 'GlaserStartList'
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
                controller: 'GlaserStartList'
            }
        }
    })
    .state('gl.advancedsearch',{
        url: '/advancedsearch',
        views: {
            'content@': {
                templateUrl: 'partials/advancedsearch.html',
                controller: 'GlaserStartList'
            }
        }
    })
    .state('gl.results',{
        url: '/results',
        views: {
            'content@': {
                templateUrl: 'partials/results.html',
                controller: 'GlaserStartList'
            }
        }
    })
    .state('gl.test',{
        url: '/test',
        views: {
            'content@': {
                templateUrl: 'partials/start.html',
                controller: 'GlaserStartList'
            }
        }
    })
    .state('gl.singleRecord',{
        url: '/:refID',
        views: {
            'content@': {
                templateUrl: 'partials/singleRecord.html',
                controller: 'GlaserSingleRecord'
            }
        }
    })
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
          'default': '800', 
          'hue-1': '600', 
          'hue-2': '700', 
          'hue-3': 'A200' 
        })
        .accentPalette('red', {
          'default': '800'
        });
}

