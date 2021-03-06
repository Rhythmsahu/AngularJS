(function () {
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.list="";
    $scope.message="";

    $scope.checkIfTooMuch=function () {
      $scope.message=checkIfTooMuch($scope.list);
      if($scope.message==="Enjoy"){
        document.getElementByClass('form-group message').style.color="green";
      }
    }

    function checkIfTooMuch(str) {
      var arr=str.split(",");
      var m="";
      if(str===""){
        m="Please enter data first"
        $scope.color="red";
      }
      else if(arr.length<=3){
        m="Enjoy!";
        $scope.color="green";
    }
    else {
      m="Too Much!";
      $scope.color="green";
    }
    return m;
  };
};

})();
