const prompt = require('prompt-sync')({sigint: true});

playGame();

function playGame() {
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;
 
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;



while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    const input = prompt('Enter Number Here(1-100): ');
    const guess = parseInt(input);

    

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (guess === numberInMind){
      console.log(`${guess} is correct answer!`);
      foundCorrectNumber = true;
      playAgain();
    } else if (guess > numberInMind) {
      console.log(`Your number is too large`);
    } else if (guess < numberInMind){
      console.log(`Your number is too small`);
    } else {
      console.log(`Invalid input. Please enter again.`);
    }
    
  }
}

// Bonus Point: prompt user and provide option for user to start a new game after winning
function playAgain() {
  while (true) {
    const input = prompt('Do you want to play again(y/n) ').toLowerCase();
    if (input === "y"){
      playGame();
    } else if (input === "n") {
      break
    } else {
      console.log(`Please enter only "y" or "n"`);
    }
  }
}
