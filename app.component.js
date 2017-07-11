function AppController(AppService) {
    var vm = this;

    vm.data = AppService;
}

angular
    .module('app')
    .component('appComponent', {
        templateUrl: 'app.component.html',
        controller: AppController
    });