'use strict';

/**
 * @ngdoc overview
 * @name dashBoardApp
 * @description
 * # dashBoardApp
 *
 * Main module of the application.
 */
angular
  .module('dashBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toDoModule',
    'backand'
  ])
  .config(function($routeProvider, BackandProvider) {
    //BACKEND CONFIGURATION. API REST BACKAND. FREE SERVICE
    BackandProvider.setAppName('aedesigndashboard');
    BackandProvider.setSignUpToken('16540fad-8deb-4cd1-a15c-24f3e88e1727');
    BackandProvider.setAnonymousToken('922d5c01-b0b7-45cf-a4a6-ce988b3f3321');
    $routeProvider
      // MAIN VIEW OF PROJECT
      .when('/', {
        templateUrl: 'views/main.html',
        
      })
    
      // Shows All Todo in Mosaic view
      .when('/toDoList', {
        templateUrl: 'views/toDoList.html',
        controller: 'toDoListController',
        controllerAs: 'tdListCtrl',
        resolve:{
          tdlist:['toDoResource', function(toDoResource){
           return toDoResource.get();
            //return toDoService.list;
          }]
        }
      })
      // Loads New Blank ToDo Detail
      .when('/toDoDetail/new', {
        templateUrl: 'views/toDoDetail.html',
        controller: 'elementController',
        controllerAs: 'detailCtrl'
      })
      // Shows detail from one ToDo Element.
      .when('/toDoDetail', {
        templateUrl: 'views/toDoDetail.html',
        controller: 'elementController',
        controllerAs: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  //BACKEND CONFIGURATION. API REST BACKAND. FREE SERVICE
  /*.config(function (BackandProvider) {
      BackandProvider.setAppName('aedesigndashboard');
      BackandProvider.setSignUpToken('16540fad-8deb-4cd1-a15c-24f3e88e1727');
      BackandProvider.setAnonymousToken('922d5c01-b0b7-45cf-a4a6-ce988b3f3321');
      
  })*/