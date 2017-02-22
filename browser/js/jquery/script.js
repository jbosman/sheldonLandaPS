$(window).on('load', function(){

	let navbar;
	let backgroundsToAdjust;
	let navBarHeight;

	if( window.innerWidth > 480 ) {
		navbar = $('navbar');	
		backgroundsToAdjust = $('.jq--adjust-background');

		navBarHeight = { height: navbar[0].clientHeight };
		backgroundsToAdjust.css('background-position-y', navBarHeight.height);

		// Make sure it updates on resizes
		$(window).on( 'resize', () => {	
			navBarHeight.height = navbar[0].clientHeight;
			backgroundsToAdjust.css('background-position-y', navBarHeight.height);
		});
	}


	/* Nav scroll */
    
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length && target.offset() ) {
					$('html, body').animate({
						scrollTop: target.offset().top - $('navbar')[0].clientHeight
					}, 1500);
						return false;
					}
			}
		});
	});



	/* Way Points */

	let sections = $('.navAtag');
	let wayPointsHolder = [];

	sections = Array.prototype.slice.call(sections)

	sections.forEach( (atag) => {
		
		let atagName = atag.hash.slice(1);
		
		wayPointsHolder.push( new Waypoint({ 
			element: $(atag.hash),
			handler: function(direction) { 
			if( direction === 'down'){
				$('.navAtag').css('color', '#000')
				$('#atag' + atagName + 'Desk').css('color', '#3498db')
				$('#atag' + atagName + 'Mobile').css('color', '#3498db')
			}
			}, offset: 100 
		}));

		wayPointsHolder.push( new Waypoint({ 
			element: $(atag.hash),
			handler: function(direction) { 
			if( direction === 'up'){
				$('.navAtag').css('color', '#000')
				$('#atag' + atagName + 'Desk').css('color', '#3498db')
				$('#atag' + atagName + 'Mobile').css('color', '#3498db')
			}
			}, offset: -100 
		}) );
	})

});