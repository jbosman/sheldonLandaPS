$('document').ready(function() { 

	let navbar = $('navbar');	
	let headerImage = $('#homeHeader') 

	let navBarHeight = { height: navbar[0].clientHeight };

	headerImage.css('background-position-y', navBarHeight);

	// Make sure it updates on resizes
	$(window).on( 'resize', () => {	
		navBarHeight.height = navbar[0].clientHeight;
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
						scrollTop: target.offset().top - $('navbar')[0].clientHeight
					}, 1500);
						return false;
					}
			}
		});
	});

	let sections = $('.navAtag');

	sections = Array.prototype.slice.call(sections)

	let wayPoints = sections.forEach( (atag) => { //eslint-disable-line
		
		let atagName = atag.hash.slice(1);

		new Waypoint({ // eslint-disable-line
			element: document.getElementById(atagName),
			handler: function(direction) { // eslint-disable-line no-undef
			if( direction === 'down'){
				$('.navAtag').css('color', '#000')
				$('#atag' + atagName + 'Desk').css('color', '#FF0000')
				$('#atag' + atagName + 'Mobile').css('color', '#FF0000')
			}
			}, offset: 100 
		})

		new Waypoint({ // eslint-disable-line
			element: document.getElementById(atagName),
			handler: function(direction) { // eslint-disable-line no-undef
			if( direction === 'up'){
				$('.navAtag').css('color', '#000')
				$('#atag' + atagName + 'Desk').css('color', '#FF0000')
				$('#atag' + atagName + 'Mobile').css('color', '#FF0000')
			}
			}, offset: -100 
		})
	})

});