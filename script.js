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

}

let playerSelection = (window.prompt("Enter your choice: ")).toLowerCase();
let computerSelection = computerPlay();

console.log(determineRoundWinner(playerSelection, computerSelection));