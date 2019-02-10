var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
	
	$scope.name='main';

	$log.main='property from main';
	$log.info($log);

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
	
	$scope.num = $routeParams.num || 1;

	$log.second='property from second';
	$log.info($log);

}]);