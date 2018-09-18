/**
 * Created by Administrator on 2017/4/15.
 */
$(function () {
    $(".li_List").each(function (index) {
        $(".li_List").eq(0).click(function () {
            $(".right_1").css("display", "block");
        });
        $(".li_List").eq(2).click(function () {
            $(".right_2").css("display", "block");
        });
        $(".right_2").mouseleave(function () {
            $(this).css("display", "none");
        });
        $(this).hover(function () {
            $(".index_1").eq(index).css("display", "block");
        }, function () {
            $(".index_1").eq(index).css("display", "none");
        });
    });
    $("#del").click(function () {
        $(".right_1").css("display", "none");
    });
    $(".input").focus(function () {
        $(this).val("");
    });
    $(".input_1").each(function (index) {
        $(this).blur(function () {
            if ($(this).val() == "") {
                $(".warn").eq(index).css("display", "block");
                $(".input_1").eq(index).css("border", "1px red dashed");
            }
            else {
                $(".warn").eq(index).css("display", "none");
                $(".input_1").eq(index).css("border", "1px rgba(192, 192, 192, 0.43) solid");
            }
        });
    });

   $(".hover").each(function(index){
     $(this).mouseenter(function(){
         $(this).css("backgroundColor","silver").siblings().css("backgroundColor","#F1F1F1");
         $(".s1").css({"backgroundColor":"#F1F1F1","color":"black"});
         $(".s1").eq(index).css({"backgroundColor":"#dd0000","color":"white"});

      });
   });
    $(".div_1").each(function(index){
        $(this).mouseenter(function(){
            $(this).css("backgroundColor","silver").siblings().css("backgroundColor","#F1F1F1");
            $(".div_1_1").css("color","black");
            $(".div_1_1").eq(index).css("color","blue");
            $(".div_1_2").css({"backgroundColor":"#F1F1F1","color":"black"});
            $(".div_1_2").eq(index).css({"backgroundColor":"red","color":"white"});
        });
    });
    $(".div_2").each(function(index){
        $(this).mouseenter(function(){
            var count=index+1;
            $(this).css("backgroundColor","silver").siblings().css("backgroundColor","#F1F1F1");
          });
    });
    $(".div_3").each(function(index){
        $(this).mouseenter(function(){
            var count=index+1;
            $(this).css("backgroundColor","silver").siblings().css("backgroundColor","#F1F1F1");
          });
    });
    $(".div_2_2").each(function(index){
        $(this).mouseenter(function(){
            $(".div_2_red").css({"backgroundColor":"#F1F1F1","color":"black"});
            $(".div_2_red").eq(index).css({"backgroundColor":"red","color":"white"});
        });
    });
    $(".toll_li").each(function(index){
        $(this).mouseenter(function(){
                $(this).css("color","#e00000").siblings().css("color","black");
                $(".title").css("display","none");
                $(".title").eq(index).css("display","block");

            }
        );
        $(".title2_1").mouseleave(function(){
            $(".title2_1").css("display","none");
        });
    });
    $(".toll_li_1").each(function(index){
        $(this).mouseenter(function(){
                $(".title2_1").css("display","block");
            }
        );
        $(".title2_1").mouseleave(function(){
            $(".title2_1").css("display","none");
        });
    });
    $(".toll_li_2").mouseenter(function(){
        $(".title2_1").css("display","none");
    });
    $(document).on("scroll", show);

});
function show() {
    if (parseInt($(document).scrollTop()) > 0) {
        $(".title1").css({"position": "fixed", "z-index": "10"});
        $(".font2").hide();
        $(".left_title").css("padding","0px");
        $(".title2_1").css("margin-top","38px");
    }
    else {
        $(".title1").css("position", "relative");
        $(".font2").show();
        $(".left_title").css("paddingTop","10px");
        $(".title2_1").css("margin-top","0px");

    }

}