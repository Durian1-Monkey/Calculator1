/**
 * Created by morita on 6/26/2016 AD.
 */

    var app = angular.module('calculator', []);
	app.controller('calController', ['$scope', '$log', '$parse', function($scope) {
      $scope.num =0;
      $scope.calController = function($log) {
        $log.debug('Test');
      }

      $scope.number = function(numb) {
        $scope.num += String(numb);
      }

      $scope.plus = function(operator){
        $scope.num += String(operator);
          console.log(operator, "is clicked.");
      }

      $scope.subtract = function(operator){
        $scope.num += String(operator);
          console.log(operator, "is clicked.");
      }

      $scope.divide = function(operator){
        $scope.num += String("/");
          console.log(operator, "is clicked.");
      }
      $scope.operator = function(operator) {
        if (operator == "=") {
          console.log(operator, "is clicked.");
          console.log($scope.num);
          console.log(typeof $scope.num);
          $scope.num = eval($scope.num);
          console.log("This is the type of " + typeof $scope.num);
          console.log(parseInt($scope.num));
        }
        if (operator == "X") {
          $scope.num += String("*");
          console.log(operator, "is clicked.");
        }
        else if (operator == "C") {
          $scope.num = " ";
          console.log(operator, "is clicked.");
        }
      }
    }]);