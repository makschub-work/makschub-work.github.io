$(function() {
    console.log('func');
    $(document).ready(function() {
        console.log('tyt');
        document.getElementById('toggler').onclick = function() {
            console.log(this);
            openbox('box', this);
            return false;
        };
    });
    function openbox(id, toggler) {
        var div = document.getElementById(id);
        toggler.classList.toggle('plus');
        div.classList.toggle('hidden');
    };

    console.log('func');
    $(document).ready(function() {
        console.log('tyt');
        document.getElementById('toggler2').onclick = function() {
            console.log(this);
            openbox('box2', this);
            return false;
        };
    });
    function openbox(id, toggler2) {
        var div = document.getElementById(id);
        toggler2.classList.toggle('plus');
        div.classList.toggle('hidden');
    };

    console.log('func');
    $(document).ready(function() {
        console.log('tyt');
        document.getElementById('toggler3').onclick = function() {
            console.log(this);
            openbox('box3', this);
            return false;
        };
    });
    function openbox(id, toggler3) {
        var div = document.getElementById(id);
        toggler3.classList.toggle('plus');
        div.classList.toggle('hidden');
    };

    console.log('func');
    $(document).ready(function() {
        console.log('tyt');
        document.getElementById('toggler4').onclick = function() {
            console.log(this);
            openbox('box4', this);
            return false;
        };
    });
    function openbox(id, toggler4) {
        var div = document.getElementById(id);
        toggler4.classList.toggle('plus');
        div.classList.toggle('hidden');
    };

    $('body').append('<button class="btn_up" />');

    $('.btn_up').click(function(){
        $('body').animate({'scrollTop': 0}, 1000);
        $('html').animate({'scrollTop': 0}, 1000);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.btn_up').addClass('active');
        }
        else{
            $('.btn_up').removeClass('active');
        }
    });

});
