var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
	
	var rulesRequest = new XMLHttpRequest();
	var url = 'http://localhost:8080/api';
	

	
	rulesRequest.open('GET', url, true);
	rulesRequest.withCredentials = true;
	rulesRequest.onreadystatechange = function() {
		if(rulesRequest.readyState === 4 && rulesRequest.status === 200){
			$scope.rules = JSON.parse(rulesRequest.responseText);
		}
	};
    rulesRequest.send();
}]);
 