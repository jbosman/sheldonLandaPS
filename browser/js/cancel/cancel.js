app.config( $stateProvider => {
	return $stateProvider.state('cancel', {
		url: '/cancelation-policy',
		templateUrl: 'js/cancel/cancel.html'
	})
})