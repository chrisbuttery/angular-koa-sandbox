'use strict';

var tempApp = angular.module('tempApp', ['serviceModule']).config(
  ['$routeProvider', function($routeProvider) {
    $routeProvider.when('/current', {
      templateUrl: '../scripts/views/current.html',
      controller: 'CurrentCtrl'
    });
    $routeProvider.when('/history', {
      templateUrl: '../scripts/views/history.html',
      controller: 'HistoryCtrl'
    });
    $routeProvider.otherwise({
      redirectTo: '/current'
    });
  }]
);

/**
 * Filters
 */
tempApp.filter('plusFifteen', [ function() {
  return function(arrTemp) {
    var arrReturn = new Array();
    angular.forEach(arrTemp, function(value, key){
      if(value.temp>=15) arrReturn.push(value);
    });
    return arrReturn;
  };
}]);

tempApp.filter('minimum', [ function() {
  return function(arrTemp, minimum) {
    var arrReturn = new Array();
    var min = minimum ? minimum : 15;
    angular.forEach(arrTemp, function(value, key){
      if(value.temp>=min) arrReturn.push(value);
    });
    return arrReturn;
  };
}]);