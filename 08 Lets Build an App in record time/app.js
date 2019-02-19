
//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//for #/
weatherApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

weatherApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

//ROUTE
weatherApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	})
});

//SERVICES
weatherApp.service('cityService', function(){
	this.city = 'Paris';
});

//CONTROLLER
weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService){
	$scope.city=cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

}]);


weatherApp.controller('forecastController', ['$scope','$resource','$http','cityService', function($scope, $resource,$http, cityService){
	$scope.city=cityService.city;

	$scope.weatherResult='';

	$http({
		method : "GET",
		url : 'http://api.apixu.com/v1/forecast.json?key=a1c8818b715b4627827170003191302&q='+$scope.city
	}).then(function mySuccess(response){
		$scope.weatherResult = response.data;
	}, function myError(response){
		$scope.errorName=response.statusText;
	});

}]);