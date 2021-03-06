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
	$scope.person = {
		name: 'Bibhu Samal',
		address: 'Jaleswarpur, Kuanpal, Cuttack, 754204'
	};
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams',
	function ($scope, $log, $routeParams) {
	
}]);

myApp.directive("searchResult", function(){
	return {
		restrict: 'AEC',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: { /* replace mainController scope*/
			personObject: '='
		}
	}
});

/*
A: Attribute
E: Element
C: Class
*/