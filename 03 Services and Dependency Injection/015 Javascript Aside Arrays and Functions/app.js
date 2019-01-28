var myApp = angular.module('myApp', []);

var things = [1, '2', 3, function () {
	alert('Hello!')
}];

things[3]();

console.log(things);