/**
 * Created by Administrator on 2017/4/23.
 */
    var count=0;
var timer;
var timer1;
var timer2;
$(function(){
   $(".animate_li").each(function(index){
       $(this).mouseenter(function(){
           clearInterval(timer);
            $(".animate_li1").eq(index).animate({"marginTop":"-140px"},500,"linear");
       });
       $(this).mouseleave(function(){
           $(".animate_li1").animate({"marginTop":"0px"},500,"linear");
           showtime();
       });
   });
    $(document).on("scroll", show);
    $(".draw_li").each(function(index){
        $(this).mouseenter(function(){
            $(".more").css("display","none");
            $(".more").eq(index).css("display","block");
        });
    });
    $(".menul_list").each(function(index){
        $(this).mouseenter(function(){
            $(this).css("color","#960000");
           /* slideToggle��ô�ã�*/
            $(".list").slideToggle();
            $(".res").css("display","none");
            $(".res").eq(index).css("display","block");
        });
        $(this).mouseleave(function(){
            $(this).css("color","black");
            /* slideToggle��ô�ã�*/
            $(".list").slideToggle();
            $(".res").eq(index).css("display","none");
        });
    });

    $(".menul_input").focus(function(){
        $(".menul_input").val("");
    });
    $(".menul_input").blur(function(){
        $(".menul_input").val("HAWEI P10");
    });
  /* $(".main_img").animate({"margin-top":"90px"},500,"linear");*/

    $(".main_bg").each(function(index){
       $(this).mouseenter(function(){
           $(".main_img").eq(index).animate({"margin-top":"70px"},500,"linear");
       });
        $(this).mouseleave(function(){
            $(".main_img").eq(index).animate({"margin-top":"90px"},500,"linear");
        });
    });
    $(".showlist").mouseenter(function(){
        showimg();
        $(".show_img_right").animate({"margin-left":"0px"},1500,"linear")
    });
    $(".showlist").mouseleave(function(){
        clearInterval(timer1);
        $(".show_img_right").animate({"margin-left":"-100px"},1500,"linear")
    });
    $(".click").each(function(index){
        $(this).click(function(){
            $(".showlist").eq(index).css("display","block");
            $(".click").eq(index).css("display","none");
            $(".no-click").eq(index).css("display","block");
        });
    });
    $(".no-click").each(function(index){
        $(this).click(function(){
            $(".showlist").eq(index).css("display","none");
            $(".click").eq(index).css("display","block");
            $(".no-click").eq(index).css("display","none");
        });

    });
    showlubo();
    $(".blue_bg").mouseover(function(){
        $("#blue_iphone").animate({"height":"450px","margin-top":"50px"},500,"linear");
        $(".all").animate({"margin-top":"-20px"},500,"linear");
    });
    $(".blue_bg").mouseleave(function(){
        $("#blue_iphone").animate({"height":"400px","margin-top":"100px"},500,"linear");
    });
    $(".hand").mouseleave(function(){
        $(".all").animate({"margin-top":"20px"},500,"linear");
    });



});

function show() {
    if (parseInt($(document).scrollTop()) > 0) {
        $(".list").css({"position": "fixed", "z-index": "11","margin-top":"62px"});
        $(".fix").css({"position": "fixed", "z-index": "10001","margin-top":"-63px"});

    }
    else {
        $(".list").css({"position": "absolute", "z-index": "10","margin-top":"0px"});
        $(".fix").css({"position": "absolute", "z-index": "10","margin-top":"0px"});

    }

}

function  showimg(){
    var timer1=setInterval(function(){
        $(".show_img").css("display","none");
        $(".show_img").eq(count).css("display","block");
        count++;
        if(count==26)
        {
            count=0;
        }
    },500)
}

function showlubo(){
    var count=0;
    var index=0;
    $(".lun_btn").eq(0).animate({"height":"10px"},500,"linear");
    var timer2=setInterval(function(){
        count++;
        index++;
       if(count==6)
        {
            count=0;
            index=0;
        }
        $(".lunbo_ul").animate({"margin-left":-560*count+"px"},1500,"linear");
        $(".lun_btn").eq(index).animate({"height":"10px"},500,"linear").siblings().animate({"height":"3px"},500,"linear");

    },3000)
}
