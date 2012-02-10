//Javascript Document

$(document).ready(function () {
	
	$('.tabs div:not(:first-child)').hide();
	
	$('.buttons a').on('click',function (e) {
		var tabToShow = $(this).attr('href');
		
		$('.tabs div').hide();
		
		$(tabToShow).('a').css('background-color', '#9F9')
		$(tabToShow).slideDown("Slow");
			
	});
});