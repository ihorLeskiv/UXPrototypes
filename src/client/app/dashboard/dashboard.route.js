(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            },
            {
                state: 'programRoom',
                config: {
                    url: '/programRoom',
                    templateUrl: 'app/dashboard/pages/programRoom.html',
                    //controller: 'BacklogController',
                    //controllerAs: 'vm',
                    title: 'Program Room',
                    settings: {
                        //nav: 1,
                        //content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            },
            {
                state: 'backlog',
                config: {
                    url: '/backlog',
                    templateUrl: 'app/dashboard/pages/backlog.html',
                    //controller: 'BacklogController',
                    //controllerAs: 'vm',
                    title: 'Backlog',
                    settings: {
                        //nav: 1,
                        //content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            },
            {
                state: 'roadmap',
                config: {
                    url: '/roadmap',
                    templateUrl: 'app/dashboard/pages/roadmap.html',
                    //controller: 'BacklogController',
                    //controllerAs: 'vm',
                    title: 'Roadmap',
                    settings: {
                        //nav: 1,
                        //content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            },

        ];
    }
})();
