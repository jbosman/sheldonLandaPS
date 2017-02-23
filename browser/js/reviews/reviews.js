app.directive('reviews', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/reviews/reviews.html',
		controller: function($scope, reviewFactory){
			$scope.reviews = reviewFactory.reviews;
		}
	}
});