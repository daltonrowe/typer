import gameState from "./esm/gameState.js";
import { attachListeners } from "./esm/listeners.js";
import displayNextWord from "./esm/displayNextWord.js";

function startGame() {
  gameState.startTime = new Date().getTime();
  displayNextWord();
  attachListeners();
  gameState.rootEl.classList.add("started");
}

gameState.startEl.addEventListener("click", startGame);
