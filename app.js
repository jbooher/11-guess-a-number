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

  var integer = Math.floor(Math.random() * 6) + 1;

  return integer;
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

  var userGuess = readlineSync.question("Please enter your guess: ");

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

function runGame() {
	// DISPLAY WELCOME BANNER

  console.log("Welcome to the Guess the Number Game!  I'm thinking of a number between 1 and 100.  You will try to guess my number, and I will give you some hints to get right number!")
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
	// STORE INITIAL GAME STATE

	// WHILE LOOP FOR WHEN GAME IS NOT WON
}

/**
 * Finally, we call our runGame function so that
 * the game actually starts.
 */
runGame();
