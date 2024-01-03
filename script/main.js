$(function () {

    //메뉴
    $(".main > li , .sub_bg").hover(function () {
        $(".sub , .sub_bg").stop().slideDown();
    }, function () {
        $(".sub , .sub_bg").stop().slideUp();
    }) //hover .main > li , .sub_bg


    //이미지 슬라이드
    var time = setInterval(left, 3000)

    function left() {
        $(".move").animate({
            "left": "-1920px"
        }, 500, function () {
            $(".move").css({
                "left": "0"
            });
            $(".move").append($(".move li").first());
        }) //
    } //function left

    function right() {
        $(".move").css({
            "left": "-1920px"
        });
        $(".move").prepend($(".move li").last());
        $(".move").animate({
            "left": "0"
        }, 500)

    } //function right



    $(".move , button").hover(function () {
        clearInterval(time)
    }, function () {
        time = setInterval(left, 3000)
    }) //hover move , button


    $(".prev").click(function () {
        right();
    }) //click prev


    $(".next").click(function () {
        left();
    }) //click next


    //도트
    $(".dot a").click(function (event) {
        event.preventDefault();
        $(this).toggleClass("close")
        $(".l_list_2").toggleClass("show")
            }) // click .dot a


}) //jquery