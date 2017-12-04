/**
 * Created by Administrator on 2017/3/17.
 */
window.onload=function(){
    $(function(){
        $("#city,#myjd,#jdphone,#carejd,#myservice,#mynav").hover(function(){
            $(this).find("#city-1,#myjd-1,#jdphone-1,#carejd-1,#myservice-1,#mynav-1").css({display:"block"
            });
            $(this).find("li:first").removeClass("srcborder");
            $(this).find("li:first").addClass("listborder");
            $(this).find("#com001").addClass("com002")

            $(this).find("#arrow,#myjd-2,#jdphone-2,#carejd-2,#myservice-2,#mynav-2").removeClass("arrow");
            $(this).find("#arrow,#myjd-2,#jdphone-2,#carejd-2,#myservice-2,#mynav-2").addClass("arrow-1");

        })
        $("#city,#myjd,#jdphone,#carejd,#myservice,#mynav").mouseleave(function(){
            $(this).find("#city-1,#myjd-1,#jdphone-1,#carejd-1,#myservice-1,#mynav-1").css({display:"none"});
            $(this).find("li:first").removeClass("listborder")
            $(this).find("li:first").addClass("srcborder")
            $(this).find("#com001").removeClass("com002")

            $(this).find("#arrow,#myjd-2,#jdphone-2,#carejd-2,#myservice-2,#mynav-2").removeClass("arrow-1");
            $(this).find("#arrow,#myjd-2,#jdphone-2,#carejd-2,#myservice-2,#mynav-2").addClass("arrow");
        })
        $("#fenglei").hover(function(){
            $("#fenglei-1").css({display:"block"});
            $(this).find("#arrow-3-1").addClass("arrow-3-2");
            $(this).find("li").hover(function(){
                $(this).find("#fenglei-1-1,#fenglei-1-2,#fenglei-1-3,#fenglei-1-4,#fenglei-1-5,#fenglei-1-6").css({display:"block"});

            })
            $(this).find("li").mouseleave(function(){
                $(this).find("#fenglei-1-1,#fenglei-1-2,#fenglei-1-3,#fenglei-1-4,#fenglei-1-5,#fenglei-1-6").css({display:"none"});

            })
        })
        $("#fenglei").mouseleave(function(){
            $("#fenglei-1").css({display:"none"});
            $(this).find("#arrow-3-1").removeClass("arrow-3-2");

        })

    })

    $(function(){

        var i=0;

        $(".selector-flip").click(function(){
            console.log("==="+i)
            if(i==0){
            $(".selector-panel").slideToggle("fast");
                    $(".selector-flip span").text("收起")
            }
            if(i==1){
            $(".selector-panel").slideToggle("fast");
                    $(".selector-flip span").text("更多选项（能效等级、变频/定频、使用面积 等）")
            }
            i++;
            if(i==2){i=0}
        })
    })

    $(function(){
        for(var i=0;i<4;i++){
        $(".goods-2-2-1").append($(".goods-2-2-1-1").clone());
        }
    })
    var cityname=['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江',
        '内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南',
        '广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏',
        '新疆','港澳','台湾','钓鱼岛','海外']
    var num=cityname.length;
    var city=document.getElementById("city-1")
    for(var i=0;i<num;i++){
        var li=document.createElement("li")
        var a=document.createElement("a")
        a.innerHTML=cityname[i];
        li.appendChild(a);
        city.appendChild(li);
    }


}


