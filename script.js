const results = document.querySelector("#results");

const playerPoints = document.querySelector("#playerScore");

const computerPoints = document.querySelector("#compScore");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = "rock"

    results.textContent = (playRound(playerSelection, computerSelection));

    playerPoints.textContent = playerScoreCount();

    computerPoints.textContent = compScoreCount();
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = "paper"

    results.textContent = (playRound(playerSelection, computerSelection));

    playerPoints.textContent = playerScoreCount();

    computerPoints.textContent = compScoreCount();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = "scissors"

    results.textContent = (playRound(playerSelection, computerSelection));

    playerPoints.textContent = playerScoreCount();

    computerPoints.textContent = compScoreCount();
});

function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playerScoreCount(){
    if (playerScore != 5) {
    return `Your score is ${playerScore}`;
    } else if (playerScore === 5) {
        return `Your score is ${playerScore}. Congratulations, you\'ve won!`;
    }
}

function compScoreCount() {
    if (computerScore != 5) {
        return `The computer\'s score is ${computerScore}`;
        } else if (computerScore === 5) {
            return `The computer\'s score is ${computerScore}. Better luck next time`;
        }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie" ;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return ("Lose");
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        playerScore++;
        return ("Win");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return("Win");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return ("Lose");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return ("Lose");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return ("Win");
    } else if (playerSelection === "") {
        return ("It appears you didn't put any option in. Please choose an option.")
    } else {
        return ("That is not an option please choose Rock, Paper or Scissors")
    }
}
