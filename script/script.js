(function () {
  let playerScore = 0;
  let computerScore = 0;
  let gameStatus = "On";
  let rounds = 5;


  const randomNumGenerator = () => {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
  };

  const computerPlay = () => {
    let gameKeyWords = ["rock", "paper", "scissors"];
    return gameKeyWords[randomNumGenerator()];
  };

  const stringSanitizer = str => {
    return str.trim().toLowerCase();
  };

  const roundWinnerChecker = (sanitizedPlayerSelection, computerSelection) => {
    if (sanitizedPlayerSelection === computerSelection) {
      return console.log("Draw!");
    }

    if (computerSelection === "rock") {
      switch (sanitizedPlayerSelection) {
        case "paper":
          playerScore++;
          return console.log(
            `Congrats! You Win! ${sanitizedPlayerSelection} beats ${computerSelection}`
          );
          break;
        case "scissors":
          computerScore++;
          return console.log(
            `You Lose! ${computerSelection} beats ${sanitizedPlayerSelection}`
          );
          break;
      }
    } else if (computerSelection === "paper") {
      switch (sanitizedPlayerSelection) {
        case "scissors":
          playerScore++;
          return console.log(
            `You Win! ${sanitizedPlayerSelection} beats ${computerSelection}`
          );
          break;
        case "rock":
          computerScore++;
          return console.log(
            `You Lose! ${computerSelection} beats ${sanitizedPlayerSelection}`
          );
          break;
      }
    } else {
      switch (sanitizedPlayerSelection) {
        case "rock":
          playerScore++;
          return console.log(
            `You Win! ${sanitizedPlayerSelection} beats ${computerSelection}`
          );
          break;
        case "paper":
          computerScore++;
          return console.log(
            `You Lose! ${computerSelection} beats ${sanitizedPlayerSelection}`
          );
          break;
      }
    }
  };

  const playRound = () => {
    let playerSelection = prompt(
      "Lets play! Choose between rock, paper and scissors",
      "Rock"
    );

    if (!playerSelection) {
      rounds++
      return alert(
        "Value can't be empty. Try rock," +
          " paper and scissors"
      );
    }

    let sanitizedPlayerSelection = stringSanitizer(playerSelection);

    if (
      !["rock", "paper", "scissors"].some(el => el === sanitizedPlayerSelection)
    ) {
      rounds++
      return alert(
        `${sanitizedPlayerSelection} is an invalid value ` +
          `,only accepted values are rock, paper and scissors`
      );
    }

    let computerSelection = computerPlay();

    roundWinnerChecker(sanitizedPlayerSelection, computerSelection);
  };

  const gameStatusChecker = () => {
    if (computerScore === playerScore) {
      let playAgain = prompt("Draw! Play again? Enter Yes");

      if (!playAgain) {
        gameStatus = "See you!";
        return;
      }

      playAgain = stringSanitizer(playAgain);

      if (playAgain !== "yes") {
        gameStatus = "See you!";
        return console.log("See you!");
      }
      gameStatus = "On";
      rounds = 5;
      return;
    }
    gameStatus = "End of the game.";
  };

  const game = () => {
    for (let i = 0; i < rounds; i++) {
      playRound();
      console.log(
        `PlayerScore is ${playerScore}, computerScore is ${computerScore}`
      );
    }
    gameStatusChecker();
  };

  while (gameStatus === "On") {
    game();
  }

  if (computerScore > playerScore) {
    console.log(`You lost: ${playerScore}:${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`You won: ${playerScore}:${computerScore}`);
  }
})();