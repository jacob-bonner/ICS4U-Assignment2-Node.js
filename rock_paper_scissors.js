// Created By: Jacob Bonner
// Created On: December 2020
// This program allows a user to play rock paper scissors with the computer.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

try {
  // User input for rock paper or scissors
  const userInput = prompt("Enter Rock, Paper or Scissors: ");
  const userMoveChosen = userInput.toUpperCase();
  console.log();

  // Generating rock paper or scissors for the computer
  let computerMoveChosen = null;
  const moveNumber = Math.floor(Math.random() * ((4 - 1)) + 1);
  if (moveNumber == 1) {
    // The computer chooses rock
    computerMoveChosen = "Rock";
    console.log("The Computer Chose Rock");
  } else if (moveNumber == 2) {
    // The computer chooses paper
    computerMoveChosen = "Paper";
    console.log("The Computer Chose Paper");
  } else if (moveNumber == 3) {
    // The computer chooses scissors
    computerMoveChosen = "Scissors";
    console.log("The Computer Chose Scissors");
  } else {
    // The computer is unable to properly choose a move
    console.log("ERROR: Program Unable to Select Move");
  }

  // Process and Outputs
  if (userMoveChosen == computerMoveChosen.toUpperCase()) {
    // Output if a tie occurs
    console.log("It's a tie!");
  } else if (userMoveChosen == "ROCK" 
             && computerMoveChosen.toUpperCase() == "SCISSORS") {
    // Output if the user wins with rock over scissors
    console.log("You Win!");
  } else if (userMoveChosen == "PAPER" 
             && computerMoveChosen.toUpperCase() == "ROCK") {
    // Output if the user wins with paper over rock
    console.log("You Win!");
  } else if (userMoveChosen == "SCISSORS" 
             && computerMoveChosen.toUpperCase() == "PAPER") {
    // Output if the user wins with scissors over paper
    console.log("You Win!");
  } else if (userMoveChosen == "ROCK" 
             && computerMoveChosen.toUpperCase() == "PAPER") {
    // Output if the computer wins with paper over rock
    console.log("You Lost. Try Again!");
  } else if (userMoveChosen == "PAPER" 
             && computerMoveChosen.toUpperCase() == "SCISSORS") {
    // Output if the computer wins with scissors over paper
    console.log("You Lost. Try Again!");
  } else if (userMoveChosen == "SCISSORS" 
             && computerMoveChosen.toUpperCase() == "ROCK") {
    // Output if the computer wins with rock over scissors
    console.log("You Lost. Try Again!");      
  } else {
    // The program is unable to determine a winner
    console.log("ERROR: Invalid Input");
  }

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log("ERROR: Invalid Input");
}
