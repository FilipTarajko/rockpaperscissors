function computerPlay()
{
    let options = Array("rock", "paper", "scissors");
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

function playRound()
{
    let playerSelection = (window.prompt("Enter your choice: ")).toLowerCase();
    let computerSelection = computerPlay();

    console.log(`Computer's choice: ${computerSelection}, player's choice: ${playerSelection}`)
    console.log(determineRoundWinner(playerSelection, computerSelection));
    if(determineRoundWinner(playerSelection, computerSelection) == "player wins!")
    {
        roundsWon++;
    }
    else if(determineRoundWinner(playerSelection, computerSelection) == "computer wins!")
    {
        roundsLost++;
    }
    console.log(`Score: ${roundsWon}:${roundsLost}`);
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

let roundsWon = 0;
let roundsLost = 0;

while(roundsWon<3&&roundsLost<3)
{
    playRound();
}
announceWinner();