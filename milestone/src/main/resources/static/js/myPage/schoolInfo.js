function find() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }
            console.log($("input [name='address']"));
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            $("input[name='zipCode']").val(data.zonecode);
            $("input[name='address']").val(addr);
            // 커서를 상세주소 필드로 이동한다.
            $("input[name='addressDetail']")[0].focus();
        }
    }).open();
}

/* -----------------------은행 목록 드롭다운----------------------- */
const $moreSelect = $('div.inputCos');
const $moreSelectList = $('div.moreSelectWrap');
const $moreSelectItems = $('div.moreSelectItem');
const $inputBank = $('input[name = "bank"]');

$moreSelectItems.on('click', function () {
    console.log($(this).text());
    $inputBank.css("color", '#303441');
    $inputBank.val($(this).text());
    $moreSelectList.hide();
})

document.addEventListener('click', function (e) {
    if (!(e.target == $moreSelectList[0])) {
        if ($moreSelectList.css("display") == 'block') {
            $moreSelectList.hide();
            return;
        }
    }
    if ($(e.target).closest('.inputCos')[0] === $moreSelect[0]) {
        $moreSelectList.toggle();
    }
})

/*--------------------------게시글 작성 글자수 제한----------------------------*/
const $textareaCos = $('.textareaCos');
const $contentLength = $('.contentLength');
const maxContent = 500;

$textareaCos.keyup(function (e) {
    $contentLength.text($textareaCos.val().length)
    if ($textareaCos.val().length > maxContent) {
        $textareaCos.val($textareaCos.val().substring(0, maxContent));
        $contentLength.text(maxContent);
    }
})


/*-----------------------------------사진 슬라이드-------------------------------*/
/*사진 추가 썸네일*/
// const $fileTest = $(`#schoolImg`);
// const $thumbnail = $(`.profile`);
//
// $fileTest.on('change',function(e){
//     var reader = new FileReader();
//     let text = "";
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = function(e){
//         console.log("안들어왔니?");
//         let url = e.target.result;
//         text += `<div class = "imgsWrap">`;
//         if(url.includes('image')){
//             text += `<img src="` + url +`" width="136" height="100">`;
//             // $thumbnail.css('background-image', "url('" + url + "')");
//         }else{
//             text += `<img src="/imgs/fix/normalProfile.png" width="136" height="100">`;
//             // $thumbnail.css('background-image', "url('imgs/fix/normalProfile.png')");
//         }
//         text += `</div>`;
//         console.log(text);
//         console.log("text");
//         $('.imgList').append(text);
//     }
//
// })

/*사진 추가 썸네일*/
const $fileTest = $(`#schoolImg`);
const $thumbnail = $(`.profile`);

$fileTest.on('change',function(e){
    var reader = new FileReader();
    let text = "";
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(e){
        let url = e.target.result;
        text += `<div class = "imgsWrap">`;
        if(url.includes('image')){
            text += `<img src="` + url +`" width="136" height="100">`;
            // $thumbnail.css('background-image', "url('" + url + "')");
        }else{
            text += `<img src="/imgs/fix/normalProfile.png" width="136" height="100">`;
            // $thumbnail.css('background-image', "url('imgs/fix/normalProfile.png')");
        }
        text += `</div>`;
        $('.imgList').append(text);
        if($('.imgsWrap').length > 0){
            $('.imgBox').show();
        }else{
            $('.imgBox').hide();
        }
    }

})

/*-----------------------------------유효성 검사-------------------------------*/


