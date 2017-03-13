var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroentry', {
      templateUrl: '/views/templates/hero-entry.html',
      controller: 'HeroEntryController',
      controllerAs: 'entry'
    })
    .when('/heroedit', {
      templateUrl: '/views/templates/hero-edit.html',
      controller: 'HeroEditController',
      controllerAs: 'edit'
    })
    .otherwise({
      redirectTo: 'heroedit'
    })
}]);
