(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'routerHelper'];
    /* @ngInject */
    function SidebarController($state, routerHelper) {
        var vm = this;
        vm.menuArr = {
        userData: [
          {
            userName: 'David Williams',
            userImage: 'images/profile_small.jpg',
            userPosition: 'Product Manager'
          }
        ],
        userMenu: [
          {
            name: 'Profile',
            link: 'profile.html'
          },
          {
            name: 'Contacts',
            link: '#'
          },
          {
            name: 'Mailbox',
            link: '#'
          }
        ],
        program: [
          {
            name: 'Avengers',
            image: 'http://cdn.shopify.com/s/files/1/0567/1525/products/67972_AvengersLogo_Pin_1024x1024.jpg?v=1412933928'
          }
        ],

        increment: [
          {
            name: 'Q1 - 2016'
          }
        ],

        favorites: [
          {
            name: 'Program Room',
            className: 'fa-th-large',
            link: 'programRoom'
          },
          {
            name: 'Backlog',
            className: 'fa-diamond',
            link: 'backlog'

          },
          {
            name: 'Roadmaps',
            className: 'fa-bar-chart-o',
            link: 'roadmap'
          }

        ],
        
        plan: [
          {
            name: 'Risks',
            className: 'fa-envelope',
            link: '#'
          },
          {
            name: 'Dependencies',
            className: 'fa-pie-chart',
            link: '#'

          },
          {
            name: 'Objectives',
            className: 'fa-flask',
            link: '#'
          },
          {
            name: 'Discussion',
            className: 'fa-edit',
            link: '#'
          }

        ],
       
        track: [
          {
            name: 'Forecast',
            className: 'fa-desktop',
            link: '#'
          },
          {
            name: 'Progress by Objective',
            className: 'fa-files-o',
            link: '#'

          },
          {
            name: 'Program Tracking',
            className: 'fa-globe',
            link: '#'
          },
          {
            name: 'Dependency Map',
            className: 'fa-flask',
            link: '#'
          },
          {
            name: 'Teams',
            className: 'fa-laptop',
            link: '#'
          }

        ]
      };
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;

        activate();

        function activate() { getNavRoutes(); }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})();
