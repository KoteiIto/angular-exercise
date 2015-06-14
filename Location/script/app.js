var myApp = angular.module("myApp",["ngAnimate","ngRoute"]);


function RouteConfig($routeProvider){
  //$locationProvider.html5Mode(true);
  $routeProvider.
    when("/home", {
      templateUrl: "home.html"
    }).
    when("/new",{
      templateUrl: "new.html"
    }).
    when("/home/detail",{
      templateUrl: "detail.html"
    }).
    otherwise({
      redirectTo: "/home"
    });
}
myApp.config(RouteConfig);


myApp.controller("HeaderController", function($scope, $location){

  var path = ["home", "new"];

  $scope.activeIndex = 0;

  $scope.getClass = function(i){
    if($scope.activeIndex == i){
      return "active";
    }else{
      return "";
    }
  };

  $scope.activate = function(i){
    $scope.activeIndex = i;
    $location.path(path[i]);
  };

  $scope.$on('$locationChangeStart', function (event, next, current) {
    if(next == current){
      event.preventDefault();
      $location.path("/");
    }
  });

});


myApp.factory("Share", function(){
  var item = {};
  return item;
});


myApp.controller("SearchController", function($scope, $location, Share){

  $scope.items = [
    {"name" : "ピカチュウ", "url" : "http://ポケモン都市伝説.jp/wp-content/uploads/2014/05/pokemon03.png"},
    {"name" : "ヒトカゲ", "url" :  "http://pic.prepics-cdn.com/kajdjgatmd/29564847.gif"},
    {"name" : "コラッタ", "url" :  "http://blog-imgs-62.fc2.com/a/2/c/a2cfuji/225514_m.jpg"},
  ];

  $scope.keyword = "";

  $scope.showDetail = function(item){
    Share.item = item;
    $location.path("home/detail");
  }

});


myApp.controller("DetailController", function($scope, Share){
  $scope.item = Share.item;
});
