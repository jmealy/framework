const router = require('express').Router();
const highScores = require('./models/highScores');

const isPalindrome = word => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

router.get('/api/getScores', (req, res) => {
  res.send(highScores.get());
});

router.post('/api/submitEntry', (req, res) => {
  const { word, name } = req.body;

  if (isPalindrome(word)) {
    highScores.update({ name, points: word.length });
    res.send('word.length');
  } else {
    res.send('');
  }
});

module.exports = router