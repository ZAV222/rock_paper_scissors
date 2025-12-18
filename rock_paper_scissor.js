// function to generate random value of choice.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

let mainChoice = "";

// computer choosen value
function getComputerChoice() {
    
    let choice = getRandomInt(3)
    if (choice == 0) {
        mainChoice += "rock paper"
    }
    else if(choice == 1){
        mainChoice += "rock scissor"
    }
    else {
        mainChoice += "paper scissor"
    }
 
}
