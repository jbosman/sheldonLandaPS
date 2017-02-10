app.directive('music', function(){

	return {
		restrict: 'E',
		templateUrl: 'js/music/music.html'
	};

});

app.directive('meditationMusic', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/music/meditation-music.html'
	};
});