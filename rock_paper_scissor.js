// ---------- Utilities ----------
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// ---------- Computer choice ----------
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[getRandomInt(3)];
}

// ---------- Game logic ----------
function playRound(computer, human) {
    if (computer === human) {
        return "tie";
    }

    if (
        (computer === "rock" && human === "scissor") ||
        (computer === "paper" && human === "rock") ||
        (computer === "scissor" && human === "paper")
    ) {
        return "cmp";
    }

    return "hmn";
}

// ---------- Game state ----------
let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRounds = 5;

const resultDiv = document.querySelector(".results");

// ---------- Round handler ----------
function handleRound(humanChoice) {
    if (round >= maxRounds) return;

    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);

    if (result === "hmn") humanScore++;
    if (result === "cmp") computerScore++;

    round++;

    resultDiv.innerHTML = `
        <p>Round ${round}</p>
        <p>Human: ${humanChoice} | Computer: ${computerChoice}</p>
        <p>Score → Human: ${humanScore}, Computer: ${computerScore}</p>
    `;

    if (round === maxRounds) {
        resultDiv.innerHTML += `<h3>Game Over</h3>`;
        disableButtons();
    }
}

// ---------- Disable buttons ----------
function disableButtons() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

// ---------- Event listeners ----------
document.getElementById("btn1").addEventListener("click", () => {
    handleRound("rock");
});

document.getElementById("btn2").addEventListener("click", () => {
    handleRound("paper");
});

document.getElementById("btn3").addEventListener("click", () => {
    handleRound("scissor");
});
