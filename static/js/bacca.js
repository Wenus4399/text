/**
 * Created by home on 2017/5/19.
 */
var timer;
var count=0;
var num=0;
var n=0;
var isgo=true;
var a=0;
var iphon=123456;
var pasw=123456;
$(function(){
    //轮播事件
    infolist();
    //鼠标进入轮播事件
    $(".sixth_li").each(function(index){
        $(this).mouseenter(function(){
            clearInterval(timer);
            var shelter=document.createElement("div");
            shelter.className="shelter";
            $(".sixth_li").eq(index).append(shelter);
            num=index-1;
            $(".sixth_span").eq(num).css("display","block");

        });
        $(this).mouseleave(function(){
            $(".shelter").css("display","none");
            $(".sixth_span").css("display","none");
            infolist();
        });
    });
    $(".jump").each(function(index){
        $(this).click(function(){
            if(index==0)
            {
                $("body,html").animate({"scrollTop":  "0"}, 500, "linear")
            }
            if(index==1)
            {
                $("body,html").animate({"scrollTop":  "1600px"}, 500, "linear")
            }
            if(index==2)
            {
                $("body,html").animate({"scrollTop":  "3500px"}, 500, "linear")
            }
        });
    });
   $(".fifth1").each(function(index){
       $(this).mouseenter(function(){

               $(".fifth_img").eq(index).animate({"width":"95%"},500,"linear");
           });

      $(this).mouseleave(function(){
          $(".fifth_img").eq(index).animate({"width":"100%"},100,"linear");
      });
   });
    //滚轴滑动事件
    $(document).on("scroll", show);
    $(document).on("scroll", show2);

     //购物车的出现
     $("#shop").click(function(){
         $(".aleft").css("display","block");

     });
    //购物车的消失
    $("#close").click(function(){
        $(".aleft").css("display","none");
    });
    $("#sign").click(function(){
        $(".sign").css("display","block");
    });
    $("#close1").click(function(){
        $(".sign").css("display","none");
    });

    //把产品加入购物车

    $(".shop").each(function(index){
       $(this).click(function(){
           n++;
          $("#all").html(n);
           //建立新的一行
           var m=1;
           var info="<tr><td class='add_name'></td>  <td class='add_num'></td>  <td class='add_price'></td>         </tr>"
           $(".shop_table").append(info);
           $(".add_name").eq(a).html($(".name").eq(index).html().slice(0,2));
           $(".add_price").eq(a).html($(".name").eq(index).html().substring(23,25));
           $(".add_num").html(m);
           a++;

       });
    });

    $("#iphone").focus(function(){
        $("#iphone").val("");
    });
    $("#passward").focus(function(){
        $("#passward").val("");
    });
    $("#join").click(function(){
        if(($("#iphone").val()== iphon)&&($("#passward").val()== pasw)){
            alert("登录成功，正在跳转");
            $(".sign").css("display","none");
            $("#title").html("欢迎回来~"+iphon);
        }
        else{
            alert("登录失败，请重新尝试");
        };
    });

    //提交
    $("#submit").click(function(){

         if(($("#name").val()!="")&&($("#emal").val()!="")&&($("#text").val()!=""))
         {
             window.location="http://localhost:63342/Bacca/new.html";
         }
        else{
             alert("填写不正确，请重新填写");
             window.location="http://localhost:63342/Bacca/first.html";
         }
    });
    $("#name").focus(function(){
        $(this).val("");
    });
    $("#emal").focus(function(){
        $(this).val("");
    });
    $("#text").focus(function(){
        $(this).val("");
    });
   $(".more").each(function(index){
       $(this).click(function(){
           alert("暂无更多");
       });
   });

    $("#more").click(function(){
        window.location="http://localhost:63342/Bacca/new.html";
    });
});

function show(){
    //背景颜色的改变
    if (parseInt($(document).scrollTop()) >200)
    {
       //第一个的背景颜色变了
        $(".first").css("backgroundColor","#C3ADA5");
    }
    if (parseInt($(document).scrollTop()) <200)
    {
        $(".first").css("backgroundColor","#A9D9CA");
    }

}
function show2(){
    //标题颜色的改变
    if (parseInt($(document).scrollTop()) >2470&&parseInt($(document).scrollTop()) <3470||parseInt($(document).scrollTop()) >4370&&parseInt($(document).scrollTop()) <4970)
    {
        $(".title").css("color","black");
    }
    else{
        $(".title").css("color","white");
    }
}
function infolist(){
   timer=setInterval(function(){
       count++;
       $(".sixth_ul").animate({"margin-left":-270*count+"px"},1000,"linear");
       if(count==4)
       {
           count=0;
           $(".sixth_ul").css("margin_left","0");
       }

   },2000);
}
//总价
function totalprice(){
    var total=0;
    for(var i=0;i<$(".add_name").length;i++)
    {
        total +=$(".add_num").eq(i).html()*$(".add_price").eq(i).html();
    }

    $(".totalprice").html(total);
}


