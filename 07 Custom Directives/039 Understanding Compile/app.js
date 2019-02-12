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
	$scope.people = [
		{
			name: 'Bibhu Samal',
			address: 'Jaleswarpur', 
			post: 'Kuanpal', 
			city: 'Cuttack',
			state: 'Odisha',
			zip: '754204'
		},
		{
			name: 'Ankita Samantaray',
			address: 'Ramasahi', 
			post: 'Athagarh', 
			city: 'Cuttack',
			state: 'Odisha',
			zip: '750029'
		},
		{
			name: 'Sonali Sahani',
			address: 'Rajkanika', 
			post: 'Kendrapada', 
			city: 'Cuttack',
			state: 'Odisha',
			zip: '560037'
		}

	];

	$scope.formattedAddress = function(person){
		return person.address + ', ' + person.post + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
	}
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
			personObject: '=',
			formattedAddressFunction: '&'
		},
		compile: function(elem, attrs){
			console.log('Compiling...');
			//elem.removeAttr('class');
			console.log(elem.html());

			return{
				pre: function(scope, elements, attrs){
					console.log('Pre linking ...');
					console.log(elements);
				},
				post: function(scope, elements, attrs){
					console.log('post-linking...');
					console.log(scope);
					if(scope.personObject.name == 'Bibhu Samal'){
						elements.removeAttr('class');
					}
					console.log(elements);
				}
			}
		}
	}
});

/*
A: Attribute
E: Element
C: Class
*/