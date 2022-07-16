const choices = ["rock", "paper", "scissors"];

const userSelection = prompt("Do you choose rock, paper or scissors?");
if (userSelection === "paper" || userSelection === "rock" || userSelection === "scissors") {
  console.log("You chose " + `${userSelection}`);
} else {
  console.log("Error! Try again!");
}

let computerSelection = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${computerSelection}`);

const winner = declareWinner(userSelection, computerSelection);

function game(userSelection, computerSelection) {
  if (userSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose! Rock beats Paper');
  } else if (userSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You win! Scissors beats Paper');
  } else if (userSelection === 'paper' && computerSelection === 'rock') {
    console.log('You win! Paper beats Rock');}
    else {
    console.log('You tie!');
  }
}