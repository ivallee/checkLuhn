var assert = require('chai').assert;
var methods = require('../check.js');
var check = methods.check;
var sum = methods.sum;
var reduce = methods.reduce

describe("Checks if number Valid", function() {
  it("Should return true if number is valid", function() {
    var number = "4485770489628630";
    var result = check(number);
    assert.isTrue(result);
  });
});

describe("Checks if number invalid", function() {
  it("Should return false if number is invalid", function() {
    var number = "41234567876543219";
    var result = check(number);
    assert.isFalse(result);
  });
});