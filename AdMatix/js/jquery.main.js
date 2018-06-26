/* script by ProVerstka */
$(document).ready(function(){

	/* инициализация функций */
    $('.nav-btn a, .top-nav a').click(function(){
        var _href = $(this).attr('href');
        $('body,html').animate({scrollTop:$( _href).offset().top},700);
        return false;
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items:4,
        dots:false,
        autoplay: false,
        autoplayTimeout:4000,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('.btn_up').click(function(){
        $('body').animate({'scrollTop': 0}, 1000);
        $('html').animate({'scrollTop': 0}, 1000);
    });

    $(".btn").click(function() {
        //открыть модальное окно с id="myModal"
        $("#myModal").modal('hide');
    });

    $(".btn-2").click(function() {
        //открыть модальное окно с id="myModal"
        $("#myModal").modal('show');
        $("#myModal2").modal('hide');
    });


    $(".item .heading").click(function(e){
        $(this).next().slideToggle(400,function(){
            $(this).parent().toggleClass('active');
        });
        $(this).parent().siblings(".active").children(".expanded").slideUp(400,function(){
            $(this).parent().removeClass('active');
        });
        e.preventDefault();
    });

});

/* подключение плагинов */