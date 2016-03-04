(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('temlist', temlist);

    /* @ngInject */
    function temlist () {
        var directive = {
            bindToController: true,
            controller: temlistCtrl,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/temlist_directive.html'
        };

        /* @ngInject */
        function temlistCtrl() {
            var vm = this;
        }

        return directive;
    }
})();
