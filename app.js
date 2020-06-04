(function () {
  'use strict';

  angular.module('NameCalculator',[])
  .controller('NameCalculatorController',NameCalculatorController);

  function NameCalculatorController($scope,$filter,$injector) {
    $scope.name="";
    $scope.total=0;

    $scope.display=function () {
      $scope.total=calculateValue($scope.name);
      //$scope.total=totalNumeric;
    }

    $scope.upper=function () {
      var upCase=$filter('uppercase');
      $scope.name=upCase($scope.name);
    }
    };

    function calculateValue(string) {
      var totalString=0;
      for (var i = 0; i < string.length; i++) {
        totalString+=string.charCodeAt(i);
      }
      return totalString;
    };

})();
