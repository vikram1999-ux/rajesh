
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('#Header').addClass('shrink');
        }
        else {
            $('#Header').removeClass('shrink');
        }

        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
	autoPlayTimeout:100,
	margin:26,
    responsive:{
        0:{
            items:1,
			dots:false
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },

		
    }
})
});




