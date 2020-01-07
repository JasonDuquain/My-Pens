new WOW().init();
$(document).ready(function() {
	$('.timeline-item').not(":first").addClass('wow fadeInUp').attr('data-wow-duration', '1.35s').attr('data-wow-delay', '.25s');
});