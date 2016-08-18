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
        .primaryPalette('blue', {
          'default': '800', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '600', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '700', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A200' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('red', {
          'default': '800' // use shade 200 for default, and keep all other shades the same
        });
}

