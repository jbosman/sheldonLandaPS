// app.config( $stateProvider => {
// 	return $stateProvider.state( 'lightPainting', {
// 		url: '/light-painting',
// 		templateUrl: 'js/lightPainting/lightPainting.html'
// 	})
// });

app.directive('lightPaintings', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/lightPainting/lightPainting.html'
	};
});