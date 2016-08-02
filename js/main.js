$(document).ready(function () {
    $('.menuItem').click(function () {
        if ($(this).attr('class') === 'minImg') {
            $(this).attr('class', 'enlargeImg');
        }
        else {
            $(this).attr('class', 'minImg');
        }
    });

    $('body').backstretch('img/woodbg.jpg');

});
