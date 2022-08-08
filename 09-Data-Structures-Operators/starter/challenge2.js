'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// console.log(Object.entries(game.scored));
for (const [i, name] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: ${name}`);
}

// 2.
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

// 3.
for (const [teamKey, value] of Object.entries(game.odds)) {
  const teamName = teamKey === 'x' ? 'draw' : `victory ${game[teamKey]}`;
  console.log(`Odd of ${teamName}: ${value}`);
}

// 4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
