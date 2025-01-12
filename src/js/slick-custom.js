$(document).ready(function(){
	$('.our-work__slider-container').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
			}
		]
	});
});