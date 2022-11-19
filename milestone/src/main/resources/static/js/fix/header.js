const navText1 = $("#nav-text1");
const navText2 = $("#nav-text2");
const navText3 = $("#nav-text3");
const navText4 = $("#nav-text4");
const yellow1 = $("#yellow1");
const yellow2 = $("#yellow2");
const yellow3 = $("#yellow3");
const yellow4 = $("#yellow4");


// noinspection DuplicatedCode,DuplicatedCode
$(document).ready(function () {
    $(navText1).hover(function () {
        $(yellow1).show();
    }, function () {
        $(yellow1).hide();
    });
    $(navText2).hover(function () {
        $(yellow2).show();
    }, function () {
        $(yellow2).hide();
    });
    $(navText3).hover(function () {
        $(yellow3).show();
    }, function () {
        $(yellow3).hide();
    });
    $(navText4).hover(function () {
        $(yellow4).show();
    }, function () {
        $(yellow4).hide();
    });
});

/*----------------------------------------------*/
/*--------------------황지수---------------------*/
/*----------------------------------------------*/
const $loginBtn = $('#loginBtn');
const $loginModalWrap = $('.loginModalWrap');
const $loginModalScope = $('.loginModalScope');
const $closeBackground = $('.closeBackground');
const $body = $('body');


document.addEventListener('click', function (e) {
    console.log(e.target)
    console.log($loginModalScope[0])
    if (e.target == $loginModalScope[0]) {
        $loginModalWrap.hide();
        $body.css('overflow', 'auto');
    }
})

$loginBtn.on('click', function () {
    $loginModalWrap.show();
    $body.css('overflow', 'hidden');
})

$closeBackground.on('click', function () {
    $loginModalWrap.hide();
    $body.css('overflow', 'auto');
})


$(function () {
    $(".left_sub_menu").hide();
    $("#close-icon").hide();
    $("#menu-icon").click(function () {
        console.info("메뉴 누름");
        $(".left_sub_menu").fadeToggle(300);
        $("#menu-icon").hide();
        $("#close-icon").show();
        $(".right_sub_menu").hide();
    });
    $("#close-icon").click(function () {
        console.info("닫기 누름");
        $(".left_sub_menu").fadeToggle(300);
        $("#menu-icon").show();
        $("#close-icon").hide();
    });

    $(window).on('resize', function () {
        if (window.innerWidth >= 768) {
            $(".left_sub_menu").hide();
            $("#menu-icon").show();
            $("#close-icon").hide();
        }
    });
});

$(function () {
    $(".right_sub_menu").hide();
    $("#close-icon-right").hide();
    $("#search-icon").click(function () {
        console.info("검색 누름");
        $("#close-icon").hide();
        $(".left_sub_menu").hide();
        $(".right_sub_menu").fadeToggle(300);
        $("#search-icon").hide();
        $("#close-icon-right").show();
    });
    $("#close-icon-right").click(function () {
        console.info("닫기 누름");
        $("#menu-icon").show();
        $(".right_sub_menu").fadeToggle(300);
        $("#search-icon").show();
        $("#close-icon-right").hide();
    });

    $(window).on('resize', function () {
        if (window.innerWidth >= 768) {
            $(".right_sub_menu").hide();
            $("#search-icon").show();
            $("#close-icon-right").hide();
        }
    });
});
