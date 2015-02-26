var assert = require("assert"),
    ordinalize = require("../src/index");


describe("ordinalize(number : Number, full : Boolean)", function() {
    it("should ordinalize number", function() {

        assert.equal(ordinalize(0, false), "");
        assert.equal(ordinalize(1, false), "st");
        assert.equal(ordinalize(2, false), "nd");
        assert.equal(ordinalize(3, false), "rd");
        assert.equal(ordinalize(10, false), "th");
        assert.equal(ordinalize(11, false), "th");
        assert.equal(ordinalize(12, false), "th");
        assert.equal(ordinalize(13, false), "th");
        assert.equal(ordinalize(14, false), "th");
        assert.equal(ordinalize(51, false), "st");
        assert.equal(ordinalize(62, false), "nd");
        assert.equal(ordinalize(73, false), "rd");
        assert.equal(ordinalize(84, false), "th");
        assert.equal(ordinalize(100, false), "th");

        assert.equal(ordinalize(0), "0");
        assert.equal(ordinalize(1), "1st");
        assert.equal(ordinalize(2), "2nd");
        assert.equal(ordinalize(3), "3rd");
        assert.equal(ordinalize(10), "10th");
        assert.equal(ordinalize(11), "11th");
        assert.equal(ordinalize(12), "12th");
        assert.equal(ordinalize(13), "13th");
        assert.equal(ordinalize(14), "14th");
        assert.equal(ordinalize(51), "51st");
        assert.equal(ordinalize(62), "62nd");
        assert.equal(ordinalize(73), "73rd");
        assert.equal(ordinalize(84), "84th");
        assert.equal(ordinalize(100), "100th");
    });
});
