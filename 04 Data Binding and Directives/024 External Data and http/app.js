var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
	
	$scope.rules='';

	$http({
		method : "GET",
		url : "http://localhost:8080/api"
	}).then(function mySuccess(response){
		$scope.rules = response.data;
	}, function myError(response){
		$scope.names=response.statusText
	});
}]);