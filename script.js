function computerPlay()
{
    let options = Array("rock", "paper", "scissors");
    return options[Math.floor(Math.random()*options.length)];
}

console.log(computerPlay());