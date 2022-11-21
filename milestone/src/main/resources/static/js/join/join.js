/*----------------------------이메일 유효성 검사----------------------------*/
const $email = $('#email');
const $certificationBtn = $('.certificationBtn');
const $certification = $('#certification');
let emailFlag = false;
let emailCheckFlag = false;
let $warningMsg;

function email_check(email) {
    var regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));
}

$certificationBtn.on('click', function () {
    var email = $(this).prev().val();
    $warningMsg = $(this).parent().next();
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
        $certification.focus();
        emailFlag = true;
    }
});

$certification.on('click', function () {
    if (!$email.val()) {
        $email.focus();
    }
})

$certification.on('blur', function () {
    emailCheckFlag = false;
    if (emailFlag) {
        $warningMsg = $(this).closest(".inputWrap").find(".warningMsg");
        if (!$certification.val()) {
            $warningMsg.closest(".flexRow").show();
            $warningMsg.css("color", "rgb(255, 64, 43)");
            $warningMsg.text("인증번호를 입력해 주세요")
        } else if ("1234" == $certification.val()) {
            $warningMsg.closest(".flexRow").hide();
            emailCheckFlag = true;
            joinSubmit();
            // $warningMsg.css("color", "rgb(79 189 18)");
            // $warningMsg.text("인증번호가 일치합니다.")
        } else {
            $warningMsg.closest(".flexRow").show();
            $warningMsg.css("color", "rgb(255, 64, 43)");
            $warningMsg.text("인증번호가 일치하지 않습니다.")
        }
    }
})


/*------------------------비밀번호 안썻을 때와 유효성 검사----------------------*/
const $password = $('#password');
const $checkPassword = $('#checkPassword');
let tempPw = "";
let pwOk = false;

$password.on("blur", function () {
    //8자리 이상, 대문자/소문자/숫자/특수문자 모두 포함되어 있는 지 검사
    var pwCheck = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
    //한글이 포함되었는 지 검사
    var hangleCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    //같은 문자 4번 이상
    var wordCheck = /(\w)\1\1\1/;
    //공백검사
    var spaceCheck = /\s/;

    $warningMsg = $(this).next();
    $warningMsg.find('.warningMsg').css("font-size", "0.875rem");

    if (!$password.val()) {
        $warningMsg.show();
        $warningMsg.css("color", "rgb(255, 64, 43)");
        $warningMsg.find('.warningMsg').text("비밀번호를 입력해주세요.");
        pwOk = false;
        return;
    } else {
        $warningMsg.hide();
        $warningMsg.find('.warningMsg').text("");
    }

    if (!pwCheck.test($password.val())) {
        $warningMsg.show();
        $warningMsg.css("color", "rgb(255, 64, 43)");
        $warningMsg.find('.warningMsg').css("font-size", "0.825rem");
        $warningMsg.find('.warningMsg').text("비밀번호는 영문, 숫자, 특수문자가 조합된 8자 ~ 16만 가능합니다.");
        pwOk = false;
        return;
    } else {
        $warningMsg.hide();
        $warningMsg.find('.warningMsg').text("");
    }

    if (spaceCheck.test($password.val())) {
        $warningMsg.show();
        $warningMsg.css("color", "rgb(255, 64, 43)");
        $warningMsg.find('.warningMsg').text("비밀번호는 공백을 포함할 수 없습니다.");
        pwOk = false;
        return;
    } else {
        $warningMsg.hide();
        $warningMsg.find('.warningMsg').text("");
    }
    joinSubmit();
    pwOk = true;
    tempPw = $password.val();
});

/*----------------------------비밀번호 확인----------------------------*/
let passwordCheckFlag = false;

$checkPassword.on("click", function () {
    if (!pwOk) {
        $password.focus();
    }
})

$checkPassword.on("blur", function () {
    passwordCheckFlag = false;
    $warningMsg = $(this).next()
    $warningMsg.find('.warningMsg').css("color", "rgb(255, 64, 43)");
    if (!$(this).val()) {
        $warningMsg.show()
        $warningMsg.find('.warningMsg').text("비밀번호를 다시 한 번 입력해 주세요.");
    } else {
        if ($(this).val() == tempPw) {
            $warningMsg.show()
            $warningMsg.find('.warningMsg').css("color", "rgb(79 202 10)");
            $warningMsg.find('.warningMsg').text("비밀번호가 일치합니다.");
            passwordCheckFlag = true;
            joinSubmit();
        } else {
            $warningMsg.show()
            $warningMsg.find('.warningMsg').text("비밀번호가 일치하지 않습니다.");
        }
    }
});

/*----------------------------이름 유효성 검사----------------------------*/
const $name = $('#name');
let nameCheckFlag = false;

var nameCheck = /^[가-힣]{2,15}$/;

$name.on('blur', function () {
    nameCheckFlag = false;
    if (!nameCheck.test($name.val())) {
        $name.next().show();
        $name.next().find('.warningMsg').text("이름을 정확히 입력해 주세요.");
    } else {
        $name.next().hide();
        $name.next().find('.warningMsg').text("");
        nameCheckFlag = true;
        joinSubmit();
    }
})

/*----------------------------닉네임 유효성 검사----------------------------*/
const $nickName = $('#nickName');
let nickNameCheckFlag = false;

$nickName.on('blur', function () {
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

/*---------------------------- 가입완료 버튼 활성화----------------------------*/
let allConditionClear = emailCheckFlag && passwordCheckFlag && nameCheckFlag && nickNameCheckFlag && $allCheckboxFlag;
// emailCheckFlag
// passwordCheckFlag
// nameCheckFlag
// nickNameCheckFlag

function joinSubmit() {
    allConditionClear = emailCheckFlag && passwordCheckFlag && nameCheckFlag && nickNameCheckFlag && $allCheckboxFlag;
    console.log("emailCheckFlag : " + emailCheckFlag);
    console.log("passwordCheckFlag : " + passwordCheckFlag);
    console.log("nameCheckFlag : " + nameCheckFlag);
    console.log("nickNameCheckFlag : " + nickNameCheckFlag);
    console.log("$allCheckboxFlag : " + $allCheckboxFlag);
    console.log(allConditionClear);
    console.log("안녕");
    if (allConditionClear) {
        $joinBtn.attr('disabled', false);
    } else {
        $joinBtn.attr('disabled', true);
    }
}

/*-----------------체크박스--------------*/
let $allCheckbox = $('.allCheckbox');
let $allCheckboxFlag = false;
let $smallCheckbox = $('.smallCheckbox');
const $joinBtn = $('.joinBtn');


$allCheckbox.on('click', function () {
    $allCheckboxFlag = false;
    $smallCheckbox.prop('checked', $(this).is(':checked'));
    if ($allCheckbox.is(':checked')) {
        $allCheckboxFlag = true;
        joinSubmit();
    }
})

$smallCheckbox.on('click', function () {
    $allCheckboxFlag = false;
    if (!$(this).is(':checked')) {
        $allCheckbox.prop('checked', false);
        $joinBtn.attr('disabled', true);
    }
    if ($smallCheckbox.filter(':checked').length == $smallCheckbox.length) {
        $allCheckboxFlag = true;
        joinSubmit();
    }
})