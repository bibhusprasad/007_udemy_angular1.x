var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){
	$scope.name ='bibhu';

	$timeout(function() {
		$scope.name = 'All';
	}, 3000);
}]);
 