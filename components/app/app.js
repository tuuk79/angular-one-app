(function () {
    angular
        .module('app')
        .component('app', {
            templateUrl: 'components/app/app.html',
            controller: appController,
            controllerAs: 'appCtrl'
        });

    appController.$inject = [];

    function appController() {
        var appCtrl = this;
        appCtrl.pct = '139';
        console.log(appCtrl.pct);
    }
})();