app.directive('welcome', function(navbarFactory) { // eslint-disable-line no-unused-vars
	return {
		restrict: 'E',
		templateUrl: 'js/welcome/welcome.html',
		link: function(scope, elements){ // eslint-disable-line no-unused-vars
			
			let headersArr = Array.prototype.slice.call( elements.find('header') );

			// Update the header and footer image in this directive
			headersArr.forEach((eachHeader)=>{
				eachHeader.setAttribute('style', 'background-position-y: ' + navbarFactory.navbarHeight + 'px;' );
			})
		}
	};
});

