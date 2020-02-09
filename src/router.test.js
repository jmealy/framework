const { isPalindrome, router } = require('./router');
const highScores = require('./model/highScores');

jest.mock('./model/highScores', () => ({
  update: jest.fn(),
  get: jest.fn()
}));


describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for non palindromes', () => {
    expect(isPalindrome('router')).toBe(false);
  });

  test('returns false for invalid characters', () => {
    expect(isPalindrome('a man, a plan, a canal, panama')).toBe(false);
    expect(isPalindrome('!!22!!')).toBe(false);
  });
});

describe('router', () => {
  test('requests highscores', () => {
    // mock high scores
    router.getScores();
  });
});