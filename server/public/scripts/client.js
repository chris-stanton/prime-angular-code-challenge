var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
//view to add super_heroes to database
    .when('/heroentry', {
      templateUrl: '/views/templates/hero-entry.html',
      controller: 'HeroEntryController',
      controllerAs: 'entry'
    })
//view to delete super_heroes from lista and database
    .when('/heroedit', {
      templateUrl: '/views/templates/hero-edit.html',
      controller: 'HeroEditController',
      controllerAs: 'edit'
    })
    .otherwise({
      redirectTo: 'heroentry'
    })
}]);
