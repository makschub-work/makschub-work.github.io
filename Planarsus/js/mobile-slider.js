var func = function() {
    var width = $(window).width();
    if (width < 700) {
        $('#works-text').addClass('slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false
        });
        var tabs = $('#works-tabs');
        tabs.removeAttr('class');
        tabs.addClass('slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            asNavFor: '.slider-nav'
        });
    }
};
$(window).resize(func);
$(document).ready(func);