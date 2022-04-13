import gameState from "./gameState.js";
import displayNextWord from "./displayNextWord.js";
import gameComplete from "./gameComplete.js";

const checkLetter = function (event) {
  const letterCode = event.code;
  if (letterCode.indexOf("Key") < 0) return;

  const letterToCheckEl = gameState.wordEl.querySelector(".unsolved");
  const letterToCheck = letterToCheckEl.textContent.toUpperCase();
  if (`Key${letterToCheck}` === letterCode) {
    gameState.numberOfCorrect++;
    letterToCheckEl.classList.remove("unsolved");
    letterToCheckEl.classList.add("solved");
  } else {
    gameState.numberOfErrors++;
  }

  const lettersRemaining =
    gameState.wordEl.querySelectorAll(".unsolved").length;
  if (lettersRemaining === 0) {
    console.log("word complete");
    gameState.currentWord++;

    if (gameState.currentWord === gameState.wordList.length) {
      gameComplete();
    } else {
      displayNextWord();
    }
  }
};

export default checkLetter;
