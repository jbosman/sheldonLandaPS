$('document').ready(function() { 

	let navbar = $('navbar');	
	let headerImage = $('#homeHeader') 

	let navBarHeight = { height: navbar[0].scrollHeight };

	headerImage.css('background-position-y', navBarHeight);

	// Make sure it updates on resizes
	$(window).on( 'resize', () => {	
		navBarHeight.height = navbar[0].scrollHeight;
		headerImage.css('background-position-y', navBarHeight.height);
	});

	/* Nav scroll */
    
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - navBarHeight.height
				}, 1500);
					return false;
				}
		}
	});
});

});