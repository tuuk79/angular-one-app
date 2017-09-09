(function () {
    angular
        .module('app')
        .component('app', {
            templateUrl: 'components/app/app.html',
            controller: appController
        });

    appController.$inject = [];

    function appController() {
    }
})();