var myApp = angular.module("myApp",[]);

myApp.controller("HeaderController", function($scope, $rootScope){

  $rootScope.activeIndex = 0;

  $scope.getClass = function(i){
    if($rootScope.activeIndex == i){
      return "active";
    }else{
      return "";
    }
  };

  $scope.activate = function(i){
    $rootScope.activeIndex = i;
  };

});

myApp.controller("ImageController", function($scope, $rootScope){

  var imageUrls = [
                "http://ポケモン都市伝説.jp/wp-content/uploads/2014/05/pokemon03.png",
                "http://pic.prepics-cdn.com/kajdjgatmd/29564847.gif",
                "http://blog-imgs-62.fc2.com/a/2/c/a2cfuji/225514_m.jpg"
                ];

  var setImageUrl = function(){
    $scope.imageUrl = imageUrls[$rootScope.activeIndex];
  }

  $rootScope.$watch("activeIndex", setImageUrl)

});
