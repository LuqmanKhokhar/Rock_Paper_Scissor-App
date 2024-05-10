const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return option[ranIdx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    checkWinner(userWin, userChoice, compChoice);
  }
};

const checkWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Awesome! your ${userChoice} beats comp ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `Oops! Comp's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerText = "You both have same properties.";
  msg.style.backgroundColor = "orange";
};
