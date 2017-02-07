app.directive('rateBox', function(){

	return {
		restrict: 'E',
		templateUrl: 'js/rates/directives/rate-box/rate-box.html',
		scope: {
			info: '='
		}
	}

});