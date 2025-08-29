const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const attemptCount = document.getElementById("attemptCount");
const resetBtn = document.getElementById("resetBtn");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  attemptCount.textContent = attempts;
  feedback.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  resetBtn.style.display = 'none';
}

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    feedback.textContent = "⚠️ Please enter a number between 1 and 100.";
    return;
  }

  attempts--;
  attemptCount.textContent = attempts;

  if (userGuess === secretNumber) {
    feedback.textContent = "🎉 Correct! You guessed it!";
    guessInput.disabled = true;
    guessBtn.disabled = true;
    resetBtn.style.display = 'inline-block';
  } else if (attempts === 0) {
    feedback.textContent = `💥 Out of attempts! The number was ${secretNumber}.`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
    resetBtn.style.display = 'inline-block';
  } else {
    feedback.textContent = userGuess > secretNumber ? "📉 Too high!" : "📈 Too low!";
  }

  guessInput.value = "";
});

resetBtn.addEventListener("click", resetGame);
