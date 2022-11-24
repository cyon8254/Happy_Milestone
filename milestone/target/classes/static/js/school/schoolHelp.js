
/*  작은지역들 플래그 */
// let check = false;
/* 하트 플래그 */
let check2 = false;

$(".location").mouseover(function(){
    $(this).css({"transform":"translateY(-10px)"})
})

$(".location").mouseout(function(){
    $(this).css({"transform":"translateY(0px)"})
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


/* 지역저장 */
let save = [];

/* 지역선택시 지역저장 */
$(".location2").click(function(){
    $(".wholeLocation").css({"background-color":"#f2f3f7"})
    $(".wholeLocation").css({"border":"none"})

    if($(this).css('background-color')=='rgb(242, 243, 247)'){
        $(this).css({"background-color":"transparent"})
        $(this).css({"border":"solid 1px black"})
        /* 담긴게 없다면 무조건 push */
        if(save.length==0){
            save.push($(this).text());
        }else if(save.length>0){
            for (var i = 0; i < save.length; i++) {
                /* 담을 지역이 담은 지역과 겹치는게 없다면 push */
                if(save[i] != $(this).text()){
                    save.push($(this).text());
                    break;
                }
            }
        }
    }else{
        $(this).css({"background-color":"#f2f3f7"})
        $(this).css({"border":"none"})
        save.forEach(element => {
            /* 담을 지역이 담은 지역과 겹치는게 있다면 splice */
            if(element == $(this).text()){
                save.splice(save.indexOf(element),1);
            }
        });
    }
    console.log(save);
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
    /*$(this).css({"background-color":"rgb(102 102 102 / 29%)"})*/
    $(this).css({"border-radius":"3px"})
    $(this).css({"transition":"all .2s ease"})
})
$("span.heart").mouseout(function(){
    /*$(this).css({"background-color":"transparent"})*/
    $(this).css({"border-radius":"3px"})
    $(this).css({"transition":"all .2s ease"})
})


/*  페이지 이동  */
const $pageNumberLink = $('.page-number-link');

$pageNumberLink.on('mouseover', function () {
    $(this).css('background-color', '#f4f6fa');
    $(this).css('color', '#009ef7');
})

$pageNumberLink.on('mouseout', function () {
    $(this).css('background-color', '#fff');
    $(this).css('color', '#5e6278');
})

$(".dropdown").hide();

if (window.matchMedia('(max-width: 768px)').matches){
    $('div.loactions').css('display','none');
    $('div.dropdown').css('display','block');
    $('div.totalCount2').css('display','none');
}

window.onresize = function(){
    document.location.reload();
};

/*=====================반응형 지역선택=========================*/
var checkDrop=false;
var checkLocal={checkSeoul:false,checkKyungki:false,checkKangwon:false,
    checkChungcheong:false,checkJeolla:false,checheckGyeong:false,checkJeju:false};

/* 사용자가 선택한 지역 */
var saveLocal=[];

/* 드롭다운 버튼 */
$("button.dropbtn").on('click',function(){
    if(!checkDrop){
        $(".dropdown-content").show();
        checkDrop=true;
    }else{
        $(".dropdown-content").hide();
        checkDrop=false;
        var count=0;
        /* 눌린 값들 불러와서 검색창에 띄우기 */
        var changedPlaceHolder="";
        console.log("saveLocal : "+saveLocal);
        if(saveLocal.length){
            saveLocal.forEach(element => {
                changedPlaceHolder += "-"+element;
            });
            console.log("changedPlaceHolder : "+changedPlaceHolder);

            placeHolderArr = changedPlaceHolder.split("-");
            console.log("placeHolderArr : "+placeHolderArr);

            var text="";
            /* 저장한 지역들 placeholder에 띄워줌 */
            placeHolderArr.forEach(element => {
                /* element와 일치하는 html의 className이 있으면 해당 값 가져옴 */
                for(var i =0; i<7; i++){
                    if(element == $(".dropLoc").eq(i).attr('class').split(" ")[1]){
                        console.log("element : "+element)
                        if(count<2){
                            text += " "+ $(".dropLoc").eq(i).text();
                            count++;
                        }else{
                            count++;
                        }
                    }
                }
            });
            if(count>2){
                $(".placeholder").text(text.split(" ")[1]+", "+text.split(" ")[2]+" 외 "+(count-2)+"건");
            }else{
                $(".placeholder").text(text);
            }
        }else{
            $(".placeholder").text("전체");
        }
    }
})



/* 드롭다운 버튼 선택(중복가능) */
$(".dropLoc").on('click',function(){

    switch($(this).attr('class').split(" ")[1]+""){
        case "checkSeoul" :
            if(!checkLocal.checkSeoul && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkSeoul=true;
                saveLocal.push("checkSeoul");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkSeoul"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkSeoul=false;
                        }
                    }
                }
            }
            break;
        case "checkKyungki" :
            if(!checkLocal.checkKyungki && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkKyungki=true;
                saveLocal.push("checkKyungki");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkKyungki"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkKyungki=false;
                        }
                    }
                }
            }
            break;
        case "checkKangwon" :
            if(!checkLocal.checkKangwon && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkKangwon=true;
                saveLocal.push("checkKangwon");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkKangwon"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkKangwon=false;
                        }
                    }
                }
            }
            break;
        case "checkChungcheong" :
            if(!checkLocal.checkChungcheong && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkChungcheong=true;
                saveLocal.push("checkChungcheong");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkChungcheong"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkChungcheong=false;
                        }
                    }
                }
            }
            break;
        case "checkJeolla" :
            if(!checkLocal.checkJeolla && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkJeolla=true;
                saveLocal.push("checkJeolla");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkJeolla"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkJeolla=false;
                        }
                    }
                }
            }
            break;
        case "checkGyeong" :
            if(!checkLocal.checkGyeong && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkGyeong=true;
                saveLocal.push("checkGyeong");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkGyeong"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkGyeong=false;
                        }
                    }
                }
            }
            break;
        case "checkJeju" :
            if(!checkLocal.checkJeju && saveLocal){
                $(this).css('background-color','#e2e2e2');
                checkLocal.checkJeju=true;
                saveLocal.push("checkJeju");
            }else{
                $(this).css('background-color','transparent');
                if(saveLocal){
                    for(var i = 0; i<saveLocal.length; i++){
                        if(saveLocal[i]=="checkJeju"){
                            saveLocal.splice(i,1);
                            console.log("splice로 삭제하고 false로 바꿈")
                            checkLocal.checkJeju=false;
                        }
                    }
                }
            }
            break;
    }
    console.log(saveLocal);
});
