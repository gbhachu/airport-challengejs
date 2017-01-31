'use strict'

describe('Airport', function() {

    var airport;
    var plane;

    beforeEach (function(){ airport = new Airport();
      plane = new Plane();

    });

    describe('land plane at airport', function() {
        it('lands a plane', function() {
            airport.landPlane(plane);
            expect(airport._planes).toContain(plane);
        });
    });
});
