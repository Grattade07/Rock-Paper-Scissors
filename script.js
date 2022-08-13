function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

    
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "Lose";
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return "Win";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "Win";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "Lose";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "Lose";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "Win";
    } else if (playerSelection === "") {
        return "It appears you didn't put any option in. Please choose an option."
    } else {
        return "That is not an option please choose Rock, Paper or Scissors"
    }

}

    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    let playerScore = 0;
    let computerScore = 0;

    function game() {
        for (i = 0; i < 5; i++) {
            let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
            let computerSelection = getComputerChoice().toLowerCase();
            console.log(playRound(playerSelection, computerSelection));
        }
    }

    game();
