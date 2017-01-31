describe('Weather', function() {


    var weather;

    beforeEach(function() {
        weather = new Weather();

    });
    describe('weather is stormy', function() {
        it('checks if weather is stormy', function() {
            spyOn(weather, 'isStormy').and.returnValue(true);
            expect(weather.isStormy()).toEqual(true)
        });

    });
    describe('weather is not stormy', function() {
        it('checks if weather is not stormy', function() {
            spyOn(weather, 'isStormy').and.returnValue(false);
            expect(weather.isStormy()).toEqual(false)
        });
    });
});
