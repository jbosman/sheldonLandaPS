app.directive( 'review', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/reviews/directives/review.html',
		controller: function($scope, reviewFactory){
			$scope.maxStarIndexArr = reviewFactory.getArrayOfMaxStarsIndexNums();
		},
		scope: { reviewGroup: '=' }
	}

});