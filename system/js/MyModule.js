/**
 * Created by home on 2017/8/1.
 */
var app=angular.module("MyApp",["ngRoute"])
        .factory("MyFactory",function($http){
            var datainfo={};
            return {
                datainfo:function(){
                    return $http.post("../stastic.txt").success(function(data){
                        return data;
                    }).error(function(){
                        alert("404");
                    });
                }
            }
        })
        .factory("insert",function(){
           //建立一个空数组
           var good=[];
           return{
               insertinfo:function(b){
                   good.push(b);
               },
               selectinfo:function(){
                   return good;
               }
           }
    })
        .factory("addinfo",function(){
        //首先建立一个数组
        var datainfo=[];
        return{
            //加载新的数据 a为新的数据  http表示该数据是第一次加载还是N次加载，第一次加载的话，http=true;
            addinfolist:function(a,http){
                if(http==true)
                {
                    datainfo.push(a);
                }
                else
                {
                    datainfo[0].push(a);
                }
            },
            addshow:function(){
                return datainfo;
            },
            deletbook:function(index){
                datainfo[0].splice(index,1);
            }
        }
    });
