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
// console.log(computerPlay());
const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "It is a draw!!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "Computer win";
    } else {
      return "Player win this game";
    }
  } else if (playerSelection == "scissor") {
    if (computerSelection == "rock") {
      return "Computer win";
    } else {
      return "Player win this game";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "Computer win";
    } else {
      return "Player win this game";
    }
  }
};
const playerSelection = "rock";
const computerSelection = computerPlay();
const result = playRound(playerSelection, computerSelection);
console.log(`${result}, ${playerSelection} vs ${computerSelection}`);
