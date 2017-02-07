// app.config( $stateProvider => {
// 	return $stateProvider.state('cancel', {
// 		url: '/cancelation-policy',
// 		templateUrl: 'js/cancel/cancel.html'
// 	})
// })

app.directive('cancelPolicy', function(){

	return {
		restrict: 'E',
		templateUrl: 'js/cancel/cancel.html'
	}

});