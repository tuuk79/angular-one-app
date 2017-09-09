(function () {
    angular
        .module('app')
        .factory('appService', appService);

    appService.$inject = ['helloService'];

    function appService(helloService) {
        return {
            test: test,
            hello: hello,
            changeWord: changeWord,
            getWord: getWord
        };

        function test() {
            return 'test';
        }

        function hello() {
            return helloService.sayHello();
        }

        function changeWord(word) {
            return helloService.changeWord(word);
        }

        function getWord() {
            return helloService.getWord();
        }
    }
})();