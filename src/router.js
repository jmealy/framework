const router = require('express').Router();

const checkPalindrome = (word) => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

let highScores = [];

router.get('/api/getScores', (req, res) => {
  // console.log(JSON.stringify(highscores));
  highScores.sort( (a, b) => {
    return a.points < b.points
  });

  const scorelength = highScores.length;

  const topFive = highScores.slice(0, 5);
  console.log(topFive)
	res.hsend(highScores);
});

router.post('/api/submitEntry', (req, res) => {
  const word = req.body.word;
  const name = req.body.name;
  const isPalindrome = checkPalindrome(word);

  if (isPalindrome) {
    highScores.push({ name: name, points: word.length});

    res.send('word.length');
  } else {
    res.send('');
  }
});

module.exports = router