function pick(arr) {
  // return a random number from the array
  return arr[Math.floor(Math.random() * arr.length)];
}

function getCard() {
  const cards = ["clubs", "spades", "hearts", "diamonds"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  return { suit: pick(cards), value: pick(values) };
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
