var myApp = angular.module('myApp', []);

myApp.controller('newController', function ($scope) {

});


var searchPeople = function (firstName, lastName, age){
	return 'bibhu samal';
}

console.log(searchPeople(1,2,3));
// Output bibhu samal

console.log(searchPeople);
// Output
/*
ƒ (firstName, lastName, age){
	return 'bibhu samal';
}
*/