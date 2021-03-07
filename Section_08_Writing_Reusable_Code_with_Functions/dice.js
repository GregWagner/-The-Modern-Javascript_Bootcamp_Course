function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function roll(rolls) {
  for (let i = 0; i < rolls; ++i) {
    rollDie();
  }
}

roll(3);
