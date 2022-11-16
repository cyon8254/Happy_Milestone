
/*  작은지역들 플래그 */
let check = false;
/* 하트 플래그 */
let check2 = false;

$(".location").mouseover(function(){
    $(this).css({"transform":"translate(0,-10px)"})
})

$(".location").mouseout(function(){
    $(this).css({"transform":"translate(0,0px)"})
})

$(".wholeLocation").css({"background-color":"transparent"});
$(".wholeLocation").css({"border":"solid 1px black"});

/* 전체보기를 눌렀을 땐 작은 지역들 선택을 해제한다 */
$(".wholeLocation").click(function() {
    $(".wholeLocation").css({"background-color":"transparent"});
    $(".wholeLocation").css({"border":"solid 1px black"});
    $(".location2").css({"background-color":"#f2f3f7"})
    $(".location2").css({"border":"none"})
})

$(".location2").click(function(){
    $(".wholeLocation").css({"background-color":"#f2f3f7"})
    $(".wholeLocation").css({"border":"none"})

    if(!check){
        $(this).css({"background-color":"transparent"})
        $(this).css({"border":"solid 1px black"})
        check =true;
    }else{
        $(this).css({"background-color":"#f2f3f7"})
        $(this).css({"border":"none"})
        check=false;
    }
})


/* 찜하기 하트 버튼 */
$(".redHeart").css({"display":"none"})

$(".heartWrap").click(function(){
    if(!check2){
        $(this).children(".redHeart").css({"display":"inline"})
        $(this).children(".emptyHeart").css({"display":"none"})
        check2=true;
    }else{
        $(this).children(".redHeart").css({"display":"none"})
        $(this).children(".emptyHeart").css({"display":"inline"})
        check2=false;
    }
})

$("span.heart").mouseover(function(){
    $(this).css({"background-color":"rgb(102 102 102 / 29%)"})
    $(this).css({"border-radius":"4px"})
    $(this).css({"transition":"all .2s ease"})
})
$("span.heart").mouseout(function(){
    $(this).css({"background-color":"transparent"})
    $(this).css({"border-radius":"4px"})
    $(this).css({"transition":"all .2s ease"})
})