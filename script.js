function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return "Lose";
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        playerScore++;
        return "Win";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return "Win";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return "Lose";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return "Lose";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "Win";
    } else if (playerSelection === "") {
        return "It appears you didn't put any option in. Please choose an option."
    } else {
        return "That is not an option please choose Rock, Paper or Scissors"
    }

}

    function game() {
        for (i = 0; i < 5; i++) {
            let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
            let computerSelection = getComputerChoice().toLowerCase();
            console.log(playRound(playerSelection, computerSelection));
        }

        if (playerScore > computerScore) {
            return "You won. Congratulations!"
        } else if (playerScore < computerScore) {
            return "You lost. Better luck next time!"
        } else if (playerScore === computerScore) {
            return "It's a tie!"
        }
    }

    console.log(game());
