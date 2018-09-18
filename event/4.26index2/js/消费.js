/**
 * Created by Administrator on 2017/4/23.
 */
    var count=0;
var timer;
$(function(){
    showtime();
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
           /* slideToggle怎么用？*/
            $(".list").css("display","block");
            $(".res").css("display","none");
            $(".res").eq(index).css("display","block");
        });
        $(this).mouseleave(function(){
            $(this).css("color","black");
            /* slideToggle怎么用？*/
            $(".list").css("display","none");
            $(".res").eq(index).css("display","none");
        });
    });
    $(".erwei_1").mouseenter(function(){
        $(".erwei").css("display","block");
    });
    $(".erwei_1").mouseleave(function(){
        $(".erwei").css("display","none");
    });
    $(".menul_input").focus(function(){
        $(".menul_input").val("");
    });
    $(".menul_input").blur(function(){
        $(".menul_input").val("HAWEI P10");
    });

});
function showtime(){

    timer=setInterval(function(){

        count++;
            $(".animate_ul").animate({"marginLeft": -180 * count + "px"}, 1000, "linear",function(){
                if (count >=6) {
                    $(".animate_ul").css("marginLeft", "0px");
                    count = 0;
                }

                showinfo();
        })},2000);
}

function showinfo(){

    var a=Math.floor(Math.random()*30);
    $(".animate_li1").animate({"marginTop":"0px"},500,"linear");
    $(".animate_li1").eq(a).animate({"marginTop":"-140px"},500,"linear");

}
function show() {
    if (parseInt($(document).scrollTop()) > 0) {
        $(".menul").css({"position": "fixed", "z-index": "11"});
        $(".list").css({"position": "fixed", "z-index": "11","margin-top":"62px"});

    }
    else {
        $(".menul").css("position", "relative");
        $(".list").css({"position": "absolute", "z-index": "10","margin-top":"0px"});

    }

}
