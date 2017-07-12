(function () {
    angular
        .module('app')
        .factory('appService', appService);

    appService.$inject = ['helloService'];

    function appService(helloService) {
        return {
            test: test,
            hello: hello
        };

        function test() {
            return 'test';
        }

        function hello() {
            return helloService.sayHello();
        }
    }
})();