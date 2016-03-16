/**
 * We need to use an outside library to easily
 * get input from the user. I've already put it
 * in your package.json, and startfrom installed it,
 * but to actually use it, we need to import it.
 *
 * I've given this to you below. We're importing the
 * npm package 'readline-sync' and capturing it by the
 * name readlineSync so that we can use it later.
 */

import readlineSync from 'readline-sync';
/**
 * When the game is complete, we need a way to generate
 * random numbers. JavaScript can do this with the
 * Math object. Search MDN for Math and find the way
 * to generate randomm numbers. MDN has actual examples
 * doing exactly what we're trying to do below.
 *
 * Fill in the function definition below. Make sure
 * the number you're generating is an integer.
 */

export function generateNumber() {

  return Math.floor(Math.random() * 100) + 1;

}

/**
 * We need a way to repeatedly ask for user input.
 * We can accomplish this with our readlineSync
 * object that we imported above.
 *
 * To do this, call readlineSync.question(). That
 * function takes a single argument which is the
 * question that we want to ask the user.
 *
 * To see examples, you can review the documentation
 * for that library here: https://github.com/anseki/readline-sync
 */

export function getUserGuess() {
  var guess;

  readlineSync.setDefaultOptions({limit: Number, limitMessage: "That is not a number.  Please try again."});
  guess = Number(readlineSync.question("Please enter your guess: "));

  return validateGuess(guess);
}

function validateGuess(input) {
  while (input < 1 || input > 100) {
    console.log("");
    console.log("Your entry must be a number between 1 and 100.  Try again.");
    console.log("");
    input = getUserGuess();
  }

  if (Math.floor(input) !== input) {
    // input = Math.floor(input);
    console.log("");
    console.log("Number was not an integer.  Rounded down.");
  }

  return input;
}

/**
 * We need a way to validate their answer. Fill out
 * the function below so that, when it's provided with
 * the correct number and the user's guess, it returns
 * true if it matches and false if it doesn't.
 *
 * If it's wrong, it should also log out a message
 * telling them if their guess is too high or too low.
 */

export function isRightNumber(correctNumber, userGuess) {
  if (correctNumber === userGuess) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Now that we have the pieces of our game defined,
 * we need a function to glue them together. This
 * is what will be run when the user runs this file.
 *
 * In here, you'll need to define several things.
 *
 * 1: Log out some kind of information when they first
 * run the game. This should explain what the game is,
 * and the rules.
 *
 * 2: Create the initial state for the game. You need
 * to call generateNumber and store the value, and you
 * need to store whether or not the user has won the
 * game.
 *
 * 3: Use a while loop to determine if the game is still
 * going on. If it is, use getUserGuess to ask for a new
 * guess, then check to see if that guess is right with
 * isRightNumber. If their guess is right, update your
 * game state so that we know they've won. This should
 * cause the while loop to end.
 *
 * 4: If they make it past the while loop, log a
 * congratulatory message for winning the game.
 */

function validateAnswer (guess, random, lives) {

  while (lives > 0) {
    if (isRightNumber(random, guess)){
      console.log("");
      console.log("Congratulations!  You guessed the correct number!  Great job!");
      return;
    }
    if (random > guess) {
      console.log("");
      console.log("I'm thinking of a number larger than that. You have " + lives + " tries left.");
      console.log("");
      guess = Number(getUserGuess());
    }
    else {
      console.log("");
      console.log("I'm thinking of a number smaller than that. You have " + lives + " tries left.");
      console.log("");
      guess = Number(getUserGuess());
    }
    lives--;
  }

  if (lives <= 1) { 
    console.log("");
    console.log("You lose!  Play again with all new numbers by entering 'npm start'.");
    console.log("Good luck!");
  }
}

function runGame() {

  console.log("Welcome to the Guess the Number Game!  I'm thinking of a number between 1 and 100.  You will try to guess my number, and I will give you some hints to get right number!");
  console.log("");

  if (readlineSync.keyInYN('Ready? ')) {
    console.log("");
    console.log("Awesome.  Let's get started!");
    console.log("");
  }
  else {
    console.log("");
    console.log("Alright then.  Enter 'npm start' if you want to play again.");
    console.log("");
    return;
  }

  var playerLives = 4;
  var random = generateNumber();
  var guess = Number(getUserGuess());
  console.log(random);

  validateAnswer(guess, random, playerLives);

}

/**
 * Finally, we call our runGame function so that
 * the game actually starts.
 */
runGame();
