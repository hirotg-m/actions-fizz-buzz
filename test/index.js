const assert = require("assert");
const fizzBuzz = require("../index");

describe("fizzBuzz", () => {
  it("returns FizzBuzz when value is divisible by 15", () => {
    assert.strictEqual(fizzBuzz(30), "FizzBuzz");
  });

  it("returns Fizz when value is divisible by 3", () => {
    assert.strictEqual(fizzBuzz(9), "Fizz");
  });

  it("returns Buzz when value is divisible by 5", () => {
    assert.strictEqual(fizzBuzz(10), "Buzz");
  });

  it("returns the value when value is not divisible by 3 or 5", () => {
    assert.strictEqual(fizzBuzz(7), "7");
  });
});
