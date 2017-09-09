(function () {
    angular
        .module('app', ['ui.router'])
        .config(function($stateProvider) {
            var homeState = {
                name: 'home',
                url: '/components/home',
                component: 'home'
            }

            $stateProvider.state(homeState);
        });

    console.log('loading app module');
})();