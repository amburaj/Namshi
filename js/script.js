/* Share and Loader functions */
$(document).ready(function() { 

	setTimeout(function() { $(".loader").hide(); }, 1000);

	$(".share").on('click',function(){		
		if( $(this).hasClass('active') ){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});
});


/* Scroll sticky functions */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".movie_list_nav").addClass("movie_list_nav_active");
    } else {
        $(".movie_list_nav").removeClass("movie_list_nav_active");
    }
});


/* Slick Slider functions */
$(document).ready(function(){
  $('.image_sliding').slick({
    autoplay: true,
  	autoplaySpeed: 2000,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: false,
  	Padding: 10,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});


/* Tab functions */
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


