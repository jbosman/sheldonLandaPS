$('document').ready(function() { // eslint-disable-line no-undef
	
	console.log('hello')

	let rateBox = $('rate-box');	// eslint-disable-line no-undef

	rateBox.hover(function(){
		console.log('haha')
		rateBox.addClass('boxShadow');
	})



});