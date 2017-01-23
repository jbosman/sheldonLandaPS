app.directive('navbar', function () {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' },
                { label: 'About', state: 'about' },
                { label: 'Class Info', state: 'classInfo' },
                { label: 'Rates', state: 'rates' },
                { label: 'Cancellation Policy', state: 'cancel' },
                { label: 'Location', state: 'location' },
                // { label: 'Light Painting', state: 'lightPainting' },
                // { label: 'Music', state: 'music' },
            ];

        }

    };

});
