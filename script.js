//Written by @viktordotcom
let playerPoints = 0;
let computerPoints = 0;

function computerPlay(){
    const computerNumber = Math.floor(Math.random()*3 +1);
    if (computerNumber === 1) {
      cpuRock.classList.add('playing')
      cpuPaper.classList.remove('playing')
      cpuScissors.classList.remove('playing')
      return  'rock'
    }
    else if (computerNumber === 2) {
      cpuPaper.classList.add('playing')
      cpuRock.classList.remove('playing')
      cpuScissors.classList.remove('playing')
      return  'paper'
    }
    else if (computerNumber === 3){
      cpuScissors.classList.add('playing')
      cpuPaper.classList.remove('playing')
      cpuRock.classList.remove('playing')
      return 'scissors'
    }

} 

const output = document.querySelector('#outputDiv')
const cpuRock = document.querySelector('#cpuRock')
const cpuPaper = document.querySelector('#cpuPaper')
const cpuScissors = document.querySelector('#cpuScissors')

document.querySelector('#rock').addEventListener("click", function() 
{
   playRound("rock");
   printPoints();
   endGame();
});


document.querySelector('#paper').addEventListener("click", function() {
   playRound("paper");
   printPoints();
   endGame();
});

document.querySelector('#scissors').addEventListener("click", function() {
   playRound("scissors");
   printPoints();
   endGame();
});

const container = document.querySelector('#currentRoundLog')
const content = document.createElement('div')
container.appendChild(content)

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if ( playerSelection === "rock" && computerSelection === "rock"||
    playerSelection ==="paper" && computerSelection === "paper" ||
    playerSelection ==="scissors" && computerSelection === "scissors")
    { 
      content.textContent = `Round is tied ${playerSelection} equal ${computerSelection}`;
       playerPoints+= 0.5, computerPoints +=0.5;
       
    }
    else if (playerSelection ==="rock" && computerSelection === "scissors" ||
    playerSelection ==="paper" && computerSelection === "rock"||
    playerSelection ==="scissors" && computerSelection === "paper") {  
       
      content.textContent = `You won! ${playerSelection} beat ${computerSelection}`;
      playerPoints ++;
      }
    else if (playerSelection ==="rock" && computerSelection === "paper" ||
    playerSelection ==="paper" && computerSelection === "scissors"||
    playerSelection ==="scissors" && computerSelection === "rock") {  
       
      content.textContent = `You Lose! ${computerSelection} beat ${playerSelection}`;
      computerPoints ++;
    }
    

}

function endGame(){
   
if (playerPoints >=5 && computerPoints >=5) {
   alert('The final result is a tie')
      
  playerPoints =0;
  computerPoints =0;
  printPoints();
  content.textContent = ''
  }

else if (playerPoints >=5) {
      alert(`You are the winner!!! You got to 5 point first 
      final score:${playerPoints} - ${computerPoints}`)
   playerPoints =0;
   computerPoints =0;
   printPoints();
   content.textContent = ''
   }
   
else if (computerPoints >=5) {alert('Nice try, the computer reached 5 point first')
     
   playerPoints =0;
   computerPoints =0;
   printPoints();
   content.textContent = ''
   }
}
function printPoints()
{
   output.textContent = 'Your points:' + ' ' +
   playerPoints + ' ' + 'Computer points:' + ' ' +computerPoints;
}
