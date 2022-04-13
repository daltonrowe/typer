import gameState from "./gameState.js";

const displayNextWord = function () {
  const wordMarkup = document.createElement("DIV");
  const nextWord = gameState.wordList[gameState.currentWord];

  for (let i = 0; i < nextWord.length; i++) {
    const letter = nextWord[i];
    const letterEl = document.createElement("SPAN");
    letterEl.classList.add("unsolved");
    letterEl.textContent = letter;
    wordMarkup.appendChild(letterEl);
  }

  gameState.wordEl.innerHTML = "";
  gameState.wordEl.appendChild(wordMarkup);
};

export default displayNextWord;
