// app.config(function ($stateProvider) {

//     // Register our *about* state.
//     $stateProvider.state('about', {
//         url: '/about',
//         templateUrl: 'js/about/about.html'
//     });

// });

app.directive('about', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/about/about.html'
	}
});
