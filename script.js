function computerPlay()
{
    let options = Array("rock", "paper", "scissors");
    return options[Math.floor(Math.random()*options.length)];
}

function determineRoundWinner(playerSelection, computerSelection)
{
    console.log(`Computer's choice: ${computerSelection}, player's choice: ${playerSelection}`)
    if(playerSelection==computerSelection)
    {
        return("tie!");
    }
}

let playerSelection = (window.prompt("Enter your choice: ")).toLowerCase();
let computerSelection = computerPlay();

console.log(determineRoundWinner(playerSelection, computerSelection));