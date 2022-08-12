function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log (computerChoice);
}

const playerSelection = prompt("Rock, Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(playerSelection)


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowercase() === computerSelection.toLowerCase()) {
        return ("It's a tie")
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return ("You lose! Paper Beats Rock")
    }
  }
   