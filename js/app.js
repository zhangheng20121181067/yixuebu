/**
 * Created by Administrator on 2017/3/10.
 */

var listApp=angular.module("listApp",["fenYe"]);
listApp.controller("listCtrl",function($scope,$http) {
    $http.get("data/graNotice.json").success(function (data) {
        $scope.items = data;
        $scope.count = Math.ceil($scope.items.length / $scope.pageSize);//初始状态下总页数(不添加留言内容);
    });
    $scope.pageNum=1;  // 第1页
    $scope.pageSize=3;   // 页面大小.

    $scope.selectPage=function(page){
        $scope.pageNum=page;
    };

    $scope.go=function(){
        $scope.pageNum=parseInt($scope.goNum);
    };
})
