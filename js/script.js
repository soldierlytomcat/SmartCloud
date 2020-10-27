$(document).ready(function() {
    $('.nav-text').css('color', 'white');
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background', 'white');
        $('.navbar').css('box-shadow', '0px 4px 15px rgba(0, 0, 0, 0.15)');
        $('.nav-text').css('color', 'black');
    } else {
        $('.navbar').css('background', 'transparent');
        $('.navbar').css('box-shadow', '');
        $('.nav-text').css('color', 'white');
    }
});