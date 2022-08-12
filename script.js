function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log (computerChoice);
}

getComputerChoice()

function gameRound() {
    var computerSelection = getComputerChoice();
    var playerSelection = window.prompt("Rock, Paper or Scissors?");
}

gameRound()