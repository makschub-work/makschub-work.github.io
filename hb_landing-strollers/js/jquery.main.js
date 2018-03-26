/* script by ProVerstka */
$(document).ready(function(){
	/* инициализация функций */
    $('.slide-one').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop:true,
        nav:false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 4000
    });

    $('.slide-two').owlCarousel({
        items: 1,
        loop:true,
        smartSpeed: 1000,
        nav:true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000
    })
	/* описание функций */
});

/* подключение плагинов */