function getComputerChoice() {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    var playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    var computerSelection = getComputerChoice().toLowerCase();

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
    }
     else {
        return "That is not an option please choose Rock, Paper or Scissors"
    }

  }
   
  alert(playRound());

  function game() {
    var playerWins = 0;
    var computerWins = 0;

    for (let i = 0; i < 5; i++){
    playRound();
    if (playRound().includes("You win")){
        playerWins++;
        console.log("You won this round");
    } else if (playRound().includes("You lose")){
        computerWins++;
        console.log("You lost this round");
    } 
    }
  }

  game();