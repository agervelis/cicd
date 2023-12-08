// test.js

const { test, expect } = require('@jest/globals');

const { sum, subtract, divide, multiply } = require('./test2');

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('subtracts 1 - 3 to equal -2', () => {
  expect(subtract(1, 3)).toBe(-2);
});

test('divides 1 / 3 to equal 0.333...', () => {
  expect(divide(1, 3)).toBeCloseTo(0.333, 3);
});

test('multiplies 1 * 3 to equal 3', () => {
  expect(multiply(1, 3)).toBe(3);
});
