function computerChoice()
{
    const choices = ['rock','paper', 'scissors'];
    return choices[Math.floor(Math,random () * 3)];
}
function determineWinner(playerChoice, computerChoice){
    let winner = null;

    if(playerChoice === computerChoice){
      winner ='It\'s a Tie';
    }
    else if(playerChoice ==='rock' && computerChoice ==='scissors'){
        winner ='player';
    }
    else if(playerChoice === 'scissors' && computerChoice === 'paper'){
         winner ='computer';
    }
    else{
        winner = 'computer';
    }
    return winner;
}

function playGame(playerChoice)
{
   let computerThrow = computerChoice();
   let winner = determineWinner(playerChoice, computerThrow);
   console.log(`player throws ${playerChoice} computer throws ${computerThrow}.The winner is ${winner}.`)
}

playGame('rock');