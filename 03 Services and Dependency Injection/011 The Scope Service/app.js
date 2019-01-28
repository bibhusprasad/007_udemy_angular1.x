var myApp = angular.module('myApp', []);

myApp.controller('newController', function ($scope) {

	$scope.name ='bibhu samal';
	$scope.age = 30;
	$scope.getName = function() {
		return 'silu';
	};

	console.log($scope);
});

