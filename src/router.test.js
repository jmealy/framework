const { isPalindrome } = require('./router');

test('Checks if word is palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('1212121')).toBe(true);

  expect(isPalindrome('racecars')).toBe(false);
});