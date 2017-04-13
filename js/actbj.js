/**
 * Created by Administrator on 2017/3/11.
 */
$(function(){
   /* $(".changeBtn").click(function(){
        console.log(123)
        console.log($(this).index());
        $(this).addClass("opacity").siblings().removeClass("opacity")
    });*/
    $("#pic_list_1 a.next").click(function(){
        $(".btnZt img").eq(1).addClass("opacity");
        $(".btnZt img").siblings().removeClass("opacity");

    });
    $("#pic_list_1 a.prev").click(function(){
        $(".btnZt img").eq(0).addClass("opacity");
        $(".btnZt img").siblings().removeClass("opacity");
    })

    $(".left-btn2").click(function(){
        $(this).addClass("opacity");
        $(".right-btn2").removeClass("opacity");
    });
    $(".right-btn2").click(function(){
        $(this).addClass("opacity");
        $(".left-btn2").removeClass("opacity");
    })

})