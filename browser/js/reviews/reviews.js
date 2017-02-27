app.directive('reviews', function($timeout){
	return {
		restrict: 'E',
		templateUrl: 'js/reviews/reviews.html',
		controller: function($scope, reviewFactory){
			$scope.reviewGroups = reviewFactory.reviewGroups;
			$scope.getArrayOfReviewGroupIndexNums = reviewFactory.getArrayOfReviewGroupIndexNums;
		},
		link: function(scope, elements){ // eslint-disable-line no-unused-vars

			// Had to add this timeout due to the ng-repeats not being populated right away
			// The timeout gives them time to load onto the DOM
			$timeout(() => {

				elements.find('ol')[0].children[0].classList.add('active');

				Array.prototype.slice.call( elements.find('div')).forEach((divElement) => {
					if( divElement.id === 'carousel-reviews' )
						divElement.children[0].classList.add('active');
				})

				// Quick fix for now to avoid needing to reset the waypoints dynamically
				// Keeps the height of the section static so it's not dynamically changing with
				// the different review heights
				// Couldn't get carousel slide event handler to fire
				let reviewsSection = $('#reviews');
				reviewsSection.css('min-height', reviewsSection.height());

			}, 50);

		}
	}
});