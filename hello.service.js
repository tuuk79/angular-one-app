(function () {
    angular
        .module('app')
        .factory('helloService', helloService);

    function helloService() {
        return {
            sayHello: sayHello
        };

        function sayHello() {
            return 'hello!';
        }
    }
})();