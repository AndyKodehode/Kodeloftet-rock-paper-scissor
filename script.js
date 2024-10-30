let yourResult = document.querySelector('.yourResult');
let opponentResult = document.querySelector('.opponentResult');
let yourTurn = document.querySelector('.youDraw');
let opponentTurn = document.querySelector('.opponentDraw');
let finalResult = document.querySelector('.finalResult');

let gameArray = ['rock', 'paper', 'scissor'];

let resultPlayer;
let resultCPU;
let endResult;

yourTurn.addEventListener('click', function () {
  resultPlayer = gameArray[Math.floor(Math.random() * gameArray.length)];
  yourResult.textContent = 'you got:' + ' ' + resultPlayer;
  console.log(resultPlayer);
});

opponentTurn.addEventListener('click', function () {
  resultCPU = gameArray[Math.floor(Math.random() * gameArray.length)];
  opponentResult.textContent = 'the computer got:' + ' ' + resultCPU;
  console.log(resultCPU);

  if (
    (resultPlayer === 'paper' && resultCPU === 'scissor') ||
    (resultPlayer === 'scissor' && resultCPU === 'rock') ||
    (resultPlayer === 'rock' && resultCPU === 'paper')
  ) {
    endResult = 'you lost';
    console.log('You lost');
  } else if (
    (resultPlayer === 'paper' && resultCPU === 'paper') ||
    (resultPlayer === 'scissor' && resultCPU === 'scissor') ||
    (resultPlayer === 'rock' && resultCPU === 'rock')
  ) {
    console.log('its a draw');
    endResult = 'its a draw';
  } else {
    endResult = 'you won';
    console.log('you won');
  }

  finalResult.textContent = endResult;
});
