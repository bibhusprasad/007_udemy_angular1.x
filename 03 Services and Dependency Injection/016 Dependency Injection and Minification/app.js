var myApp = angular.module('myApp', []);

/*
myApp.controller('mainController', function ($scope, $log) {
	$log.log($scope);
});

*/

//minified version
myApp.controller('mainController', ['$scope', '$log', function (a, b) {
	b.log(a);
}]);