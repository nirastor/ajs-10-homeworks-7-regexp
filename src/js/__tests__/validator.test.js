import Validator from '../validator';

test('should return true for allowed sinmols', () => {
  expect(Validator.validateUsername('abz123-_ABZ')).toBe(true);
});

test.each([
  'a_1_a',
  'a_12_a',
  'a_123_a',
])('shold return true for 1,2,3 digits together', (name) => {
  expect(Validator.validateUsername(name)).toBe(true);
});

test.each([
  'a_4444_a',
  'a_55555_a',
  'a_666666_a',
])('shold return false for 4+ digits together', (name) => {
  expect(Validator.validateUsername(name)).toBe(false);
});

test.each([
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}',
])('shold return false for %s', (name) => {
  expect(Validator.validateUsername(name)).toBe(false);
});

test.each([
  '1abc',
  '-abc',
  '_abc',
  'abc1',
  'abc-',
  'abc_',
])('shold return false if name start or end with digits or "-" or "_"', (name) => {
  expect(Validator.validateUsername(name)).toBe(false);
});
