const check = require('./check');

test('check', () => {
  expect(check(182, 185)).toBe("High Risk Level 3");
});
