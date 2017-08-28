describe('app service', function () {
    it('should be true', function () {
        angular.mock.module('app');

        var appService;

        inject(function (_appService_) {
            appService = _appService_;
        });

        var test = appService.test();
        expect(test).toBe('test');
    });
});