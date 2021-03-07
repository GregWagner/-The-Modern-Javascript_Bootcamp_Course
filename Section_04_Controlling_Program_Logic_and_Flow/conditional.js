if (1 === 1) {
  console.log("It's true;");
}

let rating = 1;
if (rating === 3) {
  console.log("You are a superstar!!!");
} else if (rating == 2) {
  console.log("Meets expectations");
} else if (rating === 1) {
  console.log("Needs improvement");
} else {
  console.log("Invalid rating");
}

let number = 37;
if (number % 2 !== 0) {
  console.log(number, "is odd");
} else {
  console.log(number, "is even");
}

let highScore = 1430;
let userScore = 1600;
if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good Game. Your score of ${userScore}
     did not beat the high score of ${highScore}`
  );
}

let password = "one two";
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  console.log("Password must be longer");
}
