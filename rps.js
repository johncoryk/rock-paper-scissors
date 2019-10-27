let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rockChoice_div = document.getElementById("rock-choice");
const paperChoice_div = document.getElementById("paper-choice");
const scissorsChoice_div = document.getElementById("scissors-choice");
const resetBox_div = document.getElementById("reset-box");

function getComputerChoice() {
  const choices = ["rock-choice", "paper-choice", "scissors-choice"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock-choice") return "Rock";
  if (letter === "paper-choice") return "Paper";
  return "Scissors";
  }

function win(userInput, computerInput) {
  const userInput_div = document.getElementById(userInput);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(userInput)} beats ${convertToWord(computerInput)}. You win!`;
  document.getElementById(userInput).classList.add("greenglow");
  setTimeout(() => userInput_div.classList.remove("greenglow"), 400);
}

function lose(userInput, computerInput) {
  const userInput_div = document.getElementById(userInput);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerInput)} beats ${convertToWord(userInput)}. You lost!`;
  document.getElementById(userInput).classList.add("redglow");
  setTimeout(() => userInput_div.classList.remove("redglow"), 400);
}

function draw(userInput) {
  const userInput_div = document.getElementById(userInput);
  result_p.innerHTML = `You both picked ${convertToWord(userInput)}. It's a draw.`;
  document.getElementById(userInput).classList.add("greyglow");
  setTimeout(() => userInput_div.classList.remove("greyglow"), 400);
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
      draw(userChoice);
      break;
  }
}

function reset() {
  userScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore = 0;
  computerScore_span.innerHTML = userScore;
  result_p.innerHTML = "You reset the game!";
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
  resetBox_div.addEventListener('click', function() {
    reset();
  })

}

main()