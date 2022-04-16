import gameState from "./gameState.js";
import { attachListeners } from "./listeners.js";
import displayNextWord from "./displayNextWord.js";

const startGame = function () {
  gameState.startTime = new Date().getTime();
  displayNextWord();
  attachListeners();
  gameState.rootEl.classList.add("started");
};

export default startGame;
