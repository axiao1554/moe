//(阿小导航：http://v.axiao.vipxiao.vip) by axiao
$(function(){
    var a_link = [
        ["http://v.axiao.vip?url=皿三昧","点击观看❤️❤️❤️皿三昧"],
        ["http://v.axiao.vip?url=魔道祖师","点击观看❤️❤️❤️魔道祖师"],
        ["http://v.axiao.vip?url=火影忍者","点击观看❤️❤️❤️火影忍者"],
        ["http://v.axiao.vip?url=进击的巨人","点击观看❤️❤️❤️进击的巨人"],
        ["http://v.axiao.vip?url=狐妖小红娘","点击观看❤️❤️❤️狐妖小红娘"],
        ["http://v.axiao.vip?url=多罗罗","点击观看❤️❤️❤️多罗罗"],
        ["http://v.axiao.vip?url=强风吹拂","点击观看❤️❤️❤️强风吹拂"],
        ["http://v.axiao.vip?url=千与千寻","点击观看❤️❤️❤️千与千寻"]
    ];
    // 计时器
    var r = 0;
    var carousel = function(){
        if(r >= 8){
            r = 0;
        }
        $('#m_bgctrl a').attr('href',a_link[r][0]);
        $("#m_bgctrl a").text(a_link[r][1]);
        $("body").css("background","url('images/bg"+r+".jpg') no-repeat fixed top");
        $("body").css("backgroundSize","100%");
        r++;
    }
    carousel();
    var timer = setInterval(carousel,10000);

    //计时锁开关
    var lock = false; 
    $("#m_bgctrl .locker").click(function(){
        if(lock){
            lock = false;
            $(this).css("background","url('picture/e4d97f8858aa4c74fefa852948083da2.png') center no-repeat");
            timer = setInterval(carousel,10000);
        }else{
            lock = true;
            $(this).css("background","url('picture/fed60fc693487e80acc9ae9fd3519ded.png') center no-repeat");
            clearInterval(timer);   //关闭计时器
        }
    })

    //上一页|下一页
    $("#m_bgctrl .prev").click(function(){
        r = r-2;
        if(r < 0){
            r = 7;
        }
        $('#m_bgctrl a').attr('href',a_link[r][0]);
        $("#m_bgctrl a").text(a_link[r][1]);
        $("body").css("background","url('images/bg"+r+".jpg') no-repeat fixed top");
        $("body").css("backgroundSize","100%");
        r++;
    })
    $("#m_bgctrl .next").click(function(){
        if(r >= 8){
            r = 0;
        }
        $('#m_bgctrl a').attr('href',a_link[r][0]);
        $("#m_bgctrl a").text(a_link[r][1]);
        $("body").css("background","url('images/bg"+r+".jpg') no-repeat fixed top");
        $("body").css("backgroundSize","100%");
        r++;
    })


})

//返回顶部
function getTop(){
    $("html,body").animate({scrollTop:0}, 200);
}
// 到达底部
function getBottom(){
    $("html,body").animate({scrollTop:document.body.clientHeight + 'px'}, 200);
}

// 朕知道了
function hide_alert(){
    $(".app-notifier").hide();
}
// 查看
function hide_alert2(){
    $(".wechat-q").slideToggle(1000);
}
// 搜索
function webopen(url,get) {
    window.open(url+'?'+get+'='+$("#opentext").val());
}