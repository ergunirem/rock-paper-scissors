function computerPlay() {
    let items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)]
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock";
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors";
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock";
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper";
    }

    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors";
    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper";
    }

    else {
        return "It's a tie!";
    }

}

const images = document.querySelectorAll('.img-left');
let playerScore = 0;
let computerScore = 0;

images.forEach(image => image.addEventListener("click", function (e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection) 
    if (result.includes('win')) {
        playerScore++;
        document.getElementById("playerScore").innerHTML=playerScore;
    }
    else if (result.includes('lose')) {
        computerScore++;
        document.getElementById("computerScore").innerHTML=computerScore;
    }
    document.getElementById("roundResult").textContent = result;
}))




