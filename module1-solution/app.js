(function () {
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.list="";
    $scope.checkIfTooMuch=function () {
      $scope.message=checkIfTooMuch($scope.list)
    }

    function checkIfTooMuch(str) {
      var arr=str.split(",");
      var m="";
      if(arr.length<=3){
        m="Enjoy";
    }
    else {
      m="Too Much!";
    }
    return m;
  };
};

})();
