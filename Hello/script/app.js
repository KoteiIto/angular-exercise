var myApp = angular.module("myApp",[]);

//コントラーラ
myApp.controller("HelloController", function($scope){
  //モデル
  $scope.explain = "AngularはフロントサイドMVCフレームワークです。";
  $scope.word = "Hello World";
  $scope.action = function(){
    window.open();
  };
});

//コントラーラ
myApp.controller("ByeByeController", function($scope){
  //モデル
  $scope.explain = "コントローラはスコープ内のモデルを参照します。";
  $scope.word = "Bye Bye";
  $scope.action = function(){
    $scope.word = "Thank you";
  };
});

//コントラーラ
myApp.controller("RepeatController", function($scope){
  //モデル
  $scope.explain = "ビューとモデルは自動的に双方向で値をバインドします。";
  $scope.word = "";
  $scope.action = function(){
    alert($scope.word);
  };
});
