/**
 * Created by Administrator on 2017/3/7.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.shopList=[
        { img:'img/01.jpg',name:'17春季衬衫',color:'黑色',size:'M',price:'80',newprice:'60',num:0,key:false},
        { img:'img/02.jpg',name:'春季九分裤',color:'绿色',size:'M',price:'20',newprice:'15',num:0,key:false},
        { img:'img/03.jpg',name:'送条纹毛衣',color:'牛仔',size:'均码',price:'46',newprice:'40',num:0,key:false},
    ];
    //减少
    $scope.reduce= function (index1) {
        if($scope.shopList[index1].num>1){
            $scope.shopList[index1].num--;
        }else{
            $scope.remove(index1);
        }
    };
    //增加
    $scope.add=function(index){
        $scope.shopList[index].num++;
    };
    //计算总价
    $scope.allSum=function(){
        var allPrice = 0;
        for(var i= 0;i<$scope.shopList.length;i++){
            allPrice+=$scope.shopList[i].price*$scope.shopList[i].num;
        }
        return allPrice;
    };
    //计算总数量
    $scope.allNum=function(){
        var allShu=0;
        for(var i=0;i<$scope.shopList.length;i++){
            allShu+=$scope.shopList[i].num;
        }
        return allShu;
    };
    //移除一项
    $scope.remove=function(index){
        if(confirm('确定移除此物品吗？')){
            $scope.shopList.splice(index,1);
        }
    };
    //使得输入框中不得小于等于0
    $scope.change=function(index){
        if($scope.shopList[index].num>=1){
        }else{
            $scope.shopList[index].num=1;
        }
    };


});