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
    console.log(`Computer's choice: ${computerSelection}`);
}

function displayPlayersChoice(){
    console.log(`Player's choice: ${playerSelection}`);
}

function getPlayersChoice(){
    return (window.prompt("Enter your choice: ")).toLowerCase();
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
}

function displayRoundResult(){
    console.log(determineRoundWinner(playerSelection, computerSelection));
}

function displayScore(){
    console.log(`Score: ${roundsWon}:${roundsLost}`);
}

function playRound()
{
    playerSelection = getPlayersChoice();
    computerSelection = computerPlay();
    displayPlayersChoice();
    displayComputersChoice();
    displayRoundResult();
    addScore();
    displayScore();
}

function announceWinner()
{
    if(roundsWon==3)
    {
        console.log("You win!");
    }
    else
    {
        console.log("You lose!");
    }
}
let playerSelection;
let computerSelection;
let roundsWon = 0;
let roundsLost = 0;

while(roundsWon<3&&roundsLost<3)
{
    playRound();
}
announceWinner();