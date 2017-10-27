$(function () {
    $('img').on('dragstart', function (event) {
        event.preventDefault();
    });
});

// toggle mobile menu
$('#toggle').click(function () {
    $(this).toggleClass('on');
    $(this).siblings('.top_nav').slideToggle();
});
$('.top_nav li a').click(function () {
    if ($(window).width() <= 1050) {
        $('.top_nav').toggle();
        $('#toggle').toggleClass('on');
    }
});

// equalHeights
$.fn.equalHeights = function () {
    var maxHeight = 0,
        $this = $(this);
    $this.each(function () {
        var height = $(this).innerHeight();
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    return $this.css('height', maxHeight);
};
$('[data-equal]').each(function () {
    var $this = $(this),
        target = $this.data('equal');
    $this.find(target).equalHeights();
});
$('.advantages-item-title').equalHeights();
$('.tabs li').equalHeights();
$('.reviews-sl p, .reviews-sl-2 p').equalHeights();
$('.position').equalHeights();

// reviews-sl
$('.reviews-sl').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
});
$('.reviews-sl-2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
});

// scroll button to top
var top_show = 150;
var delay = 400;
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show) $('#toTop').fadeIn();
        else $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});