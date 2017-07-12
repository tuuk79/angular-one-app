(function () {
    angular
        .module('app')
        .component('appComponent', {
            templateUrl: 'app.component.html',
            controller: appController
        });

    appController.$inject = ['appService'];

    function appController(appService) {
        this.test = appService.test();
        this.hello = appService.hello();
    }
})();
