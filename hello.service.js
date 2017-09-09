(function () {
    angular
        .module('steve')
        .factory('helloService', helloService);

    function helloService() {
        var vm = this;
        vm.word = 'hello';

        return {
            getWord: getWord,
            sayHello: sayHello,
            changeWord: changeWord
        };

        function getWord() {
            return vm.word;
        }

        function sayHello() {
            return vm.word;
        }

        function changeWord(something) {
            vm.word = something;
        }
    }
})();