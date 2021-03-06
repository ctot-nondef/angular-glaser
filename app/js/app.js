'use strict';

/* App Module */

var GlaserApp = angular.module('GlaserApp', [
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'ngMaterial',
  'md.data.table',
  'ui-leaflet',
  'ngTEI',
  'AdlibServices',
  'GeoNamesServices',
  'ZoteroService',
  'ExistService',
  'angular-preload-image',
  'imageViewer',
  'material.components.expansionPanels'
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
            'navbar': {
                templateUrl: 'partials/navbar.html',
                controller: 'GlaserNav'
            },
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
                templateUrl: 'partials/simplesearch.html',
                controller: 'GlaserSearch'
            }
        }
    })
    .state('gl.advancedsearch',{
        url: '/advancedsearch',
        views: {
            'content@': {
                templateUrl: 'partials/advancedsearch.html',
                controller: 'GlaserSearch'
            }
        }
    })
    .state('gl.results',{
        url: '/results/:queryID/:pageNo',
        views: {
            'content@': {
                templateUrl: 'partials/result.html',
                controller: 'GlaserResultList'
            }
        }
    })
    .state('gl.diaries',{
        url: '/diaries',
        views: {
            'content@': {
                templateUrl: 'partials/diaries.html',
                controller: 'GlaserDiaryList'
            }
        }
    })
    .state('gl.diariesingle',{
        url: '/diariesingle/:did',
        views: {
            'content@': {
                templateUrl: 'partials/diarysingle.html',
                controller: 'GlaserDiarySingle'
            }
        }
    })
    .state('gl.kwicresults',{
        url: '/kwicresults/:querystring',
        views: {
            'content@': {
                templateUrl: 'partials/KWICresult.html',
                controller: 'GlaserKWICList'
            }
        }
    })
    .state('gl.entities',{
      url: '/entities',
      views: {
        'content@': {
          templateUrl: 'partials/entities.html',
          controller: 'GlaserTeiEntities'
        }
      }
    })
    .state('gl.singleRecord',{
        url: '/rec/:refID/:tab',
        params: { tab: '0' },
        views: {
            'content@': {
                templateUrl: 'partials/singleRecord.html',
                controller: 'GlaserSingleRecord'
            }
        }
    })
    .state('gl.singlePrint',{
        url: '/print/:refID',
        views: {
            'content@': {
                templateUrl: 'partials/singlePrint.html',
                controller: 'GlaserSinglePrint'
            }
        }
    })
    .state('gl.fullImage',{
        url: '/img/:imgID',
        views: {
            'content@': {
                templateUrl: 'partials/fullImage.html',
                controller: 'GlaserImage'
            }
        }
    })
    .state('gl.scan',{
        url: '/scan/:scanID',
        views: {
            'content@': {
                templateUrl: 'partials/3d.html',
                controller: 'GlaserScan'
            }
        }
    })
    .state('gl.map',{
        url: '/map/:placeID',
        params: {
          placeID: {
            dynamic: true
          }
        },
        views: {
            'content@': {
                templateUrl: 'partials/map.html',
                controller: 'GlaserMap'
            }
        }
    })
    .state('gl.bibliography',{
        url: '/bibliography',
        views: {
            'content@': {
                templateUrl: 'partials/bibliography.html',
                controller: 'GlaserBib'
            }
        }
    })
    .state('gl.singleBib',{
        url: '/bib/:user/:key',
        views: {
            'content@': {
                templateUrl: 'partials/singlebib.html',
                controller: 'GlaserSingleBib'
            }
        }
    })
    .state('gl.tei',{
        url: '/tei/:id',
        params: {
          id: {
            dynamic: true
          }
        },
        views: {
            'content@': {
                templateUrl: 'partials/tei.html',
                controller: 'GlaserTei'
            }
        },
        resolve: {
          // Dependencies are annotated in "Inline Array Annotation"
          myAsyncData: ['TEI', function(TEI) {
            // Return a promise (async) for the data
            return TEI.init();
          }]
        }
    })
    .state('gl.about',{
        url: '/about',
        views: {
            'content@': {
                templateUrl: 'partials/about.html',
                controller: 'GlaserAbout'
            }
        }
    })
    .state('gl.others',{
        url: '/others',
        views: {
            'content@': {
                templateUrl: 'partials/related.html',
                controller: 'GlaserAbout'
            }
        }
    })
    $locationProvider.html5Mode(true);
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
