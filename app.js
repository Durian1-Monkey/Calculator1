/*
var app = angular.module('app', [ui.bootstrap]);

app.controller('appController', ['$scope', function($scope) {
	$scope.current_number = true;
	$scope.newNumber = null;
	$scope.pendingNumber = null;
	$scope.testText = 'TEXT';
	$scope.result = 0;
	$scope.number = numberjs;

	function numberjs(num) {
		$scope.result += num;
		current_number = number;
		console.log('test');
		console.log('Test result', result);
	}}
]);
*/


var app = angular.module('app', []);
app.controller('appController',['$scope',  function($scope) {
	$log.debug('test');
	

	$scope.number = function(num) {
		$scope.button += num;
		console.log(num);
	}

	$scope.operator = function (opr) {
		$scope.button +=opr;
		console.log(opr);
		}

	}]);
/*
var app = angular.module('app', []);
app.controller('appController', function() {
	var vm = this;
	vm.testText = '1234';
})
	*/