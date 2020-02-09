const router = require('./router');
const highScores = require('./model/highScores');

const mockHighScores = [{ name: 'testName', points: 5 }]
jest.mock('./model/highScores', () => ({
  update: jest.fn(),
  get: jest.fn(() => mockHighScores)
}));

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(router.isPalindrome('racecar')).toBe(true);
  });

  test('returns false for non palindromes', () => {
    expect(router.isPalindrome('router')).toBe(false);
  });

  test('returns false for invalid characters', () => {
    expect(router.isPalindrome('a man, a plan, a canal, panama')).toBe(false);
    expect(router.isPalindrome('!!22!!')).toBe(false);
  });
});

describe('router', () => {
  test('getScores', () => {
    const req = {};
    const res = { send: jest.fn() }
    router.getScores(req, res);
    expect(highScores.get).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(mockHighScores);
  });

  test('submitEntry', () => {
    router.isPalindrome = jest.fn(() => true);
    const mockRequestBody = { word: 'viv', name: 'Tim' };
    const req = { body: mockRequestBody };
    const res = { send: jest.fn() }
    router.submitEntry(req, res);
    
    expect(res.send).toHaveBeenCalledWith({ score: mockRequestBody.word.length });
  });
});