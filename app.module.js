(function () {
    angular
        .module('app', ['ui.router'])
        .config(function($stateProvider, $locationProvider) {
            var homeState = {
                name: 'home',
                url: '/components/home',
                component: 'home'
            }

            var adminState = {
                name: 'admin',
                url: '/components/admin',
                component: 'admin'
            }

            $stateProvider.state(homeState);
            $stateProvider.state(adminState);

            $locationProvider.html5Mode(true);
        });

    console.log('loading app module');
})();