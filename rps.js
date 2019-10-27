let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rockChoice_div = document.getElementById("rock-choice");
const paperChoice_div = document.getElementById("paper-choice");
const scissorsChoice_div = document.getElementById("scissors-choice");

function getComputerChoice() {
  const choices = ["rock-choice", "paper-choice", "scissors-choice"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userInput, computerInputer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = "You won!";
}

function lose() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
}

function draw() {
  
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rock-choicescissors-choice":
    case "paper-choicerock-choice":
    case "scissors-choicepaper-choice":
      win(userChoice, computerChoice);
      break;
    case "scissors-choicerock-choice":
    case "rock-choicepaper-choice":
    case "paper-choicescissors-choice":
      lose(userChoice, computerChoice);
      break;
    case "scissors-choicescissors-choice":
    case "rock-choicerock-choice":
    case "paper-choicepaper-choice":
      draw();
      break;
  }
}

game();

function main() {
  rockChoice_div.addEventListener('click', function() {
    game("rock-choice");
  })

  paperChoice_div.addEventListener('click', function() {
    game("paper-choice");
  })

  scissorsChoice_div.addEventListener('click', function() {
    game("scissors-choice");
  })
}

main()