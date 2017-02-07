// app.config(function ($stateProvider) {
//     $stateProvider.state('home', {
//         url: '/',
//         templateUrl: 'js/home/home.html'
//     });
// });

app.directive('home', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/home/home.html'
	};
});
