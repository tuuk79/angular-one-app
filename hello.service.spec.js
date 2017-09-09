describe('helloService', function () {
    var helloService;
    
    beforeEach(function () {
        angular.mock.module('steve');

        inject(function (_helloService_) {
            helloService = _helloService_;
            console.log(helloService);
        });
    });

    it('should say hello', function () {
        var result = helloService.getWord();
        expect(result).toEqual('hello');
    });

    it('should set the word to duh', function () {
        helloService.changeWord('duh');
        var result = helloService.getWord();

        expect(result).toEqual('duh');
    });
});