const OPTIONS = ["rock", "paper", "scissors"];

function pickRandom(options) {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function computerPlay() {
    return pickRandom(OPTIONS);
}

function isWinner(player1, player2) {
    /* check who's the winner
    rock > scissors
    scissors > paper
    paper > rock
    */
    const winnerMap = {
        "rock": {
            "scissors": true,
            "paper": false
        },
        "scissors": {
            "paper": true,
            "rock": false
        },
        "paper": {
            "rock": true,
            "scissors": false
        }
    };

    return winnerMap[player1][player2];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "DRAW"
    } else {
        return isWinner(playerSelection, computerSelection) ? "WINNER" : "LOSER"
    }
}

function updateScore(result) {
    switch (result) {
        case "WINNER":
            playerScore++;
        case "LOSER":
            computerScore++;
    }
}

// SETUP
const buttons = document.querySelectorAll('button');

const resultContainer = document.querySelector('#result-container');
const element = document.createElement('div');
resultContainer.appendChild(element);

let playerScore = 0;
let computerScore = 0;

// RESPOND TO WHAT THE PLAYER SELECTS
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const playerSelection = this.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        updateScore(result)
        element.textContent = `Result: ${result} You: ${playerScore} Computer: ${computerScore}`;
    });
});
