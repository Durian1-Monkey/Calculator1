/**
 * Created by morita on 6/26/2016 AD.
 */
var app = angular.module('calculator', []);
app.controller('calController', function ($scope, $log) {
    "ngInject";
    $scope.num = ' ';
    $scope.calController = function ($log) {
        $log.debug('Test');
    }

    $scope.number = function (numb) {
        $log.debug("number");
        $scope.num += String(numb);
    }

    $scope.plus = function (operator) {
        $scope.num += String(operator);
        $log.debug(operator, "is clicked.");
    }

    $scope.subtract = function (operator) {
        $scope.num += String(operator);
        $log.debug(operator, "is clicked.");
    }

    $scope.divide = function (operator) {
        $scope.num += String("/");
        $log.debug(operator, "is clicked.");
    }

    $scope.multiple = function (operator) {
        $scope.num += String("*");
        $log.debug(operator, "is clicked.");
    }

    $scope.operator = function (operator) {
        if (operator === "=") {
            console.log($scope.num);
            console.log($scope.num[1]);
            if ($scope.num[1] === "*" | "/" && $scope.num[0] === "*" | "/" ) {
                console.log("no number is before * or / operators.");
                $scope.num = 0;
            }
            else {
                $log.debug(operator, "is clicked.");
                $log.debug($scope.num);
                $scope.num = eval($scope.num);
                $log.debug($scope.num);
            }
        }
        if (operator === "C") {
            $scope.num = " ";
            $log.debug(operator, "is clicked.");
        }
    }
});

app.directive('numberButton', function () {
    return {
        templateUrl: 'template/numberButton.html'
    };
});