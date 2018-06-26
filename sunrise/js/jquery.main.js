/* script by ProVerstka */
$(document).ready(function(){
    initTabs();
    initMainScrean();
    initAccordion();
    initScroll();
    initModal();
    initMobile();

    function initTabs(){
        $('.tabset ul.tab-control li a').on('click', function(){
            var thisHold = $(this).closest(".tabset");
            var _ind = $(this).closest('li').index();
            thisHold.children('.tab-body').children(".tab").removeClass('active');
            thisHold.children('.tab-body').children("div.tab:eq("+_ind+")").addClass('active');
            $(this).closest("ul").find(".active").removeClass("active");
            $(this).parent().addClass("active");
            return false;
        });
    }
    function initMainScrean() {
        $('.currency_btn').click(function() {
            $(this).find('.currency').toggle('slow')
        });
        $('.currency li span').click(function(e){
            var _text = $(this).text();
            $(this).closest('.currency_btn').find('.curen').val(_text);
        });
        $('.attachments_btn').click(function() {
            $('.money').toggle('slow', function () {
                $(this).parent().toggleClass('active');
            });
        });
        $('.money li').click(function(e){
            $('.money-btn').val( $(this).text());
            // $('.money').slideUp();
        });
        $(document).on('click touchstart', function(event) {
            if ($(event.target).closest('.currency_btn, .money, .attachments_btn').length) return;
            $('.money').slideUp();
            $('.currency').slideUp();
            $('.label').removeClass('active');
            event.stopPropagation();
        });
    }
    function initAccordion() {
        $(".item .heading").click(function(e){
            $(this).next().slideToggle(400,function(){
                $(this).parent().toggleClass('active');
            });
            e.preventDefault();
        });
    }
    function initScroll() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    }
    function initModal() {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }
    function initMobile() {
        $("#navToggle").click(function() {
            $(this).toggleClass("active");
            $(".overlay").toggleClass("open");
            $("body").toggleClass("locked");
        });
    }
});
