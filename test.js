const { assert } = require('chai');
const { sum } = require('./solucao');

describe("Tests", function () {
    it("Calculate a sum of two items", function () {
        assert.strictEqual(sum(7)(5)(), 12);
    });
});
