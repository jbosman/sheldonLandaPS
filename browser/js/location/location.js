// app.config( $stateProvider => {
// 	return $stateProvider.state( 'location', {
// 		url: '/location',
// 		templateUrl: 'js/location/location.html'
// 	})
// });

app.directive('location', function(){

	return {
		restrict: 'E',
		templateUrl: 'js/location/location.html'
	}

});