function computerPlay () {
    switch (getRandomInt(3)) {
        case 0:
           return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error 0001";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playerPlay () {
    let playerSelection = window.prompt("\nYou play: ").toLowerCase();

    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = window.prompt("Unacceptable input. Please choose from \"Rock\", \"Paper\", or \"Scissors\": ").toLowerCase();
    }

    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function playRound (playerSelection, computerSelection) {
    console.log("You play: " + playerSelection);
    console.log("Computer plays: " + computerSelection);
    
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    return "It's a tie! Rock ties with Rock.";
                case "Paper":
                    return "You lose! Paper beats Rock.";
                case "Scissors":
                    return "You win! Rock beats Scissors.";
                default:
                    return "Error 0003";
            }
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return "You win! Paper beats Rock.";
                case "Paper":
                    return "It's a tie! Paper ties with Paper.";
                case "Scissors":
                    return "You lose! Scissors beats Paper.";
                default:
                    return "Error 0004";
            }
        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    return "You lose! Rock beats Scissors.";
                case "Paper":
                    return "You win! Scissors beat Paper.";
                case "Scissors":
                    return "It's a tie! Scissors tie with Scissors.";
                default:
                    return "Error 0005";
            }
        default:
            return "Error 0002";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";
    let score;
    
    for(let round = 0; round < 5; round++) {
        result = playRound(playerPlay(), computerPlay())

        switch (result.slice(0, result.indexOf("!") + 1)) {
            case "You win!":
                playerScore++;
                break;
            case "You lose!":
                computerScore++;
                break;
            case "It's a tie!":
                break;
            default:
                console.log("Error 0006");
        }

        score = "Score: " + playerScore + "-" + computerScore + ".";
        console.log(result + " " + score);
        console.log("\n");
    }

    if ((playerScore - computerScore) > 0) {
        console.log("\nYou won the game! " + score);
    } else if ((playerScore - computerScore) < 0) {
        console.log("\nYou lost the game! " + score);
    } else {
        console.log("\nYou tied with the computer! " + score);
    }
}

