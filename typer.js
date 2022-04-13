const wordList = ["test", "words", "pizza", "time", "with", "tacos"];
let captureTyping = false;
let currentWord = 0;
let startTime = 0;
let finishTime = 0;
let numberOfCorrect = 0;
let numberOfErrors = 0;

const rootEl = document.querySelector("#root");
const wordEl = document.querySelector("#word");
const startEl = document.querySelector("#start");

function attachListeners() {
  document.addEventListener("keydown", checkLetter);
}

function removeListeners() {
  document.removeEventListener("keydown", checkLetter);
}

function gameComplete() {
  removeListeners();
  rootEl.classList.add("complete");
  finishTime = new Date().getTime();
  const elapsedTime = finishTime / 1000 - startTime / 1000;

  let accuracy;
  if (numberOfErrors) {
    accuracy = numberOfErrors / numberOfErrors + numberOfCorrect;
  } else {
    accuracy = 0;
  }

  console.log("total:", numberOfCorrect + numberOfErrors);
  console.log("errors:", numberOfErrors);

  wordEl.textContent = `You Win! 
Accuracy: ${100 - accuracy}%. 
Time: ${elapsedTime.toFixed(2)} seconds`;
}

function displayNextWord() {
  const wordMarkup = document.createElement("DIV");
  const nextWord = wordList[currentWord];

  for (let i = 0; i < nextWord.length; i++) {
    const letter = nextWord[i];
    const letterEl = document.createElement("SPAN");
    letterEl.classList.add("unsolved");
    letterEl.textContent = letter;
    wordMarkup.appendChild(letterEl);
  }

  wordEl.innerHTML = "";
  wordEl.appendChild(wordMarkup);
}

function checkLetter(event) {
  const letterCode = event.code;
  if (letterCode.indexOf("Key") < 0) return;

  const letterToCheckEl = wordEl.querySelector(".unsolved");
  const letterToCheck = letterToCheckEl.textContent.toUpperCase();
  if (`Key${letterToCheck}` === letterCode) {
    numberOfCorrect++;
    letterToCheckEl.classList.remove("unsolved");
    letterToCheckEl.classList.add("solved");
  } else {
    numberOfErrors++;
  }

  const lettersRemaining = wordEl.querySelectorAll(".unsolved").length;
  if (lettersRemaining === 0) {
    console.log("word complete");
    currentWord++;

    if (currentWord === wordList.length) {
      gameComplete();
    } else {
      displayNextWord();
    }
  }
}

function startGame() {
  startTime = new Date().getTime();
  displayNextWord();
  attachListeners();
  rootEl.classList.add("started");
}

startEl.addEventListener("click", startGame);
