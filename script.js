const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const buttonPlayAgain = document.querySelector("#playAgain");

const score = document.querySelector("#score");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => {playRound(0)});
buttonPaper.addEventListener("click", () => {playRound(1)});
buttonScissors.addEventListener("click", () => {playRound(2)});

buttonPlayAgain.style.visibility = "hidden";
buttonPlayAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    gameResult.textContent = "";
    score.textContent = "0-0";
    buttonPlayAgain.style.visibility = "hidden";
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
});


function computerPlay () {
    return Math.floor(Math.random() * 3);
}

function playRound (playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        roundResult.textContent = "It's a tie.";
        score.textContent = playerScore + "-" + computerScore;
    } else if ((playerSelection === 0 && computerSelection === 2) ||
               (playerSelection === 1 && computerSelection === 0) ||
               (playerSelection === 2 && computerSelection === 1)) {
        playerScore++;
        roundResult.textContent = "You won!";
        score.textContent = playerScore + "-" + computerScore;
    } else {
        computerScore++;
        roundResult.textContent = "You lost...";
        score.textContent = playerScore + "-" + computerScore;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            gameResult.textContent = "You won the game!";
        } else if (computerScore >= 5) {
            gameResult.textContent = "You lost the game!";
        }

        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;

        buttonPlayAgain.style.visibility = "visible";


    }
    
}

