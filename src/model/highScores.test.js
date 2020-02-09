const highScores = require('./highScores');

test('update and order the top 5 scores', () => {
  highScores.update({ name: 'Alice', points: 4 });
  highScores.update({ name: 'Bob', points: 12 });
  highScores.update({ name: 'Ciara', points: 5 });
  highScores.update({ name: 'Dereck', points: 6 });
  highScores.update({ name: 'Eilis', points: 1 });
  highScores.update({ name: 'Fearghal', points: 3 });
  highScores.update({ name: 'Gary', points: 2 });

  expect(highScores.get()).toStrictEqual([
    { name: 'Bob', points: 12 },
    { name: 'Dereck', points: 6 },
    { name: 'Ciara', points: 5 },
    { name: 'Alice', points: 4 },
    { name: 'Fearghal', points: 3 }
  ]);
});