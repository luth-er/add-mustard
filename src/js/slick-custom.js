/**
 * @description Initializes Slick carousel for "Our Work" section
 * @requires jQuery 3.7.0+
 * @requires slick-carousel 1.8.1
 * @see https://kenwheeler.github.io/slick/ for full Slick documentation
 */

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