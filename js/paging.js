/**
 * Created by Administrator on 2017/3/11.
 */
$(function(){
    function paging(pagesize){
        var arr=[{"title":"关于2013级临床医学五年制“内外妇儿”联考的通知","time":"2016-1-1","url":111},
            {"title":"分子生物学与遗传学首次进入ESI全球排名前1%","time":"2016-1-13","url":222},
            {"title":"2017中美医学教育研讨会征文通知","time":"2016-1-17","url":333},
            {"title":"北京初步实现食品安全检测与监测全覆盖","time":"2016-1-20"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-2-24"},
            {"title":"起底杨秀珠13年逃亡路：辗转多国 亡命天涯","time":"2016-3-10"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-3-14"},
            {"title":"18个月负债12余万元，大学生身陷“连环贷”！","time":"2016-3-18"},
            {"title":"江苏省人民代表大会常务委员会决定任命名单","time":"2016-3-20"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-4-4"},
            {"title":"中国是社会主义建设的典范","time":"2016-4-6"},
            {"title":"奥运史上首个难民代表团!5名难民运动员赴里约","time":"2016-4-24"},
            {"title":"三中院试点电子送达诉讼文书 最快仅用半小时","time":"2016-5-2"},
            {"title":"冬奥会期间京张两地赛区50分钟直达","time":"2016-5-7"},
            {"title":"6名“北京榜样” 走进武警军营","time":"2016-5-19"},
            {"title":"北京农村廉洁研究中心成立","time":"2016-5-24"},
            {"title":"北京初步实现食品安全检测与监测全覆盖","time":"2016-5-30"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-6-6"},
            {"title":"起底杨秀珠13年逃亡路：辗转多国 亡命天涯","time":"2016-6-19"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-6-29"},
            {"title":"18个月负债12余万元，大学生身陷“连环贷”！","time":"2016-6-30"},
            {"title":"江苏省人民代表大会常务委员会决定任命名单","time":"2016-7-6"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-7-15"},
            {"title":"中国是社会主义建设的典范","time":"2016-7-18"},
            {"title":"奥运史上首个难民代表团!5名难民运动员赴里约","time":"2016-7-20"},
            {"title":"大兴一仓库失火 近40辆车救援","time":"2016-7-29"}];
        //console.log(arr);
        var num=pagesize;   //每页显示几条
        var page=0;
        //分页
        function fen(page){
            //主要是看这里===========================
            var start=num*page;//从哪里开始
            var end=start+num;//从这里结束
            //主要是看这里===========================
            //创建列表
            var newsList=$("<ul class='listPage'></ul>");
            //填充数据
            for(var i=start;i<end;i++){
                if(arr[i]){
                    var li=$("<li class='clearfix'></li>");
                    li.html("<a href="+arr[i].url+".html><div class='info floatLeft'>"+arr[i].title+"</div><div class='date floatRight'>"+arr[i].time+"</div></a>");
                    li.appendTo(newsList);
                }
            }
            $(newsList).insertAfter("#newsList h4");
        }
        if(arr.length>num) {
            var btnGroup ="<button  class='floatLeft btn'>首页</button><button class='floatLeft pre btn'>上一页</button><div class='floatLeft'>";
            var pagenn = Math.ceil(arr.length / num);

            for (var i = 1; i < pagenn + 1; i++) {
                btnGroup +="<a class='btn '>"+i+"</a>" ;   /*  ng-class="number==pageNum?'ching':''"*/
            }
            btnGroup +="</div>";
            btnGroup += "<button  class='floatLeft next btn'>下一页</button><button  class='floatLeft btn'>尾页</button><div class='floatLeft  go'><input class='floatLeft' type='text' ><button class='btn'>跳转</button>";
            $(".page").html(btnGroup)
        }

        //初始化第一页的数据
        empty_append(page);
        // $(".page").find("a").eq(0).addClass("ching");

        //上一页
        $(".pre").click(function(){
            if(page==0){
                return false;
            }else{
                page--;
                empty_append(page);
            }
        });

        //下一页
        $(".next").click(function(){
            if(page==pagenn){
                return false;
            }else{
                page++;
                empty_append(page);
            }
        });
        //页码直接跳转
        $(".page").find("a").click(function(){
            // console.log($(this).index())
            page=$(this).index();
            empty_append(page);
        });

        //加样式  分页
        function empty_append(page){
            $(".listPage").empty();
            if(page==0){$(".pre").addClass("disabled");}
            else{$(".pre").removeClass("disabled");};
            if(page==pagenn-1){$(".next").addClass("disabled");}
            else{$(".next").removeClass("disabled");}

            $(".page").find("a").eq(page).addClass("ching").siblings().removeClass("ching");
            fen(page);
        }
    }
    paging(8);
});
