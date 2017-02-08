// app.config( $stateProvider => {

// 	return $stateProvider.state( 'music', {
// 		url: '/music',
// 		templateUrl: 'js/music/music.html'
// 	});

// });

app.directive('music', function(){

	return {
		restrict: 'E',
		templateUrl: 'js/music/music.html'
	};

});