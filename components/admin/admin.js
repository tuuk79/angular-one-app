(function () {
    angular
        .module('app')
        .component('admin', {
            templateUrl: 'components/admin/admin.html',
            controller: adminController,
            bindings: {}
        });

    adminController.$inject = [];

    function adminController() {
        console.log('created adminController');
        var $ctrl = this;
        $ctrl.message = 'hi from admin controller'
        $ctrl.add = add;

        function add(user) {
            console.log(user);
        }
    }
})();