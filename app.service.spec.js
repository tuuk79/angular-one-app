describe('app service', function () {
    var appService;

    beforeEach(function(){
        angular.mock.module('app');

        inject(function (_appService_) {
            appService = _appService_;
        });
    });

    it('should be true', function () {
        var test = appService.test();
        expect(test).toBe('test');
    });

    it('should change the hello service word', function() {
        var result = appService.changeWord('someotherword');
        var newResult = appService.getWord();
        expect(newResult).toBe('someotherword');
    });
});