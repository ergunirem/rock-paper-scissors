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
};

function computerPlay() {
    const items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
};

function moveRight(e) {
    e.style.left = parseInt(e.style.left) + 150 + 'px';
}

function moveRightBack(e) {
    e.style.left = parseInt(e.style.left) + -150 + 'px';
}

function moveLeft(e) {
    e.style.right = parseInt(e.style.right) + 150 + 'px';
}

function moveLeftBack(e) {
    e.style.right = parseInt(e.style.right) + -150 + 'px';
}

let playerScore = 0;
let computerScore = 0;

const rightImages = document.querySelectorAll('.img-right');
rightImages.forEach(image => image.style.position= 'relative');
rightImages.forEach(image => image.style.right= '0px');
 

const images = document.querySelectorAll('.img-left');
images.forEach(image => image.style.position= 'relative');
images.forEach(image => image.style.left= '0px');
images.forEach(image => image.addEventListener("click", function (e) {
    //Call the play function with clicked choice and computer's random selection
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection)
    
    //Display this round's result and updated score
    if (result.includes('win')) {
        playerScore++;
        document.getElementById("playerScore").innerHTML=playerScore;
    }
    else if (result.includes('lose')) {
        computerScore++;
        document.getElementById("computerScore").innerHTML=computerScore;
    }
    document.getElementById("roundResult").textContent = result;

    //Move the image of player's choice forward and back
    moveRight(image);
    setTimeout(function () {moveRightBack(image)}, 1000);
    
    //Move the image of computer's choice forward and back
    const computerSelectionImage = document.getElementById(`right ` + computerSelection)
    moveLeft(computerSelectionImage);
    setTimeout(function () {moveLeftBack(computerSelectionImage)}, 1000);
}));




