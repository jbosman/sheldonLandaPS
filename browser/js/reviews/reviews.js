app.directive('reviews', function($timeout){
	return {
		restrict: 'E',
		templateUrl: 'js/reviews/reviews.html',
		controller: function($scope, reviewFactory){
			$scope.reviews = reviewFactory.reviews;
			$scope.getArrayOfReviewIndexNums = reviewFactory.getArrayOfReviewIndexNums;
			$scope.reviewDate = reviewFactory.reviewDate;
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

			}, 50);

		}
	}
});