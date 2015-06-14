var myApp = angular.module("myApp",[]);

myApp.controller("ParentController", function($scope){
  var strings = ["Foo", "Bar"];
  var index = 0;

  $scope.foo = "Foo";

  $scope.change = function(){
    index = (index + 1) % 2;
    $scope.foo = strings[index];
  }

  $scope.$watch("foo", function(){
    $scope.$broadcast("changeFoo",$scope.foo);
  });

});

myApp.controller("ChildController1", function($scope){

  var strings = ["foo", "bar"];
  var index = 0;

});

myApp.controller("ChildController2", function($scope){

  var strings = ["foo", "bar"];
  var index = 0;

  $scope.foo = "Foo";

});

myApp.controller("ChildController3", function($scope){

  var strings = ["foo", "bar"];
  var index = 0;

  $scope.foo = "Foo";

  $scope.change = function(){
    index = (index + 1) % 2;
    $scope.foo = strings[index];
  }

});

myApp.controller("ChildController4", function($scope){

  var strings = ["foo", "bar"];
  var index = 0;

  $scope.foo = "Foo";

  $scope.change = function(){
    index = (index + 1) % 2;
    $scope.foo = strings[index];
  }

  $scope.$on("changeFoo", function(event, s){
    $scope.foo = s;
  });

});
