$(document).ready(function() {

	$('.royalSlider').royalSlider({
		autoScaleSlider: true,
		autoScaleSliderHeight: 420,
		imageScalePadding: 0,
		controlNavigation: 'none',
		arrowsNavAutoHide: false,
		loop: true,
		controlsInside: false,
		navigateByClick: false,
		globalCaption: true,
		autoPlay: {
    		enabled: true,
    		pauseOnHover: true
    	}
    });

    var rs = $('.royalSlider').data('royalSlider');
	
	// Init slide number.
	$('.royalSlider').append('<div class="rsSlideCount"></div>');
	$('.rsSlideCount').text("1 of " + rs.numSlides );

	// Update slide number.
	rs.ev.on('rsAfterSlideChange', function() {
		$('.rsSlideCount').text(rs.currSlideId + 1 + " of " + rs.numSlides);
	});

});