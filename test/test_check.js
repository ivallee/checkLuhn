var assert = require('chai').assert;
var check = require('../check.js');

describe("Check if Valid", function() {
  it("Should return true if number is valid", function() {
    var number = "4485770489628630";
    var result = check(number);
    assert.isTrue(result);
  });
});