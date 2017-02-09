app.directive('navbar', function () {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', href: '#home', deskId: 'ataghomeDesk', mobileId:  'ataghomeMobile' },
                { label: 'About', href: '#about', deskId: 'atagaboutDesk', mobileId:  'atagaboutMobile'},
                { label: 'Class Info', href: '#classInfo', deskId: 'atagclassInfoDesk', mobileId:  'atagclassInfoMobile' },
                { label: 'Rates', href: '#rates', deskId: 'atagratesDesk', mobileId:  'atagratesMobile' },
                { label: 'Cancellations', href: '#cancel', deskId: 'atagcancelDesk', mobileId:  'atagcancelMobile' },
                { label: 'Location', href: '#location', deskId: 'ataglocationDesk', mobileId:  'ataglocationMobile' },
                { label: 'Light Painting', href: '#lightPainting', deskId: 'ataglightPaintingDesk', mobileId:  'ataglightPaintingMobile' },
                { label: 'Music', href: '#music', deskId: 'atagmusicDesk', mobileId:  'atagmusicMobile' },
            ];

        }

    };

});
