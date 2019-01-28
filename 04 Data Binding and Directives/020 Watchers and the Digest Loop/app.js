var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
	$scope.handle = '';

	$scope.lowercasehandler = function(){
		return $filter('lowercase')($scope.handle);
	};

	$scope.$watch('handle', function(newValue, oldValue){
		console.info('Changed!');
		console.log('old : '+ oldValue);
		console.log('new : '+newValue);
	});

	setTimeout(function(){
		$scope.$apply(function(){
			$scope.handle='newwithhandler';
			console.log('scoped changed');
		});
	}, 3000);
}]);
 