/* script by ProVerstka */
$(document).ready(function(){
	/* инициализация функций */
	initSlider()
	/* описание функций */

	function initSlider() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            items:1,
            smartSpeed: 1200,
            autoplay: true,
            autoplayTimeout: 6000,
            animateOut: 'fadeOut'
        })
    }
});

/* подключение плагинов */