$(function(){
    $(".links .icon").click(function(){
        $(".links .bar").css("display", "block");
        $('.links .icon').addClass('active')
    })
    $(".links .bar .exit").click(function(){
        $(".links .bar").css("display", "none");
        $('.links .icon').removeClass('active')
    })
    $(".links .bar a").click(function(){
        $(".links .bar").css("display", "none");
        $('.links .icon').removeClass('active')
    })
})