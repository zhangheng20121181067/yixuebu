/**
 * Created by Administrator on 2017/3/8.
 */
$(function(){
    $('li.leftNav').stop().click(function(){        /* .firstUl>li*/
        $(this).children(".sub").slideToggle(700);     /* slideToggle*/
        $(this).children('a').addClass("open");   /* .next()      toggleClass*/

        $(this).siblings().children('a').removeClass("open");
        $(this).siblings().children('.sub').hide();
    });

});