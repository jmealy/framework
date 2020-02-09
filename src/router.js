const router = require('express').Router();
const highScores = require('./model/highScores');

const isPalindrome = word => {
  // Only allow alphabetic characters.
  if (!word.match(/^[a-z]+$/)) return false;

  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

const getScores = (req, res) => {
  res.send(highScores.get());
};

const submitEntry = (req, res) => {
  const { word, name } = req.body;

  if (isPalindrome(word)) {
    highScores.update({ name, points: word.length });
    res.send({ score: word.length });
  } else {
    res.send({ score: 0 });
  }
}

router.get('/api/getScores', getScores);
router.post('/api/submitEntry', submitEntry);

module.exports = {
  router,
  isPalindrome,
  getScores,
  submitEntry
};
