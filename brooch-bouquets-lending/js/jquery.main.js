/* script by ProVerstka */
$(document).ready(function(){
	/* инициализация функций */
    $('.scroll_bottom').click(function(){
        var _href = $(this).attr('href');
        $('body,html').animate({scrollTop:$( _href).offset().top},800);
        return false;
    });

    // $.fancybox.open({
    //     animationEffect : "fade"
    // });



	/* описание функций */
});

/* подключение плагинов */