import Validator from '../js/nicksCheck';

test.each([
  ['mistake in the start', '1vasya'],
  ['mistake in the end', 'vasya1'],
  ['mistake of exceeding digits repeation', 'va1111sya'],
  ['mistake of using the forbidden symbol', 'va.sya'],
])('test case when %s with %i value', (_, nickName) => {
  expect(() => new Validator(nickName)).toThrowError();
});
