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

var map = document.getElementById('location');

function newParagraph() {
    var newElement = document.createElement('p');
    newElement.innerHTML = '<p>Directions to The Prancing Pony: <br> From the North, follow Snake Road down along the Bree River until you come to LadyBower Reservoir. We are located in the crook of the river. <br> From the South, follow A6013 north to Snake Road and turn left. Follow Snake Road and you cannot miss us</p>';
    document.getElementsByTagName('aside')[0].appendChild(newElement);
}

map.addEventListener('click', newParagraph);
