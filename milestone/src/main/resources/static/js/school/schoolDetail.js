let check2 = false;

$("button.zzimButton").mouseover(function(){
    $(this).css({"background-color":"rgb(102 102 102 / 29%)"})
    $(this).css({"border-radius":"3px"})
    $(this).css({"transition":"all .2s ease"})
})
$("button.zzimButton").mouseout(function(){
    $(this).css({"background-color":"transparent"})
    $(this).css({"border-radius":"3px"})
    $(this).css({"transition":"all .2s ease"})
})

$(".redHeart").css({"display":"none"})

$(".zzimButton").click(function(){
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
