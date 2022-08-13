function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper Beats Rock";
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return "You win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "") {
        return "It appears you didn't put any option in. Please choose an option."
    }  else {
        return "That is not an option please choose Rock, Paper or Scissors"
    }

  }

  function game() {
   
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++){
        if (playRound().includes("win")) {
            ++playerScore;
            console.log("The score is Player = " + playerScore + ", Computer = " + computerScore)
        } else if (playRound().includes("lose")) {
            ++computerScore;
            console.log("The score is Player = " + playerScore + ", Computer = " + computerScore)
        } else if (playRound().includes("tie")) {
            ++draws;
            console.log("The score is Player = " + playerScore + ", Computer = " + computerScore)
        }
    }


  }

  game();