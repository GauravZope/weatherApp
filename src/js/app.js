angular.module('WatherApp', [
  'ngRoute',
  'mobile-angular-ui',
  'WatherApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});