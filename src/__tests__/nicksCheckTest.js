import Validator from '../js/nicksCheck';

test.each([
  ['using more than 3 digits in the range', 'va1111sya'],
  ['using special symbols other than "-" и "_"', 'va.sya'],
  ['using alphabets other than English', 'вася'],
  ['starting with number', '1vasya'],
  ['starting with "-"', '-vasya'],
  ['starting with "_"', '_vasya'],
  ['starting with "."', '.vasya'],
  ['ending with number', 'vasya1'],
  ['ending with "-"', 'vasya-'],
  ['ending with "_"', 'vasya_'],
  ['ending with "."', 'vasya.'],
])('test case %s with %i value', (_, nickName) => {
  expect(() => new Validator(nickName)).toThrowError();
});
