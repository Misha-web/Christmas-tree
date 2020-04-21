$(document).ready(function() {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '370px',
		responsive: [
		{
			breakpoint: 1600,
			settings: {
				centerPadding: '250px',
			}
		},
		{
			breakpoint: 1400,
			settings: {
				centerPadding: '150px',
			}
		},
		{
			breakpoint: 1200,
			settings: {
				centerPadding: '50px',
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				centerMode: false,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		},
		]
	});
});



