const router = require('express').Router();

const checkPalindrome = word => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

let highScores = [];
let thresholdScore = 0;

const addScore = score => {
  highScores.sort((a, b) => a.points < b.points);
  if (highScores.length < 5) {
    highScores.push(score);
  } else if (score.points > thresholdScore) {
    highScores.pop();
    highScores.push(score);
  }
  const lastIndex = highScores.length - 1;
  thresholdScore = highScores[lastIndex].points;
}


router.get('/api/getScores', (req, res) => {
  // console.log(JSON.stringify(highscores));
  // highScores.sort( (a, b) => {
  //   return a.points < b.points
  // });
  res.send(highScores);
});

router.post('/api/submitEntry', (req, res) => {
  const word = req.body.word;
  const name = req.body.name;
  const isPalindrome = checkPalindrome(word);

  if (isPalindrome) {
    // highScores.push({ name: name, points: word.length });
    addScore({ name: name, points: word.length });

    res.send('word.length');
  } else {
    res.send('');
  }
});

module.exports = router