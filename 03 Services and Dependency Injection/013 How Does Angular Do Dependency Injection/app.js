var myApp = angular.module('myApp', []);

myApp.controller('newController', function ($scope) {
	console.log($scope);
});

var searchPeople = function(firstName, lastName, age, $scope){
	return 'bibhu samal';
};

console.log(angular.injector().annotate(searchPeople));