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
    }
    if (getComputerChoice.toLowerCase() == "paper" && getHumanChoice.toLowerCase() == "scissor") {
        console.log("You win! scissor beats rock");
    }
    if (getComputerChoice.toLowerCase() == "scissor" && getHumanChoice.toLowerCase() == "scissor") {
        console.log("Tie! both with scissor");
    }
    if (getComputerChoice.toLowerCase() == "rock" && getHumanChoice.toLowerCase() == "rock") {
        console.log("Tie! both with rock");
    }
    if (getComputerChoice.toLowerCase() == "paper" && getHumanChoice.toLowerCase() == "rock") {
        console.log("You lose! paper beats rock");
    }
    if (getComputerChoice.toLowerCase() == "scissor" && getHumanChoice.toLowerCase() == "rock") {
        console.log("You win! rock beats scissor");
    }
    if (getComputerChoice.toLowerCase() == "rock" && getHumanChoice.toLowerCase() == "paper") {
        console.log("You win! paper beats rock");
    }
    if (getComputerChoice.toLowerCase() == "paper" && getHumanChoice.toLowerCase() == "paper") {
        console.log("Tie! both with paper");
    }
    if (getComputerChoice.toLowerCase() == "scissor" && getHumanChoice.toLowerCase() == "paper") {
        console.log("You lose! scissor beats paper");
    }
}

