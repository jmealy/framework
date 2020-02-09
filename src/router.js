const router = require('express').Router();

const checkPalindrome = word => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

let highScores = [];
let thresholdScore;

const addScore = score => {
  if (highScores.length < 5) {
    highScores.push(score);
  } else if (score.points > thresholdScore.points) {
    highScores.pop();
    highScores.push(score);
  }

  highScores.sort((a, b) => a.points < b.points);
  thresholdScore = highScores[highScores.length - 1];
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