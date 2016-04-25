$(function(){
    var h=document.documentElement.clientHeight;
    var f=true;
    $('.bt').click(function(){
        if(f){
            $('.max-nav').animate({height:h-44},function(){f=false})
        }else{
            $('.max-nav').animate({height:'0'},function(){f=true})
        }

    })


    //banner start
    var now=0;
    var next=0;
    var flag=true;
    var $img=$('.banner .img');
    var $dian=$('.dian');
    $img.eq(0).css({'left':0});
    $dian.eq(0).css('background','red');
    var t=setInterval(wheel,2000);//一个关于时间的函数调用。实现自动水平轮播
    function wheel(){    //wheel函数体
        if(!flag){       //此间段开关为关。返回
            return
        }
        flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
        next++;
        if(next==$img.length){
            next=0;
        }
        $img.eq(next).css('left','100%').animate({left:0},function(){flag=true});
        $img.eq(now).animate({left:'-100%'});


        $dian.eq(now).css('background','black');
        $dian.eq(next).css('background','red');
        now=next;


    }
    $('.banner').hover(function(){clearInterval(t)},function(){t=setInterval(wheel,2000)});

    //选项卡

    $dian.click(function(){
        var index=$(this).index();
        if(!flag||index==now){return}
        flag=false;
        if(index<now){
            $img.eq(index).css('left','100%');
            $img.eq(now).animate({left:'-100%'});

        }
        if(index>now){
            $img.eq(index).css('left','-100%');
            $img.eq(now).animate({left:'100%'});

        }
        $dian.eq(now).css('background','black');
        $dian.eq(index).css('background','red');
        $img.eq(index).animate({left:0},function(){flag=true});
        now=next=index;
    })




    $('.btn1').click(function(){
        if(!flag){       //此间段开关为关。返回
            return
        }
        flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
        next--;
        if(next==-1){
            next=$img.length-1;
        }
        $img.eq(next).css('left','-100%').animate({left:0},function(){flag=true});
        $img.eq(now).animate({left:'100%'});


        $dian.eq(now).css('background','black');
        $dian.eq(next).css('background','red');
        now=next;

    })
    $('.btn2').click(function(){wheel()})

    //wz
    $('.wz h3').click(function(){
        if(document.documentElement.clientWidth<=768)
        $(this).next('ul').slideToggle('20')
    })

})