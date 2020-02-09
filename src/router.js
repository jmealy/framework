const router = require('express').Router();
const highScores = require('./models/highScores');

const checkPalindrome = word => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

router.get('/api/getScores', (req, res) => {
  res.send(highScores.get());
});

router.post('/api/submitEntry', (req, res) => {
  const word = req.body.word;
  const name = req.body.name;
  const isPalindrome = checkPalindrome(word);

  if (isPalindrome) {
    highScores.update({ name: name, points: word.length });

    res.send('word.length');
  } else {
    res.send('');
  }
});

module.exports = router