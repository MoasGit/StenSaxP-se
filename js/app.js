let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3);
if (randomNumber === 0) {
    return "rock"
} else if (randomNumber === 1) {
    return "scissors" 
    } else if (randomNumber === 2) {
        return "paper"
    }
}

const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');
const resetButton = document.getElementById('resetBtn');

rockButton.addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = winner('rock', computerChoice);
    const svenskaVal = translateToSwedish(computerChoice);
        if (result === 'Du vann!') {
            playerScore++
        } else if (result === 'Datorn vann') {
            computerScore++
        }
    document.getElementById('computerChoice').textContent = 'Datorn valde: ' + svenskaVal;
    document.getElementById('whoWon').textContent = result;
    document.getElementById('scoreBoard').textContent = 'Du: ' + playerScore + ' | Datorn: ' + computerScore;
});

scissorsButton.addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = winner('scissors', computerChoice);
    const svenskaVal = translateToSwedish(computerChoice);
        if (result === 'Du vann!') {
            playerScore++
        } else if (result === 'Datorn vann') {
            computerScore++
        }
    document.getElementById('computerChoice').textContent = 'Datorn valde: ' + svenskaVal;
    document.getElementById('whoWon').textContent = result;
    document.getElementById('scoreBoard').textContent = 'Du: ' + playerScore + ' | Datorn: ' + computerScore;
});

paperButton.addEventListener('click', function() {
    const computerChoice = getComputerChoice();
    const result = winner('paper', computerChoice);
    const svenskaVal = translateToSwedish(computerChoice);
        if (result === 'Du vann!') {
            playerScore++
        } else if (result === 'Datorn vann') {
            computerScore++
        }
    document.getElementById('computerChoice').textContent = 'Datorn valde: ' + svenskaVal;
    document.getElementById('whoWon').textContent = result;
    document.getElementById('scoreBoard').textContent = 'Du: ' + playerScore + ' | Datorn: ' + computerScore;
});

function winner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Lika';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Du vann!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Du vann!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Du vann!';
    } else {
        return 'Datorn vann';
    }
}

function translateToSwedish(choice) {
    if (choice === 'rock') return 'Sten';
    if (choice === 'scissors') return 'Sax';
    if (choice === 'paper') return 'Påse';
}

resetButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById('computerChoice').textContent = '';
    document.getElementById('whoWon').textContent = 'Gör ditt val!';
    document.getElementById('scoreBoard').textContent = 'Du: 0 | Datorn: 0';
});
