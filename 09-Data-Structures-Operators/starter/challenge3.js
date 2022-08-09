const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [minute, description] of gameEvents) {
  console.log(
    `${
      minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'
    } ${minute}: ${description}`
  );
}
