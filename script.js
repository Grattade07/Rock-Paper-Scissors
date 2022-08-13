function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerChoice;
}

var playerSelection = prompt("Rock, Paper or Scissors?");
var computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a tie"
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You lose! Paper Beats Rock"
    }
  }
   
  var theResult = playRound(playerSelection, computerSelection)
  console.log(theResult)