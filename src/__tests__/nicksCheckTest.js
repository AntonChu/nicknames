import Validator from '../js/nicksCheck';

test.each([
  ['mistake in the start', '1vasya', new Error('Неподходящий nickname')],
  ['mistake in the end', 'vasya1', new Error('Неподходящий nickname')],
  ['mistake with digits repeat', 'va111sya', new Error('Неподходящий nickname')],
])('test case when %s with %i value', (_, nickName, expected) => {
  const result = new Validator(nickName);
  expect(result).toThrow(expected);
});
