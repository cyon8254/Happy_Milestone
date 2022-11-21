const $submitBtn = $('.submitBtn');

/*----------------------------이메일 유효성 검사----------------------------*/
const $email = $('#email');
const existingEmail = $email.val();
const $certificationBtn = $('.certificationBtn');
const $certification = $('#certification');
let emailFlag = false;
let emailCheckFlag = false;
let $warningMsg;
let tempEmail;

function email_check(email) {
    var regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));
}

$certificationBtn.on('click', function () {
    var email = $(this).prev().val();
    $warningMsg = $(this).parent().next().next();
    $certification.attr("disabled", true);
    if (email == '' || email == 'undefined') {
        $warningMsg.show();
        $warningMsg.find(".warningMsg").css("color", "rgb(255, 64, 43)");
        $warningMsg.find(".warningMsg").text('이메일을 입력해 주세요');
        $email.focus();
        emailFlag = false;
        return;
    }
    if (!email_check(email)) {
        $warningMsg.show();
        $warningMsg.find(".warningMsg").css("color", "rgb(255, 64, 43)");
        $warningMsg.find(".warningMsg").text('이메일 형식이 유효하지 않습니다.');
        $email.focus();
        emailFlag = false;
        return false;
    } else {
        $warningMsg.show();
        $warningMsg.find(".warningMsg").css("color", "rgb(79 189 18)");
        $warningMsg.find(".warningMsg").text('입력하신 이메일로 인증번호가 전송되었습니다.');
        tempEmail = email;
        $certification.attr("disabled", false)
        $certification.focus();
        emailFlag = true;
    }
});

$email.on('blur', function () {
    var email = $(this).val();
    $warningMsg = $(this).parent().next().next();
    $submitBtn.attr("disabled", true);
    // $nextWarningMsg = $(this).closest('.inputWrap').next().find('.warningMsg').parent()
    if (!(email == tempEmail)) {
        $warningMsg.find(".warningMsg").css("color", "rgb(255, 64, 43)");
        $warningMsg.find(".warningMsg").text('이메일이 변경 되었습니다 인증을 다시 받아주세요');
        emailFlag = false;
        // $nextWarningMsg.hide();
        $certification.attr("disabled", true);
    }
});

$certification.on('blur', function () {
    emailCheckFlag = false;
    if (emailFlag) {
        $warningMsg = $(this).next();
        if (!$certification.val()) {
            $warningMsg.show();
            $warningMsg.find(".warningMsg").css("color", "rgb(255, 64, 43)");
            $warningMsg.find(".warningMsg").text("인증번호를 입력해 주세요")
        } else if ("1234" == $certification.val()) {
            $warningMsg.hide();
            emailCheckFlag = true;
            // $warningMsg.css("color", "rgb(79 189 18)");
            // $warningMsg.text("인증번호가 일치합니다.")
        } else {
            $warningMsg.show();
            $warningMsg.find(".warningMsg").css("color", "rgb(255, 64, 43)");
            $warningMsg.find(".warningMsg").text("인증번호가 일치하지 않습니다.")
        }
    }
    joinSubmit();
})

/*----------------------------닉네임 유효성 검사----------------------------*/
const $nickName = $('#nickName');
const existingNickName = $nickName.val();
let nickNameCheckFlag = false;

$nickName.on('blur', function () {
    $submitBtn.attr("disabled", true);
    nickNameCheckFlag = false;
    /*특수문자 포함되었는지 검사*/
    var nickNameCheck = /[#?!@$%^&*-]/;
    /*자음만 쓰였는지 검사*/
    var nickNameConsonantsCheck = /[ㄱ-ㅎ]/;
    /*공백검사*/
    var nickNameSpaceCheck = /\s/;

    $warningMsg = $nickName.next();
    if (nickNameCheck.test($nickName.val())) {
        $warningMsg.show();
        $warningMsg.find('.warningMsg').text("닉네임은 특수문자, 공백를 포함할 수 없습니다.");
        return;
    }
    if (nickNameSpaceCheck.test($nickName.val())) {
        $warningMsg.show();
        $warningMsg.find('.warningMsg').text("닉네임은 특수문자, 공백를 포함할 수 없습니다.");
        return;
    }
    if (nickNameConsonantsCheck.test($nickName.val())) {
        $warningMsg.show();
        $warningMsg.find('.warningMsg').text("닉네임은 자음을 단독으로  사용할 수 없습니다.");
        return;
    }
    nickNameCheckFlag = true;
    $warningMsg.hide();
    $warningMsg.find('.warningMsg').text("");
    joinSubmit();
})

/*----------------------------이름 유효성 검사----------------------------*/
const $name = $('#name');
const existingName = $name.val();
let nameCheckFlag = false;

var nameCheck = /^[가-힣]{2,15}$/;

$name.on('blur', function () {
    $submitBtn.attr("disabled", true);
    nameCheckFlag = false;
    if (!nameCheck.test($name.val())) {
        $name.next().show();
        $name.next().find('.warningMsg').text("이름을 정확히 입력해 주세요.");
    } else {
        $name.next().hide();
        $name.next().find('.warningMsg').text("");
        nameCheckFlag = true;
    }
    joinSubmit();
})

function joinSubmit() {
    console.log("안녕")
    console.log("안녕 1 : " + !(existingEmail == $('#email').val()))
    console.log("안녕 2 : " + emailFlag)

    if (!(existingEmail == $('#email').val())) {
        if (!emailCheckFlag) {
            console.log("이메일")
            return;
        }
    }
    if (!(existingNickName == $('#nickName').val())) {
        if (!nickNameCheckFlag) {
            console.log("닉네임")
            return;
        }
    }
    if (!(existingName == $('#name').val())) {
        if (!nameCheckFlag) {
            console.log("이름")
            return;
        }
    }
    if (!(existingName == $('#name').val()) || !(existingNickName == $('#nickName').val()) || !(existingEmail == $('#email').val())) {
        $submitBtn.attr("disabled", false)
    }
}