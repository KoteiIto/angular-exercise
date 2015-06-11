var myApp = angular.module("myApp",[]);

myApp.controller("PriceController1", function($scope){
  $scope.price1 = 0;
  $scope.price2 = 50;
  $scope.result = Number($scope.price1) + Number($scope.price2);

  $scope.reset = function(){
    $scope.price1 = 0;
  };

});

myApp.controller("PriceController2", function($scope){
  $scope.price1 = 0;
  $scope.price2 = 50;

  $scope.update = function(){
    $scope.result = Number($scope.price1) + Number($scope.price2);
  };

  $scope.reset = function(){
    $scope.price1 = 0;
  };

  $scope.update();

});

myApp.controller("PriceController3", function($scope){
  $scope.price1 = 0;
  $scope.price2 = 50;

  var update = function(){
    $scope.result = Number($scope.price1) + Number($scope.price2);
  };

  $scope.reset = function(){
    $scope.price1 = 0;
  };

  $scope.$watch("price1", update);
});
