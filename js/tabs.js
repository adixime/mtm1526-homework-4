//Javascript Document

$(document).ready(function () {
	
	$('.tabs div:not(:first-child)').hide();
	
	$('.buttons a').on('click',function (e) {

		$('.buttons .current').removeClass('current');
		var tabToShow = $(this).attr('href');
		
		$('.tabs div').hide();
		
		$(tabToShow).slideDown("Slow");
		$(this).addClass('current');				
			
	});
});