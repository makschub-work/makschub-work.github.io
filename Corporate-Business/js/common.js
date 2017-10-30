$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $(".slide-two").owlCarousel({
		dots:true,
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:6000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:6
            }
        }
    });


});
