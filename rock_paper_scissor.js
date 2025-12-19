// function to generate random value of choice.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}



// computer choosen value
function getComputerChoice() {
    
    let choice = getRandomInt(3)
    if (choice == 0) {
        let mainChoice = "rock";
        return mainChoice;
    }
    if (choice == 1) {
        let mainChoice = "paper";
        return mainChoice;
    }
    if (choice == 2) {
        let mainChoice = "scissor";
        return mainChoice;
    }
    
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice:");

    return humanChoice.toLocaleLowerCase();

}

// play round function
function playRound(getComputerChoice,getHumanChoice){
    if (getComputerChoice.toLowerCase() == "rock" && getHumanChoice.toLowerCase() == "scissor" ) {
        console.log("You Lose! rock beats scissor");
        return "cmp";
    }
    if (getComputerChoice.toLowerCase() == "paper" && getHumanChoice.toLowerCase() == "scissor") {
        console.log("You win! scissor beats rock");
        return "hmn";
    }
    if (getComputerChoice.toLowerCase() == "scissor" && getHumanChoice.toLowerCase() == "scissor") {
        console.log("Tie! both with scissor");
        return "tie";
    }
    if (getComputerChoice.toLowerCase() == "rock" && getHumanChoice.toLowerCase() == "rock") {
        console.log("Tie! both with rock");
        return "tie";
    }
    if (getComputerChoice.toLowerCase() == "paper" && getHumanChoice.toLowerCase() == "rock") {
        console.log("You lose! paper beats rock");
        return "cmp";
    }
    if (getComputerChoice.toLowerCase() == "scissor" && getHumanChoice.toLowerCase() == "rock") {
        console.log("You win! rock beats scissor");
        return "hmn";
    }
    if (getComputerChoice.toLowerCase() == "rock" && getHumanChoice.toLowerCase() == "paper") {
        console.log("You win! paper beats rock");
        return "hmn";
    }
    if (getComputerChoice.toLowerCase() == "paper" && getHumanChoice.toLowerCase() == "paper") {
        console.log("Tie! both with paper");
        return "tie";
    }
    if (getComputerChoice.toLowerCase() == "scissor" && getHumanChoice.toLowerCase() == "paper") {
        console.log("You lose! scissor beats paper");
        return "cmp";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let tracker = 0;
    let computerC = getComputerChoice();
    let humanC = getHumanChoice();
    while (tracker < 5) {
        let store = playRound(computerC,humanC);
        if (store == "cmp") {
            computerScore = computerScore+1;
        }
        if (store == "hmn") {
            humanScore = humanScore+1;
        }
        tracker = tracker+1;
    }
}
playGame()
console.log("human score is "+humanScore+" computer score is "+computerScore);
