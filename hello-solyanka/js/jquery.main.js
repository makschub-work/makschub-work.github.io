/* script by ProVerstka */
$(document).ready(function(){
	/* инициализация функций */
    initSearch();
    initSearchmob();
    initMobile();
    initSlider();
    initForm();
    initFixedbutton ();
	/* описание функций */
    function initSearch() {
        $("#navToggle").click(function() {
            $(this).toggleClass("active");
            $(".overlay").toggleClass("open");
            $("body").toggleClass("locked");
        });

        $('.search-block .clouse').on('click', function(e){
            e.preventDefault();
            $("#navToggle").removeClass('active');
            $(".overlay").removeClass("open");
            $("body").removeClass("locked");
        })
    }
    function initSearchmob() {
        $("#navToggle-mob").click(function() {
            $(this).toggleClass("active");
            $(".overlay").toggleClass("open");
            $("body").toggleClass("locked-3");
        });
    }
    function initMobile() {
        $("#navToggle-2").click(function() {
            $(this).toggleClass("active");
            $(".overlay-mob").toggleClass("open");
            $("body").toggleClass("locked-2");
        });
        $(".quantity").click(function() {
            $(this).toggleClass("active");
        });
    }
    function initSlider () {
        var totalSlides = $('.slider-articles > .item').length;
        $('.counter .total').text(totalSlides);
        $('.slider-articles').owlCarousel({
            loop:true,
            dots: false,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            },
            onChanged: function(event) {
                var curIndex = event.property.value - 1;
                if(curIndex) {
                   $('.counter .current').text(curIndex);
                }
            }

        });
    }
    function initForm() {
        $('.form').each(function() {
            var form = $(this),
                input = form.find('input');
            form.find('.email').blur(function() {
                var val = $(this).val();
                if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30) {
                    $(this).removeClass('incorrect');
                    $(this).addClass('correct');
                } else {
                    $(this).addClass('incorrect');
                    $(this).removeClass('correct');
                }
            });
            form.on('keyup keydown', '.email', function() {
                var val = $(this).val();
                if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30) {
                    $(this).removeClass('incorrect');
                    $(this).addClass('correct');
                } else {
                    $(this).addClass('incorrect');
                    $(this).removeClass('correct');
                }
            });
            form.submit(function(e) {
                input.trigger('blur');
                if (form.find('.incorrect').lenght) {
                    return false;
                } else {
                    _url = 'php/request.php';
                    values = $(this).serialize();
                    $.ajax({
                        url: _url,
                        type: "post",
                        data: values,
                        success: function() {
                            $('.close_popup').click();
                            $('input[type="text"]').val('');
                        },
                        error: function() {}
                    });
                    return false;
                }
            });

            $(".close-form").click(function() {
                $(".form").toggleClass("hide-form");
                $(".show-p").toggleClass("active");
            });

        });
    }
    function initFixedbutton(){
        var offset = $('.main-header').offset();
        var topPadding = 20;
        $(window).scroll(function() {
            if ($(window).scrollTop() > offset.top) {
                $('.main-header').addClass('btn-fixed')
                //$('#fixed').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
            }
            else {
                $('.main-header').removeClass('btn-fixed')
                //$('#fixed').stop().animate({marginTop: 0});
            }
        });
    }


});

/* подключение плагинов */