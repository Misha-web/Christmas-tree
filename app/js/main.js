$(document).ready(function() {
	//wow
	new WOW().init();

	//Smooth scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		let blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;
			$("html, body").animate({
				scrollTop: blockOffset
			}, 1000)
	})

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

	//popup
	$('.js-button-compaign').click(function() {
		$('.js-overlay-compaing').fadeIn();
	});

	$('.js-close-compaing').click(function() {
		$('.js-overlay-compaing').fadeOut();
	});

	$(document).mouseup(function (e) {
		let popup = $('.js-popup-compaing');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0){
			$('.js-overlay-compaing').fadeOut();
		}
	});

	//Map
	let advantage = $('.advantage');
	let	advantageTop = advantage.offset().top;
	$(window).bind('scroll', function() {
		let windowTop = $(this).scrollTop();
		if (windowTop > advantageTop) {
			$('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.4843149381772!2d27.54984321585956!3d53.90536918010003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeb646109f3%3A0x7dad7fbe4e6ae008!2z0L_RgC3Rgi4g0J_QvtCx0LXQtNC40YLQtdC70LXQuSAxLCDQnNC40L3RgdC6LCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2sua!4v1587492789662!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
			$(window).unbind('scroll');
		}
	});
});



