angular
    .module('app')
    .factory('app-service', AppService);

function AppService() {
    return 'some data';
}