const rockBtn = document.getElementById("ROCK")
const paperBtn = document.getElementById("PAPER")
const scissorsBtn = document.getElementById("SCISSORS")
const userScore = document.getElementById("userScore")
const computerScore = document.getElementById("computerScore")
const resultText = document.getElementById("resultText")

let score = {
  user: 0,
  computer: 0
}

rockBtn.addEventListener("click", () => play("ROCK"))
paperBtn.addEventListener("click", () => play("PAPER"))
scissorsBtn.addEventListener("click", () => play("SCISSORS"))

function play(userChoice) {
  const compChoice = () => {
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
  }

  const computerChoice = compChoice()
  const result = compareChoice(userChoice, computerChoice)
  resultText.textContent = result
  updateScore(result)
}

function compareChoice(userChoice, compChoice) {
  if(userChoice === compChoice) {
    return "TIE"
  }else if(userChoice === "ROCK") {
    if(compChoice === "PAPER") {
      return "COMPUTER WIN"
    }else {
      return "YOU WIN"
    }
  }else if(userChoice === "PAPER") {
    if(compChoice === "ROCK") {
      return "YOU WIN"
    }else {
      return "COMPUTER WIN"
    }
  }else if(userChoice === "SCISSORS") {
    if(compChoice === "ROCK") {
      return "COMPUTER WIN"
    }else {
      return "YOU WIN"
    }
  }
}

function updateScore(result) {
  if(result === "YOU WIN") {
    score.user++
    userScore.textContent = score.user
  } else if(result === "COMPUTER WIN") {
    score.computer++
    computerScore.textContent = score.computer
  }
  
  if(score.user === 5) {
    alert("Congratulations! You have won the game!")
    resetScore()
  } else if(score.computer === 5) {
    alert("Sorry, you have lost the game.")
    resetScore()
  }
}

function resetScore() {
  score.user = 0
  score.computer = 0
  userScore.textContent = score.user
  computerScore.textContent = score.computer
}
