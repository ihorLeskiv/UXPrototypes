(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('navigation', navigation);

    /* @ngInject */
    function navigation () {
        var directive = {
            bindToController: true,
            controller: NavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/navigation_directive.html'
        };

        /* @ngInject */
        function NavController() {
            var vm = this;
        }

        return directive;
    }
})();
