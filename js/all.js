$(function() {
	$('.ie7').abFix();

	$('.js-highlight').each( function() {
		var type = $(this).data('type');

		if (!type) {
			return;
		}

		$(this).snippet( type, {
			style: 'emacs',
			transparent: true
		});
	});	
});