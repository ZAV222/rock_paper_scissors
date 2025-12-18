// function to generate random value of choice.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}



// computer choosen value
function getComputerChoice() {
    
    let choice = getRandomInt(3)
    if (choice == 0) {
        let mainChoice = "rock paper";
        return mainChoice;
    }
    if (choice == 1) {
        let mainChoice = "rock scissor";
        return mainChoice;
    }
    if (choice == 2) {
        let mainChoice = "paper scissor";
        return mainChoice;
    }
    
}

// Get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice:");

    return humanChoice.toLocaleLowerCase();

}



