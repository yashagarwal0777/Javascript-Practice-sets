const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
    const result = playRound(button.id,computerPlay());
     resultEl.textContent = result;
    });
});

const playerEl = document.getElementById("user-score")
const computerEl = document.getElementById("computer-score")

let playerScore = 0;
let computerScore = 0;

const resultEl = document.getElementById("result");


function computerPlay() {
    const choices = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 
}

function playRound(playerSelection,computerSelection){

    if(playerSelection === computerSelection){
        return "it's a tie!";
    }

    else if( (playerSelection === "rock" &&
            computerSelection === "scissors") ||
            (playerSelection === "paper" &&
            computerSelection === "rock") ||
            (playerSelection === "scissors" &&
            computerSelection === "paper") 
            ) {
                playerScore++
                 playerEl.textContent = playerScore;
                return "You win! " + playerSelection + " beats " + computerSelection;
            }

    else {      
                computerScore++
                computerEl.textContent =  computerScore;
                return "You lose! " + computerSelection + " beats " + playerSelection;
            }
};