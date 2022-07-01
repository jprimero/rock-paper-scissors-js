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
        return isWinner(playerSelection, computerSelection) ? "WINNER" : "FALSE"
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const playerSelection = this.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    });
});
