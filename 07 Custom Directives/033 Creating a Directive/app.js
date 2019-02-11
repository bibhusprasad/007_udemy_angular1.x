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
	
	

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams',
	function ($scope, $log, $routeParams) {
	
	

}]);

myApp.directive("searchResult", function(){
	return {
		restrict: 'AEC',
		template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Bibhu, Samal</h4><p class="list-group-item-text">Jaleswarpur, Kuanpal, Cuttack</p></a></a><a href="#" class="list-group-item"><h4 class="list-group-item-heading">Ankita, Samantaray</h4><p class="list-group-item-text">Pokharisahi, Athagarh, Cuttack</p></a><a href="#" class="list-group-item"><h4 class="list-group-item-heading">Sonali, Sahani</h4><p class="list-group-item-text">Mahanga, Kendrapada, Cuttack</p></a>'
	}
});

/*
A: Attribute
E: Element
C: Class
*/