(function () {
    angular
        .module('app')
        .component('home', {
            templateUrl: 'components/home/home.html',
            controller: homeController
        });

    homeController.$inject = [];

    function homeController() {
    }
})();