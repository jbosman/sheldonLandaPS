app.directive('navbar', function () {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {
            scope.items = [
                { label: 'Welcome', href: '#welcome', deskId: 'atagwelcomeDesk', mobileId:  'atagwelcomeMobile' },
                { label: 'Class Info', href: '#classInfo', deskId: 'atagclassInfoDesk', mobileId:  'atagclassInfoMobile' },
                { label: 'Location', href: '#location', deskId: 'ataglocationDesk', mobileId:  'ataglocationMobile' },
                { label: 'Rates', href: '#rates', deskId: 'atagratesDesk', mobileId:  'atagratesMobile' },
                { label: 'Cancellations', href: '#cancel', deskId: 'atagcancelDesk', mobileId:  'atagcancelMobile' },
                // { label: 'Reviews', href: '#reviews', deskId: 'atagreviewsDesk', mobileId:  'atagreviewsMobile' },
                { label: 'About', href: '#about', deskId: 'atagaboutDesk', mobileId:  'atagaboutMobile'},
                { label: 'Music', href: '#music', deskId: 'atagmusicDesk', mobileId:  'atagmusicMobile' },
            ];

        }

    };

});
