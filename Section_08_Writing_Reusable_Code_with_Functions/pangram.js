function isPangram(sentance) {
  sentance = sentance.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!sentance.includes(char)) {
      console.log(`Does not contain ${char}`);
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown FOX jumps over the lazy dog"));
console.log(isPangram("The quick brown FOX jumps over the lacy dog"));
