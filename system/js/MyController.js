/**
 * Created by home on 2017/7/26.
 */
app.controller("MyControl",function($scope,$http){
    //获取菜单
    $http.post("../text.txt").success(function(data){
        $scope.message=data;
    }).error(function(){
        alert("404");
    });
   $scope.click_li=function(index){
       for(var i=0;i<$scope.message.length;i++)
       {
           //鼠标点击的哪行的li显示，其他的li隐藏
           document.getElementsByClassName("li_ul")[i].style.display="none";
       }
       document.getElementsByClassName("li_ul")[index].style.display="block";
   }
})
   .controller("food",function($scope,$location,MyFactory,insert,addinfo){
       $scope.way=$location.absUrl().split("/")[6];
        //定义一个新的数组；
        $scope.food=[];
        MyFactory.datainfo().then(function(res){
           $scope.fooddata=res.data;
           addinfo.addinfolist($scope.fooddata,true);
           $scope.fooddata=addinfo.addshow()[0];
           for(var i=0;i<$scope.fooddata.length;i++)
           {
               if($scope.fooddata[i].type==$scope.way)
               {
                   //就把该东西加入新的数组里
                   $scope.food.push($scope.fooddata[i]);
               }
           }

           //准备写分页
           //每一页显示的产品数量
          $scope.perpage=5;
          //总的页数
          $scope.totalpage=Math.ceil($scope.food.length/$scope.perpage);
           $scope.perstastic=$scope.food.slice(0,5);


           //先创个数组最大值是totalpage;
           $scope.pages=[];
           for(var a=0;a<$scope.totalpage;a++){
               $scope.pages[a]=a+1;
           }
            $scope.li=0;
           //然后把这个数组放到页面上
           $scope.jump=function(index){
               $scope.li=index;
               showpage($scope.li);
           };
           function showpage(n){
               $scope.perstastic=$scope.food.slice(n* $scope.perpage,(n+1)* $scope.perpage);
           }
           //查看详情
           $scope.juti=function(index){
               //单个信息
               //单个信息的序号
               $scope.foodli=$scope.li*5+index;
               $scope.one=$scope.food[$scope.foodli];
           };

       });
        //获取跳转页面地址的最后一节

        //点击购物车
        $scope.buy=function(book){
             insert.insertinfo(book);

        }
    })
    //购物车
    .controller("shop",function($scope,insert){
        //首先定义一个数组来接受收到的东西
        $scope.shopgood=[];
        $scope.shopgood=insert.selectinfo();

        //定义数量的多少
        $scope.num=function(way,n){
        if(way=='+')
        {
            $scope.shopgood[n].num++;
        }
        else{
            $scope.shopgood[n].num--;
            if($scope.shopgood[n].num==0)
            {
                $scope.shopgood[n].num=1;
            }
        }
        };
        //删除
        $scope.ceil=function(index){
            $scope.shopgood.splice(index,1);
        };
        //总计
        $scope.totalprice=function(){
            var total=0;
            angular.forEach($scope.shopgood,function(item){
                total +=item.num*item.detailinfo.price;
            });
            return total;
        };


    })
   //信息详情
   .controller("stastic",function($scope,MyFactory,addinfo){
        MyFactory.datainfo().then(function(res){
            $scope.alldata=res.data;
            //把原始数据传给添加数据库里面
            addinfo.addinfolist($scope.alldata,true);
            //然后重新赋值
            $scope.alldata=addinfo.addshow()[0];
            //每一页显示10个

            $scope.n1=10;
            //总页数
            $scope.totaln1=Math.ceil($scope.alldata.length/$scope.n1);
            //把总页数放在一个数组里
            $scope.arrayn1=[];
            for(var i=0;i<$scope.totaln1;i++)
            {
                $scope.arrayn1[i]=i+1;

            }
            //分页的数据
            $scope.perdata1=$scope.alldata.slice(0,$scope.n1);
            //跳页
            $scope.jump=function(index){
               $scope.y=index;
                show($scope.y);
            };
            //跳页函数
            function show(n){
                $scope.perdata1=$scope.alldata.slice(n*$scope.n1,(n+1)*$scope.n1);
            }

        });
    })
   //添加信息
    .controller("add",function($scope,MyFactory,addinfo){
        //建立新的节点，创造新的数据
        $scope.addid="";
        $scope.addtype="";
        $scope.addtext="";
        $scope.addname="";
        $scope.addbrand="";
        $scope.addimg="";
        $scope.addaddress="";
        $scope.addprice="";
        $scope.addtime="";
        $scope.addpost="";
        //加载原始数据
        MyFactory.datainfo().then(function(res){
            //本地数据库的数据
            $scope.organdata=res.data;
            //然后把本地数据加入添加的数据库

            addinfo.addinfolist($scope.organdata,true);
            $scope.addid=addinfo.addshow()[0].length+1;
        });
        //type 和text 统一
        $scope.jump=function(n){
            if(n == "book")
            {
                $scope.addtext="书本";
            }
            if(n == "elect")
            {
                $scope.addtext="电器";
            }
            if(n  == "cloth")
            {
                $scope.addtext="衣服";
            }
            if(n == "food")
            {
                $scope.addtext="食物";
            }
        };
        $scope.submit=function(){
            //新数据
            $scope.detaillist={
                "id":$scope.addid,
                "type": $scope.addtype,
                "text":$scope.addtext,
                "name":$scope.addname,
                "brand":$scope.addbrand,
                "img":$scope.addimg,
                "detailinfo":{
                    "time":$scope.addtime,
                    "address":$scope.addaddress,
                    "price":$scope.addprice,
                    "post":$scope.addpost
                }
            };
            //然后把新添加的数据添加到数据库
            addinfo.addinfolist($scope.detaillist,false);
            //输出一下
            /*
            addinfo.addshow()[0][addinfo.addshow(0)[length-1]].id=addinfo.addshow()[0].length;*/

            $scope.addid=addinfo.addshow()[0].length+1;
            };
    })
   //修改信息
   .controller("correct",function($scope,MyFactory,addinfo){
        //接受信息
        MyFactory.datainfo().then(function(res){
            $scope.cordata=res.data;
            addinfo.addinfolist($scope.cordata,true);
            $scope.cordata=addinfo.addshow()[0];
        });
        //定义一个空的数组
        $scope.black=[];
        //定义检索信息
        $scope.search_id="";
        $scope.search_name="";
        $scope.search_brand="";
        //检索内容
        $scope.f=function(){
          for(var i=0;i<$scope.cordata.length;i++)
          {
            if($scope.cordata[i].id == $scope.search_id)
            {
               $scope.search_data=$scope.cordata[i];
            }
              else if($scope.cordata[i].name == $scope.search_name){
                $scope.search_data=$scope.cordata[i];
            }
            else if($scope.cordata[i].brand == $scope.search_brand){
                $scope.search_data=$scope.cordata[i];
            }
          }
        };
        //确认修改
        $scope.correct=function(data){
            for(var i=0;i<$scope.cordata.length;i++){
                if($scope.search_id == $scope.cordata[i].id)
                {
                    $scope.search_data =$scope.cordata[i];
                }
            }
            window.location="http://localhost:63342/%E9%87%8D%E5%81%9A%E5%9B%BE%E4%B9%A6%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/Angurijs%E7%9A%84%E6%97%A5%E5%B8%B8/html/%E8%B4%AD%E7%89%A9%E8%BD%A6.html#/stastic";

        }
      })
   //删除信息
   .controller("delet",function($scope,MyFactory,addinfo){
        MyFactory.datainfo().then(function(res){
            $scope.alldata=res.data;
            //把原始数据传给添加数据库里面
            addinfo.addinfolist($scope.alldata,true);
            //然后重新赋值
            $scope.alldata=addinfo.addshow()[0];
            //每一页显示10个
            //默认第一页为1；
            $scope.y=0;
            $scope.n1=10;
            //总页数
            $scope.totaln1=Math.ceil($scope.alldata.length/$scope.n1);
            //把总页数放在一个数组里
            $scope.arrayn1=[];
            for(var i=0;i<$scope.totaln1;i++)
            {
                $scope.arrayn1[i]=i+1;

            }
            //分页的数据
            $scope.perdata1=$scope.alldata.slice(0,$scope.n1);
            //跳页
            $scope.jump=function(index){
                $scope.y=index;
                show($scope.y);
            };
            //跳页函数
            function show(n){
                $scope.perdata1=$scope.alldata.slice(n*$scope.n1,(n+1)*$scope.n1);
            };
            //做删除
            $scope.delet=function(index,n){
               $scope.delet_li=n*$scope.n1+index;

                addinfo.deletbook($scope.delet_li);
                show(n);

            }
        });
});


