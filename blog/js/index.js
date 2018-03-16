$(".dian").click(function(){
    $(".mask").show();
    $(".dao").animate({left:"0"},500)
})
$(".mask").click(function(e){
    $(".dao").animate({left:"-200px"},300);
    $(".mask").hide();
});
$(".so").click(function(){
    console.log(1);
    $(".sousuo").show();
})
$(".del").click(function(){
    console.log(1);
    // console.log($("so"))
    $(".sousuo").hide();
})
$(".ding").click(function(){
    $(document.body).animate({scrollTop:0},100);
    $(document.documentElement).animate({scrollTop:0},100);
})
$(window).scroll(function(){
    var st=$(window).scrollTop();
    if(st>200){
        $(".ding").fadeIn();
    }else{
        $(".ding").fadeOut();
    }
});




