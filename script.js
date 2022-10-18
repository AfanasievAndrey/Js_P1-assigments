const computerPlay = function () {
  let compChoices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * compChoices.length + 1);
  if (randomChoice === 1) {
    return "rock";
  }
  if (randomChoice === 2) {
    return "paper";
  }
  if (randomChoice === 3) {
    return "scissors";
  }
};
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It is a draw!";
  } else if ((playerSelection == "rock") & (computerSelection == "scissor")) {
    return "Player win";
  } else if ((playerSelection == "scissor") & (computerSelection == "paper")) {
    return "Player win";
  } else if ((playerSelection == "paper") & (computerSelection == "rock")) {
    return "Player win";
  } else return "Computer win";
};

const game = function () {
  let computerWins = 0,
    playerWins = 0;
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Choose your move: paper, rock or scissors");
    const playerSelected = playerSelection.toLowerCase();
    const computerSelected = computerPlay();
    if (
      playerSelected == "rock" ||
      playerSelected == "paper" ||
      playerSelected == "scissors"
    ) {
      console.log(`Round ${i} \n`);
      if (playRound(playerSelected, computerSelected) == "It is a draw!") {
        console.log(`Score - Player: ${playerWins} Computer: ${computerWins}`);
      } else if (playRound(playerSelected, computerSelected) == "Player win!") {
        playerWins++;
        console.log(
          `Score - Player: ${playerWins} Computer: ${computerWins}\n${playerSelected} vs ${computerSelected}`
        );
      } else {
        computerWins++;
        console.log(
          `Score - Player: ${playerWins} Computer: ${computerWins}\n${playerSelected} vs ${computerSelected}`
        );
      }
      console.log(playRound(playerSelected, computerSelected));
    } else {
      alert("Make correct choice: paper, rock or scissors");
      i--;
    }
  }
  if (playerWins > computerWins) {
    console.log("Congrats Player win!");
    console.log(`Final Score: Player: ${playerWins} Computer: ${computerWins}`);
  } else if (playerWins < computerWins) {
    console.log("Computer win!");
    console.log(`Final Score: Player: ${playerWins} Computer: ${computerWins}`);
  } else {
    console.log(`It's a draw!`);
    console.log(`Final Score: Player: ${playerWins} Computer: ${computerWins}`);
  }
};
game();
