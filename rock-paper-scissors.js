let playOptions = ["Rock", "Paper", "Scissors"];
let roundResult;

let playerScore = 0;
let compScore = 0;

function computerPlay() {
    return playOptions[Math.floor(Math.random()*playOptions.length)];
}

function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay();
   if ((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
       roundResult = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
       compScore += 1;
   }
   else if (playerSelection === computerSelection) {
       roundResult = 'It\'s a tie! Try again.';
   }
   else {
       roundResult = `${playerSelection} beats ${computerSelection}. You win this round!`;
       playerScore +=1;
   }
}

window.onload = function() {
   
    const buttons = document.querySelectorAll("button");
    const results = document.querySelector('#results');
    const currentScore = document.createElement('div');
    const endScore = document.createElement('div');
    currentScore.classList.add('content');
    buttons.forEach((button) => {   
        button.addEventListener("click", function() {
            playRound(button.id, computerPlay);
            currentScore.textContent = `${roundResult} Current Score: You = ${playerScore}, Computer = ${compScore}`;
            results.appendChild(currentScore);
            if (playerScore === 5 || compScore === 5) {
                let totalScore = `FINAL SCORE: You = ${playerScore}, Computer = ${compScore}`;
                endScore.textContent = `${totalScore}`;
                results.appendChild(endScore);
                setTimeout(resetGame, 500);
            }
        })     
    });
    
    function resetGame(){
        alert("Game is over. Click \"OK\" to play again.");
        playerScore = 0;
        compScore = 0;
        results.removeChild(endScore);
        results.removeChild(currentScore);
    }

}


