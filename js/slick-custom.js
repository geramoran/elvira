$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
	slidesToShow: 6,
	slidesToScroll: 6,
	asNavFor: '.slider-for',
	dots: true,
	focusOnSelect: true
});