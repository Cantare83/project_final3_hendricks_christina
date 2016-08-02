$(document).ready(function () {
    $('.menuItem').click(function () {
        //$(this).removeClass('minImg');
        //$(this).addClass('enlargeImg');
        if ($(this).attr('class') === 'minImg') {
            $(this).attr('class', 'enlargeImg');
        }
        else {
            $(this).attr('class', 'minImg');
        }
    });
});
