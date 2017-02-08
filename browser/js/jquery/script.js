$('document').ready(function() { 

	let navbar = $('navbar');	
	let headerImage = $('#homeHeader') 

	let navBarHeight = navbar[0].scrollHeight;

	headerImage.css('background-position-y', navBarHeight);

	// Make sure it updates on resizes
	$(window).on( 'resize', () => {	
		let newHeight = navbar[0].scrollHeight;
		headerImage.css('background-position-y', newHeight);
	});

});