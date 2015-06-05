/**
 * Created by jose on 05/06/2015.
 */
"use strict";
var expect = require("chai").expect;
var Smoke = require("../src/Smoke");

describe("Smoke", function () {
    describe("dumb", function () {
        it("should return true", function () {
            // ARRANGE
            var expected = true;
            // ACT
            var actual = Smoke.dumb();
            // ASSERT
            expect(actual).to.equal(expected);
        });
    });
});