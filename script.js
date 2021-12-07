const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const buttonPlayAgain = document.querySelector("#playAgain");
const playerSelectionImage = document.querySelector("#playerSelectionImage")
const computerSelectionImage = document.querySelector("#computerSelectionImage")
const score = document.querySelector("#score");
const gameResult = document.querySelector("#gameResult");
const selections = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"];
let playerScore = 0;
let computerScore = 0;
buttonPlayAgain.disabled = true;
buttonPlayAgain.style.visibility = "hidden";

buttonRock.addEventListener("click", () => {playRound(0)});
buttonPaper.addEventListener("click", () => {playRound(1)});
buttonScissors.addEventListener("click", () => {playRound(2)});
buttonPlayAgain.addEventListener("click", () => {resetGameState()});


function resetGameState() {
    playerScore = 0;
    computerScore = 0;
    gameResult.textContent = "";
    score.textContent = "0-0";
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
    buttonPlayAgain.disabled = true;
    buttonPlayAgain.style.visibility = "hidden";
    playerSelectionImage.src = "";
    computerSelectionImage.src = "";
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computeResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        score.textContent = playerScore + "-" + computerScore;
    } else if ((playerSelection === 0 && computerSelection === 2) ||
               (playerSelection === 1 && computerSelection === 0) ||
               (playerSelection === 2 && computerSelection === 1)) {
        playerScore++;
        score.textContent = playerScore + "-" + computerScore;
    } else {
        computerScore++;
        score.textContent = playerScore + "-" + computerScore;
    }
}

function gameOver() {
    if (playerScore >= 5) {
        gameResult.textContent = "You Won!";
    } else if (computerScore >= 5) {
        gameResult.textContent = "You Lost...";
    }

    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;

    buttonPlayAgain.disabled = false;
    buttonPlayAgain.style.visibility = "visible";
}

function playRound(playerSelection) {
    let computerSelection = getRandomInt();
    setSelectionImages(playerSelection, computerSelection);
    computeResult(playerSelection, computerSelection);
    if (playerScore >= 5 || computerScore >= 5) gameOver();
}

function setSelectionImages(playerSelection, computerSelection) {
    playerSelectionImage.src = selections[playerSelection];
    computerSelectionImage.src = selections[computerSelection];
}

