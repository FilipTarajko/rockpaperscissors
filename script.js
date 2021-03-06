function computerPlay()
{
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function determineRoundWinner(playerSelection, computerSelection)
{
    if(playerSelection==computerSelection)
    {
        return("tie!");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock")
    {
        return("player wins!");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "rock" && computerSelection == "paper")
    {
        return("computer wins!");
    }
    else
    {
        return("incorrect choice!");
    }
}

function displayComputersChoice(){
    computersChoiceDisplay.textContent = (`Computer's choice: ${computerSelection}`);
}

function displayPlayersChoice(){
    playersChoiceDisplay.textContent = (`Player's choice: ${playerSelection}`);
}

function addScore(){
    if(determineRoundWinner(playerSelection, computerSelection) == "player wins!")
    {
        roundsWon++;
    }
    else if(determineRoundWinner(playerSelection, computerSelection) == "computer wins!")
    {
        roundsLost++;
    }
    else{
        roundsWon++;
        roundsLost++;
    }
}

function displayRoundResult(){
    roundResultDisplay.textContent = (`Last round: ${determineRoundWinner(playerSelection, computerSelection)}`);
}

function displayScore(){
    scoreDisplay.textContent = (`Score: ${roundsWon}:${roundsLost}`);
}

function playRound(targetSelection)
{
    playerSelection = targetSelection;
    computerSelection = computerPlay();
    displayPlayersChoice();
    displayComputersChoice();
    displayRoundResult();
    addScore();
    displayScore();
    if((roundsWon>=targetRounds||roundsLost>=targetRounds)&&roundsWon!=roundsLost){
        announceWinner();
    }
}

function announceWinner()
{
    if(roundsWon>roundsLost)
    {
        winnerDisplay.textContent = "You win!";
    }
    else
    {
        winnerDisplay.textContent = "You lose!";
    }
    buttons.forEach((button)=>{
        button.hidden = true;
    });
}

const winnerDisplay = document.querySelector('#winner');
const roundResultDisplay = document.querySelector('#roundResultDisplay');
const scoreDisplay = document.querySelector('#scoreDisplay');
const playersChoiceDisplay = document.querySelector('#playersChoiceDisplay');
const computersChoiceDisplay = document.querySelector('#computersChoiceDisplay');
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>
    playRound(button.id));
});

let playerSelection;
let computerSelection;
let roundsWon = 0;
let roundsLost = 0;
let targetRounds = 5;