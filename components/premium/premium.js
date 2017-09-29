(function () {
    angular
        .module('app')
        .component('premium', {
            templateUrl: 'components/premium/premium.html',
            controller: premiumController,
            controllerAs: 'premiumCtrl',
            bindings: {
                premiumPct: '='
            }
        });

    function premiumController($scope) {
        var premiumCtrl = this;
        premiumCtrl.$onInit = function () {
            console.log(premiumCtrl.premiumPct);
        };
    }
})();