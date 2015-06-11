var myApp = angular.module("myApp",[]);

myApp.controller("TodoController", function($scope){
  
  $scope.items = [];
  $scope.name = "";

  $scope.addItem = function(){
    var item = {};
    item.name = $scope.name;
    $scope.items.push(item);
  };

  $scope.hasItem = function(){
    return $scope.items.length != 0;
  };

  $scope.removeItem = function(index){
    $scope.items.splice(index,1);
  };

});
