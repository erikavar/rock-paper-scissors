let playOptions = ["Rock", "Paper", "Scissors"];
let roundResult;

let playerScore = 0;
let compScore = 0;

function computerPlay() {
    return playOptions[Math.floor(Math.random()*playOptions.length)];
}

function playRound(playerSelection, computerSelection) {
   let anyCase = prompt("Rock, Paper, or Scissors?")
   playerSelection = anyCase.charAt(0).toUpperCase() + anyCase.toLowerCase().slice(1);
   computerSelection = computerPlay();
   if ((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
       roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
       compScore += 1;
   }
   else if (playerSelection === computerSelection) {
       roundResult = 'It\'s a tie! Try again.';
   }
   else {
       roundResult = `${playerSelection} beats ${computerSelection}. You win!`;
       playerScore +=1;
   }
   return roundResult;
}


function game() {
   
    let roundOne = playRound();
    alert(roundOne);

    let roundTwo = playRound();
    alert(roundTwo);

    let roundThree = playRound();
    alert(roundThree);

    let roundFour = playRound();
    alert(roundFour);

    let roundFive = playRound();
    alert(roundFive);

    let totalScore = `You: ${playerScore}, Computer: ${compScore}`;
    return totalScore;
}