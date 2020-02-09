const config = require('./config');

// Closure for updating, storing, and retrieving the high scores.
const highScores = (function () {
  let highScores = [];
  let thresholdScore;

  return {
    get: function () {
      return highScores;
    },
    update: function (score) {
      if (highScores.length < config.leaderboardSize) {
        highScores.push(score);
      } else if (score.points > thresholdScore.points) {
        // Remove lowest score and replace with the new score.
        highScores.pop();
        highScores.push(score);
      }

      highScores.sort((a, b) => a.points < b.points);
      // Track the lowest score as a threshold for getting on the leaderboard.
      thresholdScore = highScores[highScores.length - 1];
    }
  }
})();

module.exports = highScores;
