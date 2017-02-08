app.directive('navbar', function () {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Class Info', href: '#classInfo' },
                { label: 'Rates', href: '#rates' },
                { label: 'Cancel Policy', href: '#cancel' },
                { label: 'Location', href: '#location' },
                { label: 'Light Painting', href: '#lightPainting' },
                { label: 'Music', href: '#music' },
            ];

        }

    };

});
