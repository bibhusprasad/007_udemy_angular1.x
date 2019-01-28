var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
//ngMessages add this for use angular-messages.min.js. before that add script in index.html

myApp.controller('newController', function ($scope, $log, $filter, $resource) {
	console.log($scope);
	console.log($log);
	//{log: ƒ, info: ƒ, warn: ƒ, error: ƒ, debug: ƒ}
	$log.log("This is log.");
	$log.info("This is info.");
	$log.debug("This is debug.");
	$log.warn("This is warn.");
	$log.error("This is error.");

	$scope.name='bibhu';
	$scope.formatedName = $filter('uppercase')($scope.name);
	$log.info($scope.name);
	$log.info($scope.formatedName);

	console.log($resource);
});