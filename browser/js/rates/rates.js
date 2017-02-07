// app.config( $stateProvider => {
// 	return $stateProvider.state('rates', {
// 		url: '/rates',
// 		templateUrl: 'js/rates/rates.html'
// 	});
// });

app.directive('rates', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/rates/rates.html'
	}
});
