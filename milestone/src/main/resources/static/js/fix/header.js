let navText1 = $("#nav-text1");
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
