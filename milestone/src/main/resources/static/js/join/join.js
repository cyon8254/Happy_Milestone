let $allCheckbox = $('.allCheckbox');
let $smallCheckbox = $('.smallCheckbox');
const $joinBtn = $('.joinBtn');

// let mouseoverEvent = $joinBtn.on('hover',function()){
//
// }

$allCheckbox.on('click', function () {
    $smallCheckbox.prop('checked', $(this).is(':checked'));
    if ($allCheckbox.is(':checked')) {
        $joinBtn.attr('disabled', false);
    } else {
        $joinBtn.attr('disabled', true);
    }
})

$smallCheckbox.on('click', function () {
    if (!$(this).is(':checked')) {
        $allCheckbox.prop('checked', false);
        $joinBtn.attr('disabled', true);
    }
    if ($smallCheckbox.filter(':checked').length == $smallCheckbox.length) {
        $allCheckbox.prop('checked', true);
        $joinBtn.attr('disabled', false);
    }
})
