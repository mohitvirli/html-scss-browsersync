$(document).ready(function () {
	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 67) {
			$('.navbar').addClass('scroll');
		} else {
			$('.navbar').removeClass('scroll');
		}
	});
});