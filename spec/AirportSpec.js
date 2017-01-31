'use strict'

describe('Airport', function() {

    var airport;
    var plane;
    var weather;

    beforeEach (function(){
      plane = new Plane();
      weather = new Weather();
      airport = new Airport(weather);
    });

    describe('weather is not stormy', function(){

      beforeEach(function() {
        spyOn(weather, 'isStormy').and.returnValue(false);
      });

      describe('land plane at airport', function() {
          it('lands a plane', function() {
              airport.landPlane(plane);
              expect(airport._planes).toContain(plane);
          });
      });

      describe('take off plane from airport', function(){
        it('makes a plane takeoff', function(){
          airport.landPlane(plane);
          airport.takeoffPlane(plane);
          expect(airport._planes).not.toContain(plane);
        });
      });
    });

    describe('weather is stormy', function(){
      beforeEach(function() {
        spyOn(weather, 'isStormy').and.returnValue(true);
      });

      describe('stops plane from taking off if stormy', function() {
      it('prevents a plane from taking off', function(){
        airport._planes.push(plane);
        expect(function() {airport.takeoffPlane(plane)}).toThrowError("cannot take off: weather is stormy");
      })
    })

    describe('stops plane from landing if stormy', function() {
        it('raises cannot land plane error', function() {
            expect(function() {airport.landPlane(plane)}).toThrowError("cannot land: weather is stormy");
        });
    });

  });


});
