var guidebookConfig = function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ChaptersController',
      templateUrl: 'scripts/view/chapters.html'
    })
    .when('/chapter/:chapterId', {
      controller: 'ChaptersController',
      templateUrl: 'scripts/view/chapters.html'
    })
    .when('/addNote/:chapterId', {
      controller: 'AddNoteController',
      templateUrl: 'scripts/view/addNote.html'
    })
    .when('/deleteNote/:chapterId/:noteId', {
      controller: 'DeleteNoteController',
      templateUrl: 'scripts/view/addNote.html'
    })
  ;
};

var Guidebook = angular.module('Guidebook', []).config(guidebookConfig);