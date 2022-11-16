/* 달력 헤드 */
const $prevBtn = $('.prevMonth');
const $nextBtn = $('.nextMonth');
const $nowMonth = $('.nowMonth');
let $dateScope;

let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let year = todayYear;
let month = todayMonth;
let planDates = [];
let count = 0;


/* 오늘 날짜 */
let todayAr = [today.getFullYear(), today.getMonth()+1, today.getDate()];
let result = todayAr[0]+"년 "+todayAr[1] +"월 "+todayAr[2] +"일";
planDates.push({ "planDay": result });

createCallender();

function createCallender() {
    createScope();
    callender();
}

/* 달력 요소 생성 */
function createScope() {
    let $callenderBody = $('.callenderBody');
    let text = "";
    for (let i = 0; i < 6; i++) {
        text += "<tr>"
        for (let i = 0; i < 7; i++) {
            text += "<td>"
            text += "<div class='daysBackground'>"
            text += "</div>"
            text += "</td>"
        }
        text += "</tr>"
    }
    $callenderBody.append(text);
    $dateScope = $('.daysBackground');
}

/* 달력 생성 */
function callender() {
    count = 0;
    nextCount = 0;
    firstDay = new Date(year, month - 1, 1).getDay();
    lastDate = new Date(year, month - 1, 0).getDate();
    thisDate = new Date(year, month, 0).getDate();
    // pastDate = new Date(year, month, 0).getDate();
    $dateScope.css("background-color", "#fff");
    $nowMonth.text(year + '년 ' + month + '월');

    for (let i = 0; i < $dateScope.length; i++) {
        /* 이전 달 숫자 생성 */
        if (i < firstDay) {
            $dateScope.eq(i).css("color", 'rgb(200, 201, 207)')
            $dateScope.eq(i).text(lastDate - (firstDay - 1) + i);
        }
        /* 현재 달 숫자 생성 */
        if (i >= firstDay && (count <= thisDate)) {
            count++;
            $dateScope.eq(i).css("color", '#303441')
            $dateScope.eq(i).text(count);
            /* 오늘 표시 */
            planDates.forEach(function (plan) {
                let splitSpace = plan.planDay.replace(' ', '');
                let planYear = splitSpace.split('년')[0];
                let planMonth = splitSpace.split('년')[1].split('월')[0];
                let planDate = splitSpace.split('년')[1].split('월')[1].replace('일', '').replace(' ', '');

                if ($dateScope.eq(i).text() == planDate) {
                    if (month == planMonth) {
                        if (year == planYear) {
                            $dateScope.eq(i).css({"color":"rgb(0 95 255)"});
                        }
                    }
                }
            })
        }
        /* 다음 달 숫자 생성 */
        if (count > thisDate) {
            nextCount++;
            $dateScope.eq(i).css("color", 'rgb(200, 201, 207)')
            $dateScope.eq(i).text(nextCount);
        }
    }
}


/* 이전버튼 */
$prevBtn.on('click', function () {
    /* 달력 헤더  */
    month = month - 1;
    if (month == 0) {
        month = 12;
        year--;
        if (year < 0) {
            year = 99;
        }
    }
    $nowMonth.text(year + '년 ' + month + '월');
    /* 달력 바디 */
    callender();

})

/* 다음버튼 */
$nextBtn.on('click', function () {
    /* 달력 헤더  */
    month = month + 1;
    if (month == 13) {
        month = 1;
        year++;
    }
    $nowMonth.text(year + '년 ' + month + '월');
    /* 달력 바디 */
    callender();
})


/* 달력 바디 호버 이벤트*/
const $tds = $('td');
$tds.hover(function () {
    $(this).find('.daysBackground').css("filter", "brightness(90%)");
}, function () {
    $(this).find('.daysBackground').css("filter", "brightness(100%)");
})





/* 날짜 클릭 */
/* 눌린 날짜 */
let saveDate="";
/* 날짜 플래그 */
let checkC = false;

$tds.on('click', function(){
    var str =year+"년"+month+"월"+this.innerText+"일";

    for(var i=0; i<42; i++){
        if(parseInt($("td")[i].innerText)<$(this).find('td').index){
            console.log($(this).find('td').index);
            console.log($("td")[i]);
        }
    }
    if(parseInt(this.innerText)<today.getDate()){
        alert("지난 날짜는 선택하실 수 없습니다");
    }else{
        if(saveDate=="" && !checkC){
            /* 선택 */
            $(this).find(".daysBackground").css("background-color", "#ffd400");
            saveDate+=str;
            checkC = true;
            // console.log('추가완료 : '+saveDate);
        }else if(saveDate===str && checkC){
            /* 선택 해제 */
            $(this).find(".daysBackground").css("background-color", "transparent");
            saveDate="";
            checkC = false;
        }else if(saveDate.length>0){
            /* 날짜를 여러개 선택했을 때*/
            alert("한번에 하루만 선택하실 수 있습니다");
        }
    }
    // console.log(saveDate);
})


/* $tds.on('click', function(){
        var str =""+year+month+this.innerText;

    // if(parseInt(this.innerText)<today.getDate() && month>today.getMonth){
    if(parseInt(this.innerText)<today.getDate() || month>today.getMonth){
        alert("지난 날짜는 선택하실 수 없습니다");
    }else{
        if(saveDate.length==0){
            console.log('무조건추가');
            $(this).find(".daysBackground").css("background-color", "#ffd400");
            saveDate.push(str);
        }else{
            for (var i = 0; i < saveDate.length; i++) {
                if(str !== saveDate[i]){
                    $(this).find(".daysBackground").css("background-color", "#ffd400");
                    saveDate.push(str);
                    console.log(saveDate[i] +'와 겹치지 않아서 추가했어');
                    break;
                }else if(str===saveDate[i]){
                    $(this).find(".daysBackground").css("background-color", "transparent");
                    saveDate.splice(i,1);
                    console.log('누른'+str+'과'+saveDate[i] +'이 겹쳐서 삭제했어');
                }
            }
        countC++;
        console.log(saveDate);
        }
    }
})
 */
/* 이전날짜 클릭막기 버그*/
/* 이전달, 다음달 날짜클릭 막기 */
/* month가 1자리 일경우 앞에 '0'붙여야 뿌려줄때 자릿수로 자를수있음 */
/* 날짜 저장했으면 뿌려주기 */