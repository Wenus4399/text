/**
 * Created by home on 2017/8/1.
 */
$(function(){
    //点击查看详情
    $(".more_left").click(function(){
        $(".xiangqing").css("display","block");
    });
    $(".close").click(function(){
        $(".xiangqing").css("display","none");
    });
    $(".li_ul").mouseleave(function(){
        $(this).css("display","none");
    });

});